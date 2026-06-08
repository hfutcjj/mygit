package middleware

import (
	"joyssl-auto/internal/handler"
	"joyssl-auto/pkg/jwt"
	"joyssl-auto/pkg/logger"
	"strings"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// JWTAuth JWT认证中间件
func JWTAuth() gin.HandlerFunc {
	return func(c *gin.Context) {
		path := c.Request.URL.Path

		// 白名单路径（不需要认证）
		whiteList := []string{
			"/health",
			"/api/v1/ping",
			"/api/v1/auth/token", // 获取Token的接口不需要认证
		}

		for _, whitePath := range whiteList {
			if strings.HasPrefix(path, whitePath) {
				c.Next()
				return
			}
		}

		// 获取Token
		token := extractToken(c)
		if token == "" {
			logger.Log.Warn("未提供认证Token",
				zap.String("path", path),
				zap.String("ip", c.ClientIP()),
			)
			handler.ErrorWithStatus(c, 401, 401, "未提供认证Token")
			c.Abort()
			return
		}

		// 验证Token
		if err := jwt.ValidateToken(token); err != nil {
			logger.Log.Warn("Token验证失败",
				zap.String("path", path),
				zap.String("ip", c.ClientIP()),
				zap.Error(err),
			)

			if strings.Contains(err.Error(), "过期") {
				handler.ErrorWithStatus(c, 401, 401, "Token已过期，请重新获取")
			} else {
				handler.ErrorWithStatus(c, 401, 401, "无效的Token")
			}
			c.Abort()
			return
		}

		c.Next()
	}
}

func extractToken(c *gin.Context) string {
	authHeader := c.GetHeader("Authorization")
	if authHeader != "" {
		parts := strings.SplitN(authHeader, " ", 2)
		// 标准格式 Authorization: Bearer <token>
		if len(parts) == 2 && strings.ToLower(parts[0]) == "bearer" {
			return parts[1]
		}
		// 兼容 Authorization: <token>
		return authHeader
	}

	// 兼容 X-API-Key: <token>
	return c.GetHeader("X-API-Key")
}
