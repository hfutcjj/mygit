package model

import (
	"time"
)

// ProductVersion 产品版本配置表
type ProductVersion struct {
	ID          int    `gorm:"primaryKey" json:"id"`
	ProductType int8   `gorm:"column:product_type" json:"product_type"`
	Edition     int8   `gorm:"column:edition" json:"edition"`
	EditionName string `gorm:"column:edition_name" json:"edition_name"`
	Price       int    `gorm:"column:price" json:"price"`

	// 带宽与速率（云部署独有）
	TrafficGb     int `gorm:"column:traffic_gb" json:"traffic_gb"`
	BandwidthMbps int `gorm:"column:bandwidth_mbps" json:"bandwidth_mbps"`
	Qps           int `gorm:"column:qps" json:"qps"`

	// SSL自动化
	IntlAlgorithm int8 `gorm:"column:intl_algorithm" json:"intl_algorithm"`
	Sm2Algorithm  int8 `gorm:"column:sm2_algorithm" json:"sm2_algorithm"`
	AutoSign      int8 `gorm:"column:auto_sign" json:"auto_sign"`
	AutoPush      int8 `gorm:"column:auto_push" json:"auto_push"`
	PushNodes     int  `gorm:"column:push_nodes" json:"push_nodes"`
	PushTimes     int  `gorm:"column:push_times" json:"push_times"`

	// DNS云解析
	DNSAccess     int8   `gorm:"column:dns_access" json:"dns_access"`
	SmartLine     string `gorm:"column:smart_line" json:"smart_line"`
	CustomLine    int8   `gorm:"column:custom_line" json:"custom_line"`
	MinTTL        int    `gorm:"column:min_ttl" json:"min_ttl"`
	UrlForward    int    `gorm:"column:url_forward" json:"url_forward"`
	WeightSupport int8   `gorm:"column:weight_support" json:"weight_support"`
	LoadBalance   int    `gorm:"column:load_balance" json:"load_balance"`

	// Web应用防护（云部署独有）
	WebFirewall   int8 `gorm:"column:web_firewall" json:"web_firewall"`
	MaliciousScan int8 `gorm:"column:malicious_scan" json:"malicious_scan"`
	VulnPatch     int8 `gorm:"column:vuln_patch" json:"vuln_patch"`
	IpBlacklist   int8 `gorm:"column:ip_blacklist" json:"ip_blacklist"`
	CustomRule    int  `gorm:"column:custom_rule" json:"custom_rule"`

	// 监测与技术服务
	CertMonitorFrequency string `gorm:"column:cert_monitor_frequency" json:"cert_monitor_frequency"`
	AlertChannels        string `gorm:"column:alert_channels" json:"alert_channels"`
	InstallGuide         string `gorm:"column:install_guide" json:"install_guide"`
	TechSupport          string `gorm:"column:tech_support" json:"tech_support"`

	// 计费单元
	DomainLimit int `gorm:"column:domain_limit" json:"domain_limit"`

	// 云网关独有
	LocalDeploy int8 `gorm:"column:local_deploy" json:"local_deploy"`
	IpWhitelist int8 `gorm:"column:ip_whitelist" json:"ip_whitelist"`

	// 状态
	Status    int8 `gorm:"column:status" json:"status"`
	SortOrder int  `gorm:"column:sort_order" json:"sort_order"`

	CreatedAt time.Time `gorm:"column:created_at;autoCreateTime" json:"created_at"`
	UpdatedAt time.Time `gorm:"column:updated_at;autoUpdateTime" json:"updated_at"`
}

func (ProductVersion) TableName() string {
	return "product_version"
}
