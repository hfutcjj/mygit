package model

import "time"

// OperationLog 操作日志表
type OperationLog struct {
	ID        int64     `gorm:"primaryKey" json:"id"`
	UserID    int64     `gorm:"column:user_id;not null" json:"user_id"`
	Username  string    `gorm:"column:username;size:100" json:"username"`
	Operation string    `gorm:"column:operation;size:255;not null" json:"operation"`
	IPAddress string    `gorm:"column:ip_address;size:50" json:"ip_address"`
	Location  string    `gorm:"column:location;size:255" json:"location"`
	CreatedAt time.Time `gorm:"column:created_at;autoCreateTime" json:"created_at"`
}

func (OperationLog) TableName() string {
	return "operation_log"
}
