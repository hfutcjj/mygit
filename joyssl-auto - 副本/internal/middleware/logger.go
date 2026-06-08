package middleware

import (
	"joyssl-auto/pkg/logger"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

func Logger() gin.HandlerFunc {
	return func(c *gin.Context) {
		start := time.Now()
		ua := c.Request.UserAgent()

		c.Next()

		latency := time.Since(start)
		status := c.Writer.Status()

		//过滤掉404、Nmap扫描器、空UA访问、各种端口扫描、爬虫、恶意探测等垃圾请求
		if status == 404 || ua == "" || isMaliciousUA(ua) {
			return
		}

		logger.Log.Info("HTTP请求",
			zap.String("method", c.Request.Method),
			zap.String("path", c.Request.URL.Path),
			zap.String("query", c.Request.URL.RawQuery),
			zap.Int("status", status),
			zap.Duration("latency", latency),
			zap.String("ip", c.ClientIP()),
			zap.String("user-agent", ua),
		)
	}
}

func isMaliciousUA(ua string) bool {
	maliciousUAs := []string{
		"Nmap", "Masscan", "Zmap", "Nikto", "sqlmap", "dirbuster",
		"fuzzing", "scanner", "crawler", "bot", "spider",
	}
	for _, m := range maliciousUAs {
		if strings.Contains(ua, m) {
			return true
		}
	}
	return false
}
