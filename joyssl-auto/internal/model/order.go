package model

import "time"

type Order struct {
	ID             int64      `gorm:"primaryKey" json:"id"`
	OrderNo        string     `gorm:"column:order_no;size:32;not null" json:"order_no"`
	PhpUserID      int64      `gorm:"column:php_user_id;not null" json:"php_user_id"`
	ProductType    int8       `gorm:"column:product_type" json:"product_type"`
	Edition        int8       `gorm:"column:edition" json:"edition"`
	Domain         string     `gorm:"column:domain;size:255" json:"domain"`
	Years          int        `gorm:"column:years" json:"years"`
	OriginalPrice  int        `gorm:"column:original_price" json:"original_price"`
	DiscountAmount int        `gorm:"column:discount_amount" json:"discount_amount"`
	ActualPrice    int        `gorm:"column:actual_price" json:"actual_price"`
	Status         int8       `gorm:"column:status;default:0" json:"status"`
	PayTime        *time.Time `gorm:"column:pay_time" json:"pay_time"`
	PayMethod      string     `gorm:"column:pay_method;size:50" json:"pay_method"`
	PayOrderNo     string     `gorm:"column:pay_order_no;size:100" json:"pay_order_no"`
	CreatedAt      time.Time  `gorm:"column:created_at;autoCreateTime" json:"created_at"`
	UpdatedAt      time.Time  `gorm:"column:updated_at;autoUpdateTime" json:"updated_at"`
}

func (Order) TableName() string {
	return "order"
}
