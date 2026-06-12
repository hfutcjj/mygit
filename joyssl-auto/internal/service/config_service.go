package service

import (
	"joyssl-auto/internal/model"
	"joyssl-auto/internal/repository"
	"joyssl-auto/pkg/logger"

	"go.uber.org/zap"
)

type ConfigService struct {
	repo *repository.ConfigRepository
}

func NewConfigService() *ConfigService {
	return &ConfigService{
		repo: repository.NewConfigRepository(),
	}
}

// SaveConfigRequest 保存配置请求
type SaveConfigRequest struct {
	InstanceID    int64    `json:"instance_id"`
	AccessDomains []string `json:"access_domains"`
	VerifyType    int8     `json:"verify_type"` // 1 DNS 2 HTTP
	AccessType    int8     `json:"access_type"` // 1自动 2手动
	DNSServers    []string `json:"dns_servers"`
	AccessKey     string   `json:"access_key"`
	AccessSecret  string   `json:"access_secret"`
}

// SaveConfig 保存接入配置
func (s *ConfigService) SaveConfig(req *SaveConfigRequest) (*model.AccessConfig, error) {
	// 检查是否已有配置
	existing, err := s.repo.GetByInstanceID(req.InstanceID)
	if err != nil {
		logger.Log.Error("查询已有配置失败", zap.Error(err))
		return nil, err
	}

	if existing != nil {
		// 更新
		existing.AccessDomains = req.AccessDomains
		existing.VerifyType = req.VerifyType
		existing.AccessType = req.AccessType
		existing.DNSServers = req.DNSServers
		existing.AccessKey = req.AccessKey
		existing.AccessSecret = req.AccessSecret
		existing.Status = 2 // 有效

		if err := s.repo.Update(existing); err != nil {
			logger.Log.Error("更新配置失败", zap.Error(err))
			return nil, err
		}
		logger.Log.Info("更新接入配置成功", zap.Int64("instance_id", req.InstanceID))
		return existing, nil
	}

	// 新建
	config := &model.AccessConfig{
		InstanceID:    req.InstanceID,
		AccessDomains: req.AccessDomains,
		VerifyType:    req.VerifyType,
		AccessType:    req.AccessType,
		DNSServers:    req.DNSServers,
		AccessKey:     req.AccessKey,
		AccessSecret:  req.AccessSecret,
		Status:        2, // 有效
	}

	if err := s.repo.Create(config); err != nil {
		logger.Log.Error("创建配置失败", zap.Error(err))
		return nil, err
	}

	logger.Log.Info("创建接入配置成功", zap.Int64("instance_id", req.InstanceID))
	return config, nil
}

// GetConfig 获取接入配置
func (s *ConfigService) GetConfig(instanceID int64) (*model.AccessConfig, error) {
	return s.repo.GetByInstanceID(instanceID)
}
