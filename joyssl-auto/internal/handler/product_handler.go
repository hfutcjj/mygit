package handler

import (
	"joyssl-auto/internal/model"
	"joyssl-auto/pkg/database"

	"github.com/gin-gonic/gin"
)

type ProductHandler struct{}

func NewProductHandler() *ProductHandler {
	return &ProductHandler{}
}

// GetProductVersions 获取产品版本列表
// GET /api/v1/products/versions?product_type=1
func (h *ProductHandler) GetProductVersions(c *gin.Context) {
	productType := c.DefaultQuery("product_type", "1")

	var versions []model.ProductVersion
	err := database.DB.Where("product_type = ? AND status = 1", productType).
		Order("sort_order ASC").
		Find(&versions).Error

	if err != nil {
		Error(c, 500, "查询失败")
		return
	}

	// 简化返回数据（前端只需要这些字段）
	type VersionVO struct {
		Edition     int    `json:"edition"`
		EditionName string `json:"edition_name"`
		Price       int    `json:"price"`
		PushNodes   int    `json:"push_nodes"`
		PushTimes   int    `json:"push_times"`
	}

	result := make([]VersionVO, 0, len(versions))
	for _, v := range versions {
		result = append(result, VersionVO{
			Edition:     int(v.Edition),
			EditionName: v.EditionName,
			Price:       v.Price,
			PushNodes:   v.PushNodes,
			PushTimes:   v.PushTimes,
		})
	}

	Success(c, result)
}
