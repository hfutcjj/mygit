package model

import "time"

type Invoice struct {
	ID           int64     `gorm:"primaryKey" json:"id"`
	PhpUserID    int64     `gorm:"column:php_user_id" json:"php_user_id"`
	OrderIds     string    `gorm:"column:order_ids;size:500" json:"order_ids"`
	InvoiceTitle string    `gorm:"column:invoice_title;size:200" json:"invoice_title"`
	TaxNo        string    `gorm:"column:tax_no;size:50" json:"tax_no"`
	InvoiceType  int8      `gorm:"column:invoice_type;default:1" json:"invoice_type"`
	Amount       int       `gorm:"column:amount" json:"amount"`
	Status       int8      `gorm:"column:status;default:0" json:"status"`
	InvoiceUrl   string    `gorm:"column:invoice_url;size:500" json:"invoice_url"`
	Remark       string    `gorm:"column:remark;size:255" json:"remark"`
	CreatedAt    time.Time `gorm:"column:created_at;autoCreateTime" json:"created_at"`
	UpdatedAt    time.Time `gorm:"column:updated_at;autoUpdateTime" json:"updated_at"`
}

func (Invoice) TableName() string {
	return "invoice"
}
