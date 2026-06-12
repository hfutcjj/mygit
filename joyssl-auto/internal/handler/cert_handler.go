package handler

import (
	"joyssl-auto/internal/service"

	"github.com/gin-gonic/gin"
)

type CertHandler struct {
	service *service.CertService
}

func NewCertHandler() *CertHandler {
	return &CertHandler{
		service: service.NewCertService(),
	}
}

// SearchCertificates 搜索证书
// GET /api/v1/certificates/search?keyword=xxx&limit=10
func (h *CertHandler) SearchCertificates(c *gin.Context) {
	keyword := c.Query("keyword")
	if keyword == "" {
		Error(c, 400, "keyword不能为空")
		return
	}

	certs, err := h.service.SearchCertificates(keyword)
	if err != nil {
		Error(c, 500, "搜索失败: "+err.Error())
		return
	}

	Success(c, certs)
}
