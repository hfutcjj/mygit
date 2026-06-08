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

func (r *InstanceRepository) List(userID int64, domain string, status int, page, size int) ([]model.Instance, int64, error) {
	var instances []model.Instance
	var total int64

	query := r.db.Model(&model.Instance{}).Where("php_user_id = ?", userID)
	if domain != "" {
		query = query.Where("domain LIKE ?", "%"+domain+"%")
	}
	if status > 0 {
		query = query.Where("status = ?", status)
	}

	query.Count(&total)

	offset := (page - 1) * size
	err := query.Offset(offset).Limit(size).Order("created_at DESC").Find(&instances).Error
	return instances, total, err
}
