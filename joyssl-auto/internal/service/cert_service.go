package service

import (
	"joyssl-auto/pkg/logger"
	"joyssl-auto/pkg/phpdb"

	"go.uber.org/zap"
)

type CertService struct{}

func NewCertService() *CertService {
	return &CertService{}
}

// SearchCertificates 搜索证书（从PHP数据库查询）
func (s *CertService) SearchCertificates(keyword string) ([]string, error) {
	var domains []string

	// 直接查询 domain 字段
	err := phpdb.DB.Table("joy_checkorder").
		Select("DISTINCT domain").
		Where("domain LIKE ?", "%"+keyword+"%").
		Pluck("domain", &domains).Error

	if err != nil {
		logger.Log.Error("搜索域名失败", zap.Error(err), zap.String("keyword", keyword))
		return nil, err
	}

	return domains, nil
}
