package handler

import (
	"joyssl-auto/internal/service"
	"strconv"

	"github.com/gin-gonic/gin"
)

type OrderHandler struct {
	service *service.OrderService
}

func NewOrderHandler() *OrderHandler {
	return &OrderHandler{
		service: service.NewOrderService(),
	}
}

// CreateOrder 创建订单
func (h *OrderHandler) CreateOrder(c *gin.Context) {
	var req struct {
		ProductType int8   `json:"product_type" binding:"required"`
		Edition     int8   `json:"edition" binding:"required"`
		Domain      string `json:"domain" binding:"required"`
		Years       int    `json:"years" binding:"required"`
		Price       int    `json:"price" binding:"required"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		Error(c, 400, "参数错误: "+err.Error())
		return
	}

	phpUserID, _ := c.Get("php_user_id")

	order, err := h.service.CreateOrder(phpUserID.(int64), req.ProductType, req.Edition, req.Domain, req.Years, req.Price)
	if err != nil {
		Error(c, 500, "创建订单失败")
		return
	}

	Success(c, order)
}

// GetOrderList 获取订单列表
func (h *OrderHandler) GetOrderList(c *gin.Context) {
	phpUserID, _ := c.Get("php_user_id")
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	size, _ := strconv.Atoi(c.DefaultQuery("size", "20"))

	list, total, err := h.service.GetOrderList(phpUserID.(int64), page, size)
	if err != nil {
		Error(c, 500, "查询失败")
		return
	}

	PageSuccess(c, list, total, page, size)
}

// GetTradeList 获取交易流水
func (h *OrderHandler) GetTradeList(c *gin.Context) {
	phpUserID, _ := c.Get("php_user_id")
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	size, _ := strconv.Atoi(c.DefaultQuery("size", "20"))

	list, total, err := h.service.GetTradeList(phpUserID.(int64), page, size)
	if err != nil {
		Error(c, 500, "查询失败")
		return
	}

	PageSuccess(c, list, total, page, size)
}

// GetInvoiceList 获取发票列表
func (h *OrderHandler) GetInvoiceList(c *gin.Context) {
	phpUserID, _ := c.Get("php_user_id")
	page, _ := strconv.Atoi(c.DefaultQuery("page", "1"))
	size, _ := strconv.Atoi(c.DefaultQuery("size", "20"))

	list, total, err := h.service.GetInvoiceList(phpUserID.(int64), page, size)
	if err != nil {
		Error(c, 500, "查询失败")
		return
	}

	PageSuccess(c, list, total, page, size)
}

// ApplyInvoice 申请发票
func (h *OrderHandler) ApplyInvoice(c *gin.Context) {
	var req struct {
		OrderIds     []int64 `json:"order_ids" binding:"required"`
		InvoiceTitle string  `json:"invoice_title" binding:"required"`
		TaxNo        string  `json:"tax_no"`
		InvoiceType  int8    `json:"invoice_type"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		Error(c, 400, "参数错误")
		return
	}

	phpUserID, _ := c.Get("php_user_id")

	invoice, err := h.service.ApplyInvoice(phpUserID.(int64), req.OrderIds, req.InvoiceTitle, req.TaxNo, req.InvoiceType)
	if err != nil {
		Error(c, 500, "申请失败")
		return
	}

	Success(c, invoice)
}

// 支付回调（由PHP支付系统调用）
func (h *OrderHandler) PaymentCallback(c *gin.Context) {
	var req struct {
		OrderNo    string `json:"order_no" binding:"required"`
		PayMethod  string `json:"pay_method"`
		PayOrderNo string `json:"pay_order_no"`
		Status     int8   `json:"status"` // 1成功
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		Error(c, 400, "参数错误")
		return
	}

	if req.Status == 1 {
		// 更新订单状态
		if err := h.service.UpdateOrderStatus(req.OrderNo, 1, req.PayMethod, req.PayOrderNo); err != nil {
			Error(c, 500, "更新订单失败")
			return
		}

		// TODO: 支付成功后创建实例
		// 获取订单信息，创建 instance 记录
	}

	Success(c, gin.H{"status": "ok"})
}
