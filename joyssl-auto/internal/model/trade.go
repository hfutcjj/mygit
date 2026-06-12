package model

import "time"

type TradeRecord struct {
	ID        int64     `gorm:"primaryKey" json:"id"`
	OrderID   int64     `gorm:"column:order_id" json:"order_id"`
	OrderNo   string    `gorm:"column:order_no;size:32" json:"order_no"`
	PhpUserID int64     `gorm:"column:php_user_id" json:"php_user_id"`
	Amount    int       `gorm:"column:amount" json:"amount"`
	Type      int8      `gorm:"column:type;default:1" json:"type"`
	Channel   string    `gorm:"column:channel;size:50" json:"channel"`
	TradeNo   string    `gorm:"column:trade_no;size:100" json:"trade_no"`
	Status    int8      `gorm:"column:status;default:1" json:"status"`
	Remark    string    `gorm:"column:remark;size:255" json:"remark"`
	CreatedAt time.Time `gorm:"column:created_at;autoCreateTime" json:"created_at"`
}

func (TradeRecord) TableName() string {
	return "trade_record"
}
