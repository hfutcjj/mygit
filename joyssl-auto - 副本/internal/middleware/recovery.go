package middleware

import (
	"fmt"
	"joyssl-auto/internal/handler"
	"joyssl-auto/pkg/logger"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

func Recovery() gin.HandlerFunc {
	return func(c *gin.Context) {
		defer func() {
			if err := recover(); err != nil {
				logger.Log.Error("panic recovered",
					zap.Any("error", err),
					zap.String("stack", fmt.Sprintf("%v", err)),
				)
				handler.Error(c, 500, "服务器内部错误")
				c.Abort()
			}
		}()
		c.Next()
	}
}
