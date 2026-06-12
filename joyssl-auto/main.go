package main

import (
	"fmt"
	"joyssl-auto/internal/handler"
	"joyssl-auto/internal/middleware"
	"joyssl-auto/pkg/config"
	"joyssl-auto/pkg/database"
	"joyssl-auto/pkg/logger"
	"joyssl-auto/pkg/phpdb"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

func main() {
	// 加载配置
	config.Init()

	// 初始化日志
	logger.Init()
	defer logger.Sync()

	// 初始化数据库
	database.Init()
	defer database.Close()

	// 初始化PHP数据库
	phpdb.Init()
	defer phpdb.Close()

	// 设置Gin模式
	if config.AppConfig.Server.Mode == "release" {
		gin.SetMode(gin.ReleaseMode)
	}

	// 创建路由
	r := gin.New()

	// 全局中间件
	r.Use(middleware.CORS())
	r.Use(middleware.Recovery())
	r.Use(middleware.Logger())

	// 健康检查(不需要认证)
	r.GET("/health", func(c *gin.Context) {
		handler.Success(c, gin.H{"status": "ok", "message": "服务正常"})
	})

	// 提供静态文件服务（前端页面）
	r.Static("/web", "./web")

	// API路由组
	api := r.Group("/api/v1")
	{
		// 公开接口
		api.GET("/ping", func(c *gin.Context) {
			handler.Success(c, gin.H{"message": "pong"})
		})

		// 获取Token(不需要认证)
		// 🚨后续改为加密钥认证
		api.GET("/auth/token", handler.GetToken)

		// 获取产品版本信息
		productHandler := handler.NewProductHandler()
		api.GET("/products/versions", productHandler.GetProductVersions)

		// 需要JWT认证的业务接口
		protected := api.Group("/")
		protected.Use(middleware.JWTAuth())
		{
			protected.GET("/test", func(c *gin.Context) {
				handler.Success(c, gin.H{
					"message": "认证成功, Token有效",
				})
			})

			certHandler := handler.NewCertHandler()
			protected.GET("/certificates/search", certHandler.SearchCertificates)

			instanceHandler := handler.NewInstanceHandler()
			protected.GET("/instances/:id", instanceHandler.GetInstanceDetail)
			protected.GET("/instances", instanceHandler.GetInstanceList)
			protected.POST("/instances", instanceHandler.CreateInstance)
			protected.PUT("/instances/:id/remark", instanceHandler.UpdateRemark)

			configHandler := handler.NewConfigHandler()
			protected.GET("/instances/:id/config", configHandler.GetConfig)
			protected.POST("/instances/:id/config", configHandler.SaveConfig)

			orderHandler := handler.NewOrderHandler()
			protected.POST("/order/create", orderHandler.CreateOrder)
			protected.GET("/order/list", orderHandler.GetOrderList)
			protected.GET("/trade/list", orderHandler.GetTradeList)
			protected.GET("/invoice/list", orderHandler.GetInvoiceList)
			protected.POST("/invoice/apply", orderHandler.ApplyInvoice)
			// 支付回调（不需要认证，由PHP系统调用）
			api.POST("/payment/callback", orderHandler.PaymentCallback)
		}
	}

	port := config.AppConfig.Server.Port
	logger.Log.Info(fmt.Sprintf("服务启动在端口 %s", port))

	if err := r.Run(":" + port); err != nil {
		logger.Log.Fatal("服务启动失败", zap.Error(err))
	}
}
