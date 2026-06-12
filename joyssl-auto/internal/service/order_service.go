package service

import (
	"fmt"
	"joyssl-auto/internal/model"
	"joyssl-auto/pkg/database"
	"joyssl-auto/pkg/utils"
	"math"
	"time"
)

type OrderService struct{}

func NewOrderService() *OrderService {
	return &OrderService{}
}

// CalculatePrice 计算价格
func (s *OrderService) CalculatePrice(pricePerYear int, years int) (originalPrice, discountAmount, actualPrice int) {
	originalPrice = pricePerYear * years
	discountAmount = s.calculateDiscount(pricePerYear, years)
	actualPrice = originalPrice - discountAmount
	if actualPrice < 0 {
		actualPrice = 0
	}
	return
}

// calculateDiscount 计算优惠金额
func (s *OrderService) calculateDiscount(pricePerYear int, years int) int {
	if years <= 1 {
		return 0
	}

	var discountRate float64
	switch years {
	case 2:
		discountRate = 0.1
	case 3, 4:
		discountRate = 0.2
	case 5:
		discountRate = 0.3
	default:
		return 0
	}

	discountAmount := float64(pricePerYear) * discountRate
	return int(math.Floor(discountAmount/100)) * 100
}

// CreateOrder 创建订单
func (s *OrderService) CreateOrder(phpUserID int64, productType, edition int8, domain string, years int, price int) (*model.Order, error) {
	originalPrice, discountAmount, actualPrice := s.CalculatePrice(price, years)

	orderNo := s.generateOrderNo()

	order := &model.Order{
		OrderNo:        orderNo,
		PhpUserID:      phpUserID,
		ProductType:    productType,
		Edition:        edition,
		Domain:         domain,
		Years:          years,
		OriginalPrice:  originalPrice,
		DiscountAmount: discountAmount,
		ActualPrice:    actualPrice,
		Status:         0, // 待支付
	}

	if err := database.DB.Create(order).Error; err != nil {
		return nil, err
	}

	return order, nil
}

// UpdateOrderStatus 更新订单状态（支付成功后调用）
func (s *OrderService) UpdateOrderStatus(orderNo string, status int8, payMethod, payOrderNo string) error {
	now := time.Now()
	result := database.DB.Model(&model.Order{}).
		Where("order_no = ?", orderNo).
		Updates(map[string]interface{}{
			"status":       status,
			"pay_time":     &now,
			"pay_method":   payMethod,
			"pay_order_no": payOrderNo,
		})

	if result.Error != nil {
		return result.Error
	}

	// 支付成功后，创建交易记录
	if status == 1 {
		var order model.Order
		database.DB.Where("order_no = ?", orderNo).First(&order)

		tradeRecord := &model.TradeRecord{
			OrderID:   order.ID,
			OrderNo:   orderNo,
			PhpUserID: order.PhpUserID,
			Amount:    order.ActualPrice,
			Type:      1, // 收入
			Channel:   payMethod,
			Status:    1, // 成功
		}
		database.DB.Create(tradeRecord)
	}

	return nil
}

// GetOrderList 获取订单列表
func (s *OrderService) GetOrderList(phpUserID int64, page, size int) ([]model.Order, int64, error) {
	var orders []model.Order
	var total int64

	query := database.DB.Model(&model.Order{}).Where("php_user_id = ?", phpUserID)
	query.Count(&total)

	offset := (page - 1) * size
	err := query.Order("created_at DESC").Offset(offset).Limit(size).Find(&orders).Error

	return orders, total, err
}

// GetTradeList 获取交易流水
func (s *OrderService) GetTradeList(phpUserID int64, page, size int) ([]model.TradeRecord, int64, error) {
	var trades []model.TradeRecord
	var total int64

	query := database.DB.Model(&model.TradeRecord{}).Where("php_user_id = ?", phpUserID)
	query.Count(&total)

	offset := (page - 1) * size
	err := query.Order("created_at DESC").Offset(offset).Limit(size).Find(&trades).Error

	return trades, total, err
}

// GetInvoiceList 获取发票列表
func (s *OrderService) GetInvoiceList(phpUserID int64, page, size int) ([]model.Invoice, int64, error) {
	var invoices []model.Invoice
	var total int64

	query := database.DB.Model(&model.Invoice{}).Where("php_user_id = ?", phpUserID)
	query.Count(&total)

	offset := (page - 1) * size
	err := query.Order("created_at DESC").Offset(offset).Limit(size).Find(&invoices).Error

	return invoices, total, err
}

// ApplyInvoice 申请发票
func (s *OrderService) ApplyInvoice(phpUserID int64, orderIds []int64, invoiceTitle, taxNo string, invoiceType int8) (*model.Invoice, error) {
	// 计算总金额
	var totalAmount int64
	database.DB.Model(&model.Order{}).
		Where("id IN ? AND php_user_id = ?", orderIds, phpUserID).
		Select("SUM(actual_price)").
		Scan(&totalAmount)

	// 订单ID转为字符串
	orderIdsStr := ""
	for i, id := range orderIds {
		if i > 0 {
			orderIdsStr += ","
		}
		orderIdsStr += fmt.Sprintf("%d", id)
	}

	invoice := &model.Invoice{
		PhpUserID:    phpUserID,
		OrderIds:     orderIdsStr,
		InvoiceTitle: invoiceTitle,
		TaxNo:        taxNo,
		InvoiceType:  invoiceType,
		Amount:       int(totalAmount),
		Status:       0, // 待处理
	}

	if err := database.DB.Create(invoice).Error; err != nil {
		return nil, err
	}

	return invoice, nil
}

func (s *OrderService) generateOrderNo() string {
	return "ORD" + time.Now().Format("20060102150405") + utils.RandStr(6)
}
