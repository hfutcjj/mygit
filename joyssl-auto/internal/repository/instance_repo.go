package repository

import (
	"joyssl-auto/internal/model"
	"joyssl-auto/pkg/database"
	"joyssl-auto/pkg/logger"

	"go.uber.org/zap"
	"gorm.io/gorm"
)

type InstanceRepository struct {
	db *gorm.DB
}

func NewInstanceRepository() *InstanceRepository {
	return &InstanceRepository{
		db: database.DB,
	}
}

func (r *InstanceRepository) Create(instance *model.Instance) error {
	result := r.db.Create(instance)
	if result.Error != nil {
		logger.Log.Error("创建实例失败", zap.Error(result.Error))
		return result.Error
	}
	return nil
}

func (r *InstanceRepository) GetByID(id int64) (*model.Instance, error) {
	var instance model.Instance
	result := r.db.First(&instance, id)
	if result.Error != nil {
		if result.Error == gorm.ErrRecordNotFound {
			return nil, nil
		}
		return nil, result.Error
	}
	return &instance, nil
}

func (r *InstanceRepository) GetByUserID(userID int64, page, size int) ([]model.Instance, int64, error) {
	var instances []model.Instance
	var total int64

	query := r.db.Model(&model.Instance{}).Where("php_user_id = ?", userID)
	query.Count(&total)

	offset := (page - 1) * size
	err := query.Offset(offset).Limit(size).Order("created_at DESC").Find(&instances).Error
	return instances, total, err
}

func (r *InstanceRepository) Update(instance *model.Instance) error {
	return r.db.Save(instance).Error
}

// 逻辑删除, 把status字段改为4表示删除
func (r *InstanceRepository) Delete(id int64) error {
	return r.db.Model(&model.Instance{}).Where("id = ?", id).Update("status", 4).Error
}

// List 分页查询实例列表（支持筛选）
func (r *InstanceRepository) List(phpUserID int64, domain string, productType int, status int, startTime, endTime string, page, size int) ([]model.Instance, int64, error) {
	var instances []model.Instance
	var total int64

	query := r.db.Model(&model.Instance{}).Where("php_user_id = ?", phpUserID)

	// 域名模糊搜索 或 备注信息模糊查找
	if domain != "" {
		query = query.Where("domain LIKE ? OR remark LIKE ?", "%"+domain+"%", "%"+domain+"%")
	}

	// 产品类型筛选
	if productType > 0 {
		query = query.Where("product_type = ?", productType)
	}

	// 状态筛选
	if status > 0 {
		query = query.Where("status = ?", status)
	}

	// 时间范围筛选
	if startTime != "" {
		query = query.Where("start_time >= ?", startTime)
	}
	if endTime != "" {
		query = query.Where("end_time <= ?", endTime+" 23:59:59")
	}

	// 查询总数
	if err := query.Count(&total).Error; err != nil {
		return nil, 0, err
	}

	// 分页查询
	offset := (page - 1) * size
	err := query.Offset(offset).Limit(size).Order("created_at DESC").Find(&instances).Error

	return instances, total, err
}

func (r *InstanceRepository) UpdateFields(id int64, fields map[string]any) error {
	result := r.db.Model(&model.Instance{}).Where("id=?", id).Updates(fields)
	if result.Error != nil {
		return result.Error
	}
	return nil
}
