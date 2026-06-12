package handler

import (
	"joyssl-auto/internal/service"
	"strconv"

	"github.com/gin-gonic/gin"
)

type InstanceHandler struct {
	service *service.InstanceService
}

func NewInstanceHandler() *InstanceHandler {
	return &InstanceHandler{
		service: service.NewInstanceService(),
	}
}

// CreateInstance 创建实例
// POST /api/v1/instances
func (h *InstanceHandler) CreateInstance(c *gin.Context) {
	var req service.CreateInstanceRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		Error(c, 400, "参数错误: "+err.Error())
		return
	}

	instance, err := h.service.CreateInstance(&req)
	if err != nil {
		Error(c, 500, "创建失败: "+err.Error())
		return
	}

	Success(c, h.service.ToVO(instance))
}

// GetInstanceList 获取实例列表
// GET /api/v1/instances?php_user_id=xxx&domain=xxx&status=xxx&page=1&size=20
func (h *InstanceHandler) GetInstanceList(c *gin.Context) {
	// 获取php_user_id
	phpUserIDStr := c.Query("php_user_id")
	if phpUserIDStr == "" {
		Error(c, 400, "php_user_id不能为空")
		return
	}

	phpUserID, err := strconv.ParseInt(phpUserIDStr, 10, 64)
	if err != nil {
		Error(c, 400, "php_user_id格式错误")
		return
	}

	domain := c.Query("domain")

	// 新增：产品类型筛选
	productTypeStr := c.Query("product_type")
	productType := 0
	if productTypeStr != "" {
		productType, _ = strconv.Atoi(productTypeStr)
	}

	statusStr := c.Query("status")
	status := 0
	if statusStr != "" {
		status, _ = strconv.Atoi(statusStr)
	}

	// 新增：时间范围筛选
	startTime := c.Query("start_time")
	endTime := c.Query("end_time")

	pageStr := c.DefaultQuery("page", "1")
	page, _ := strconv.Atoi(pageStr)

	sizeStr := c.DefaultQuery("size", "20")
	size, _ := strconv.Atoi(sizeStr)

	// 调用service时需要传入新增参数
	list, total, err := h.service.GetInstanceList(phpUserID, domain, productType, status, startTime, endTime, page, size)
	if err != nil {
		Error(c, 500, "查询失败: "+err.Error())
		return
	}

	voList := make([]*service.InstanceVO, 0, len(list))
	for i := range list {
		voList = append(voList, h.service.ToVO(&list[i]))
	}

	PageSuccess(c, voList, total, page, size)
}

// GetInstanceDetail 获取实例详情
// GET /api/v1/instances/:id
func (h *InstanceHandler) GetInstanceDetail(c *gin.Context) {
	idStr := c.Param("id")
	id, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		Error(c, 400, "无效的实例ID")
		return
	}

	instance, err := h.service.GetInstanceByID(id)
	if err != nil {
		Error(c, 500, "查询失败: "+err.Error())
		return
	}

	if instance == nil {
		Error(c, 404, "实例不存在")
		return
	}

	Success(c, h.service.ToVO(instance))
}

// UpdateRemark 更新实例备注
// PUT /api/v1/instances/:id/remark
func (h *InstanceHandler) UpdateRemark(c *gin.Context) {
	idStr := c.Param("id")
	id, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		Error(c, 400, "无效的实例ID")
		return
	}

	var req struct {
		Remark string `json:"remark"`
	}
	if err := c.ShouldBindJSON(&req); err != nil {
		Error(c, 400, "参数错误: "+err.Error())
		return
	}

	if err := h.service.UpdateRemark(id, req.Remark); err != nil {
		Error(c, 500, "更新失败: "+err.Error())
		return
	}

	SuccessWithMessage(c, "更新成功", nil)
}
