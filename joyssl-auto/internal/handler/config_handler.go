package handler

import (
	"joyssl-auto/internal/service"
	"strconv"

	"github.com/gin-gonic/gin"
)

type ConfigHandler struct {
	service *service.ConfigService
}

func NewConfigHandler() *ConfigHandler {
	return &ConfigHandler{
		service: service.NewConfigService(),
	}
}

// SaveConfig 保存接入配置
// POST /api/v1/instances/:instance_id/config
func (h *ConfigHandler) SaveConfig(c *gin.Context) {
	idStr := c.Param("id")
	instanceID, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		Error(c, 400, "无效的实例ID")
		return
	}

	var req service.SaveConfigRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		Error(c, 400, "参数错误: "+err.Error())
		return
	}

	req.InstanceID = instanceID

	config, err := h.service.SaveConfig(&req)
	if err != nil {
		Error(c, 500, "保存失败: "+err.Error())
		return
	}

	Success(c, config)
}

// GetConfig 获取接入配置
// GET /api/v1/instances/:instance_id/config
func (h *ConfigHandler) GetConfig(c *gin.Context) {
	idStr := c.Param("id") //
	instanceID, err := strconv.ParseInt(idStr, 10, 64)
	if err != nil {
		Error(c, 400, "无效的实例ID")
		return
	}

	config, err := h.service.GetConfig(instanceID)
	if err != nil {
		Error(c, 500, "查询失败: "+err.Error())
		return
	}

	if config == nil {
		Success(c, nil)
		return
	}

	Success(c, config)
}
