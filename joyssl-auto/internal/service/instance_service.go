package service

import (
	"errors"
	"joyssl-auto/internal/model"
	"joyssl-auto/internal/repository"
	"joyssl-auto/pkg/database"
	"joyssl-auto/pkg/logger"
	"joyssl-auto/pkg/utils"
	"time"

	"go.uber.org/zap"
)

type InstanceService struct {
	repo *repository.InstanceRepository
}

func NewInstanceService() *InstanceService {
	return &InstanceService{
		repo: repository.NewInstanceRepository(),
	}
}

// CreateInstanceRequest 创建实例请求
type CreateInstanceRequest struct {
	PhpUserID   int64  `json:"php_user_id" binding:"required"`
	Domain      string `json:"domain" binding:"required"`
	ProductType int8   `json:"product_type"`
	Edition     int8   `json:"edition"`
	Years       int    `json:"years"`
}

// CreateInstance 创建实例
func (s *InstanceService) CreateInstance(req *CreateInstanceRequest) (*model.Instance, error) {
	// 设置默认产品类型(云推送)
	productType := req.ProductType
	if productType == 0 {
		productType = model.ProductTypeCloudPush
	}

	// 设置默认版本(免费版)
	edition := req.Edition
	if edition == 0 {
		edition = model.EditionFree
	}

	// 设置默认年限(1年)
	years := req.Years
	if years <= 0 {
		years = 1
	}

	// 根据版本获取配额
	var productConfig model.ProductVersion
	err := database.DB.Where("product_type = ? AND edition = ? AND status = 1", productType, edition).
		First(&productConfig).Error
	if err != nil {
		logger.Log.Error("获取产品配置失败", zap.Error(err),
			zap.Int8("product_type", productType),
			zap.Int8("edition", edition))
		return nil, errors.New("版本配置不存在")
	}

	// 生成实例编号
	instanceNo := utils.GenerateInstanceNo()

	// 设置时间
	now := time.Now()
	endTime := now.AddDate(years, 0, 0)

	instance := &model.Instance{
		InstanceNo:    instanceNo,
		PhpUserID:     req.PhpUserID,
		Domain:        req.Domain,
		ProductType:   productType,
		Edition:       edition,
		Years:         years,
		PushNodes:     productConfig.PushNodes,
		PushTimes:     productConfig.PushTimes,
		UsedPushTimes: 0,
		StartTime:     &now,
		EndTime:       &endTime,
		Status:        model.InstanceStatusActive,
		AutoRenew:     1, // 默认不自动续费
	}

	if err := s.repo.Create(instance); err != nil {
		logger.Log.Error("创建实例失败", zap.Error(err))
		return nil, err
	}

	logger.Log.Info("创建实例成功",
		zap.Int64("id", instance.ID),
		zap.String("domain", req.Domain),
		zap.Int8("edition", edition))

	return instance, nil
}

// GetInstanceList 获取实例列表（支持筛选）
func (s *InstanceService) GetInstanceList(phpUserID int64, domain string, productType int, status int, startTime, endTime string, page, size int) ([]model.Instance, int64, error) {
	if page < 1 {
		page = 1
	}
	if size < 1 || size > 100 {
		size = 20
	}
	return s.repo.List(phpUserID, domain, productType, status, startTime, endTime, page, size)
}

// GetInstanceByID 根据ID获取实例
func (s *InstanceService) GetInstanceByID(id int64) (*model.Instance, error) {
	return s.repo.GetByID(id)
}

// InstanceVO 实例视图对象
type InstanceVO struct {
	ID              int64  `json:"id"`
	InstanceNo      string `json:"instance_no"`
	Domain          string `json:"domain"`
	ProductType     int8   `json:"product_type"`
	ProductTypeName string `json:"product_type_name"`
	Edition         int8   `json:"edition"`
	EditionName     string `json:"edition_name"`
	Years           int    `json:"years"`
	PushNodes       int    `json:"push_nodes"`
	PushTimes       int    `json:"push_times"`
	UsedPushTimes   int    `json:"used_push_times"`
	StartTime       string `json:"start_time"`
	EndTime         string `json:"end_time"`
	Status          int8   `json:"status"`
	StatusName      string `json:"status_name"`
	AutoRenew       int8   `json:"auto_renew"`
	Remark          string `json:"remark"`
}

// ToVO 转换为视图对象
func (s *InstanceService) ToVO(instance *model.Instance) *InstanceVO {
	vo := &InstanceVO{
		ID:            instance.ID,
		InstanceNo:    instance.InstanceNo,
		Domain:        instance.Domain,
		ProductType:   instance.ProductType,
		Edition:       instance.Edition,
		Years:         instance.Years,
		PushNodes:     instance.PushNodes,
		PushTimes:     instance.PushTimes,
		UsedPushTimes: instance.UsedPushTimes,
		Status:        instance.Status,
		AutoRenew:     instance.AutoRenew,
		Remark:        instance.Remark,
	}

	// 产品类型名称
	switch instance.ProductType {
	case model.ProductTypeCloudPush:
		vo.ProductTypeName = "云推送"
	case model.ProductTypeCloudDeploy:
		vo.ProductTypeName = "云部署"
	case model.ProductTypeCloudGateway:
		vo.ProductTypeName = "云网关"
	default:
		vo.ProductTypeName = "未知"
	}

	// 版本名称
	switch instance.Edition {
	case model.EditionFree:
		vo.EditionName = "免费版"
	case model.EditionPremium:
		vo.EditionName = "普惠版"
	case model.EditionPro:
		vo.EditionName = "专业版"
	case model.EditionFlag:
		vo.EditionName = "旗舰版"
	default:
		vo.EditionName = "未知"
	}

	// 状态名称
	switch instance.Status {
	case model.InstanceStatusActive:
		vo.StatusName = "生效中"
	case model.InstanceStatusExpired:
		vo.StatusName = "已过期"
	default:
		vo.StatusName = "未知"
	}

	// 时间格式化
	if instance.StartTime != nil {
		vo.StartTime = instance.StartTime.Format("2006-01-02")
	}
	if instance.EndTime != nil {
		vo.EndTime = instance.EndTime.Format("2006-01-02")
	}

	return vo
}

// // 更新备注请求
// type UpdateRemarkRequest struct {
// 	Remark string `json:"remark"`
// }

// 更新实例备注
func (s *InstanceService) UpdateRemark(id int64, remark string) error {
	return s.repo.UpdateFields(id, map[string]any{
		"remark": remark,
	})
}
