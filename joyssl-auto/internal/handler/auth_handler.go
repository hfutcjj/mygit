package handler

import (
	"joyssl-auto/pkg/jwt"
	"joyssl-auto/pkg/logger"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// GetToken 获取JWT Token
func GetToken(c *gin.Context) {
	token, err := jwt.GenerateToken()
	if err != nil {
		logger.Log.Error("生成Token失败", zap.Error(err))
		Error(c, 500, "生成Token失败")
		return
	}

	Success(c, gin.H{
		"access_token": token,
		"token_type":   "Bearer",
		"expires_in":   86400, // 24小时
	})
}
