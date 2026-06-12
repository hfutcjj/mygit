package repository

import (
	"joyssl-auto/internal/model"
	"joyssl-auto/pkg/database"
	"joyssl-auto/pkg/logger"

	"go.uber.org/zap"
	"gorm.io/gorm"
)

type ConfigRepository struct {
	db *gorm.DB
}

func NewConfigRepository() *ConfigRepository {
	return &ConfigRepository{
		db: database.DB,
	}
}

func (r *ConfigRepository) Create(config *model.AccessConfig) error {
	result := r.db.Create(config)
	if result.Error != nil {
		logger.Log.Error("创建接入配置失败", zap.Error(result.Error))
		return result.Error
	}
	return nil
}

func (r *ConfigRepository) GetByInstanceID(instanceID int64) (*model.AccessConfig, error) {
	var config model.AccessConfig
	result := r.db.Where("instance_id = ?", instanceID).First(&config)
	if result.Error != nil {
		if result.Error == gorm.ErrRecordNotFound {
			return nil, nil
		}
		return nil, result.Error
	}
	return &config, nil
}

func (r *ConfigRepository) Update(config *model.AccessConfig) error {
	return r.db.Save(config).Error
}

func (r *ConfigRepository) DeleteByInstanceID(instanceID int64) error {
	return r.db.Where("instance_id = ?", instanceID).Delete(&model.AccessConfig{}).Error
}

func (r *ConfigRepository) UpdateStatus(instanceID int64, status int8) error {
	return r.db.Model(&model.AccessConfig{}).
		Where("instance_id = ?", instanceID).
		Update("status", status).Error
}
