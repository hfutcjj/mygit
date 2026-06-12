package model

// 产品类型常量
const (
	ProductTypeCloudPush    int8 = 1 // 云推送
	ProductTypeCloudDeploy  int8 = 2 // 云部署
	ProductTypeCloudGateway int8 = 3 // 云网关
)

// 实例状态常量
const (
	InstanceStatusActive  int8 = 1 // 生效中
	InstanceStatusExpired int8 = 2 // 已过期
)

// 版本常量
const (
	EditionFree    int8 = 1 // 免费版
	EditionPremium int8 = 2 // 普惠版
	EditionPro     int8 = 3 // 专业版
	EditionFlag    int8 = 4 // 旗舰版
)

// EditionNameMap 版本名称映射
var EditionNameMap = map[int8]string{
	EditionFree:    "免费版",
	EditionPremium: "普惠版",
	EditionPro:     "专业版",
	EditionFlag:    "旗舰版",
}
