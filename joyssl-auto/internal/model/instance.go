package model

import "time"

// Instance 实例表
type Instance struct {
	ID            int64      `gorm:"primaryKey" json:"id"`
	InstanceNo    string     `gorm:"column:instance_no;size:32;not null" json:"instance_no"`
	PhpUserID     int64      `gorm:"column:php_user_id;not null" json:"php_user_id"`
	Domain        string     `gorm:"column:domain;size:255;not null" json:"domain"`
	ProductType   int8       `gorm:"column:product_type;default:1" json:"product_type"`
	Edition       int8       `gorm:"column:edition;default:1" json:"edition"`
	Years         int        `gorm:"column:years;default:1" json:"years"`
	PushNodes     int        `gorm:"column:push_nodes;default:2" json:"push_nodes"`
	PushTimes     int        `gorm:"column:push_times;default:20" json:"push_times"`
	UsedPushTimes int        `gorm:"column:used_push_times;default:0" json:"used_push_times"`
	LastPushDate  *time.Time `gorm:"column:last_push_date" json:"last_push_date"`
	StartTime     *time.Time `gorm:"column:start_time" json:"start_time"`
	EndTime       *time.Time `gorm:"column:end_time" json:"end_time"`
	Status        int8       `gorm:"column:status;default:1" json:"status"`
	AutoRenew     int8       `gorm:"column:auto_renew;default:1" json:"auto_renew"`
	Remark        string     `gorm:"column:remark;size:255" json:"remark"`
	CreatedAt     time.Time  `gorm:"column:created_at;autoCreateTime" json:"created_at"`
	UpdatedAt     time.Time  `gorm:"column:updated_at;autoUpdateTime" json:"updated_at"`
}

func (Instance) TableName() string {
	return "instance"
}
