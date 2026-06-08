package model

import "time"

// AccessConfig 接入配置表
type AccessConfig struct {
	ID            int64     `gorm:"primaryKey" json:"id"`
	InstanceID    int64     `gorm:"column:instance_id;not null" json:"instance_id"`
	AccessDomains JSONArray `gorm:"column:access_domains;type:json" json:"access_domains"`
	VerifyType    int8      `gorm:"column:verify_type;default:1" json:"verify_type"`
	AccessType    int8      `gorm:"column:access_type;default:1" json:"access_type"`
	DNSServers    JSONArray `gorm:"column:dns_servers;type:json" json:"dns_servers"`
	AccessKey     string    `gorm:"column:access_key;size:255" json:"access_key"`
	AccessSecret  string    `gorm:"column:access_secret;size:255" json:"access_secret"`
	Status        int8      `gorm:"column:status;default:0" json:"status"`
	CreatedAt     time.Time `gorm:"column:created_at;autoCreateTime" json:"created_at"`
	UpdatedAt     time.Time `gorm:"column:updated_at;autoUpdateTime" json:"updated_at"`
}

func (AccessConfig) TableName() string {
	return "access_config"
}
