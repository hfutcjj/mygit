-- 创建Go项目自己的数据库
CREATE DATABASE IF NOT EXISTS `joyssl_go` 
DEFAULT CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

USE `joyssl_go`;

-- =====================================================
-- 实例表
-- =====================================================
CREATE TABLE IF NOT EXISTS `instance` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `instance_no` VARCHAR(32) NOT NULL UNIQUE COMMENT '实例编号',
    `php_user_id` BIGINT NOT NULL COMMENT 'PHP系统用户ID',
    `domain` VARCHAR(255) NOT NULL COMMENT '主域名/ip',
    `product_type` TINYINT DEFAULT 1 COMMENT '1云推送 2云部署 3云网关',
    `edition` TINYINT DEFAULT 1 COMMENT '版本: 1=免费版,2=普惠版,3=专业版,4=旗舰版',
    `edition_name` VARCHAR(50) COMMENT '版本名称',
    `years` INT DEFAULT 1 COMMENT '购买年限',
    `push_nodes` INT DEFAULT 2 COMMENT '推送节点数量',
    `push_times` INT DEFAULT 20 COMMENT '推送次数上限',
    `used_push_times` INT DEFAULT 0 COMMENT '已使用推送次数',
    `last_push_date` DATE COMMENT '最后一次推送日期',
    `start_time` DATETIME COMMENT '生效时间',
    `end_time` DATETIME COMMENT '结束时间',
    `status` TINYINT DEFAULT 1 COMMENT '1生效中 2已过期',
    `auto_renew` TINYINT DEFAULT 1 COMMENT '是否自动续费 1否 2是',
    `remark` VARCHAR(255) COMMENT '备注',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_php_user_id (`php_user_id`),
    INDEX idx_domain (`domain`),
    INDEX idx_status (`status`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COMMENT='实例表';


-- =====================================================
-- 产品版本配置表
-- =====================================================
CREATE TABLE `product_version` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `product_type` TINYINT NOT NULL COMMENT '产品类型: 1=云推送, 2=云部署, 3=云网关',
    `edition` TINYINT NOT NULL COMMENT '版本: 1=免费版, 2=普惠版/标准版, 3=专业版, 4=旗舰版/企业版',
    `edition_name` VARCHAR(50) NOT NULL COMMENT '版本名称',
    -- 价格
    `price` INT NOT NULL DEFAULT 0 COMMENT '年价格（元）',
    -- ==================== 带宽与速率（云部署独有） ====================
    `traffic_gb` INT DEFAULT 0 COMMENT '高速流量（GB/月）',
    `bandwidth_mbps` INT DEFAULT 0 COMMENT '超宽带峰值（Mbps）',
    `qps` INT DEFAULT 0 COMMENT '并发连接数（QPS）',
    -- ==================== SSL自动化 ====================
    `intl_algorithm` TINYINT DEFAULT 1 COMMENT '国际算法证书',
    `sm2_algorithm` TINYINT DEFAULT 0 COMMENT '国密算法证书',
    `auto_sign` TINYINT DEFAULT 1 COMMENT '自动化验签/续期',
    `auto_push` TINYINT DEFAULT 1 COMMENT '自动化更新推送',
    `push_nodes` INT DEFAULT 0 COMMENT '推送节点数量',
    `push_times` INT DEFAULT 0 COMMENT '自动推送次数（次/天）',
    -- ==================== DNS云解析 ====================
    `dns_access` TINYINT DEFAULT 1 COMMENT 'DNS接入',
    `smart_line` VARCHAR(100) COMMENT '智能解析线路',
    `custom_line` TINYINT DEFAULT 0 COMMENT '自定义解析线路',
    `min_ttl` INT DEFAULT 300 COMMENT '最小TTL（秒）',
    `url_forward` INT DEFAULT 0 COMMENT 'URL转发条数（0表示不限）',
    `weight_support` TINYINT DEFAULT 1 COMMENT '解析权重',
    `load_balance` INT DEFAULT 0 COMMENT '负载均衡条数',
    -- ==================== Web应用防护（云部署独有） ====================
    `web_firewall` TINYINT DEFAULT 0 COMMENT '基础Web安全防护',
    `malicious_scan` TINYINT DEFAULT 0 COMMENT '恶意扫描防护',
    `vuln_patch` TINYINT DEFAULT 0 COMMENT '虚拟漏洞补丁',
    `ip_blacklist` TINYINT DEFAULT 0 COMMENT 'IP黑名单',
    `custom_rule` INT DEFAULT 0 COMMENT '自定义防护规则条数',
    -- ==================== 监测与技术服务 ====================
    `cert_monitor_frequency` VARCHAR(20) COMMENT '证书状态监测频率',
    `alert_channels` VARCHAR(100) COMMENT '安全告警通知渠道',
    `install_guide` VARCHAR(50) COMMENT '首次安装指导',
    `tech_support` VARCHAR(50) COMMENT '人工技术支持',
    -- ==================== 计费单元 ====================
    `domain_limit` INT DEFAULT 1 COMMENT '接入域名/IP数量限制',
    -- ==================== 云网关独有 ====================
    `local_deploy` TINYINT DEFAULT 0 COMMENT '本地部署',
    `ip_whitelist` TINYINT DEFAULT 0 COMMENT 'IP白名单+通信端口',
    -- ==================== 状态 ====================
    `status` TINYINT DEFAULT 1 COMMENT '1=启用, 0=禁用',
    `sort_order` INT DEFAULT 0 COMMENT '排序',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_product_edition (`product_type`, `edition`),
    INDEX idx_product_type (`product_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='产品版本配置表';


-- =====================================================
-- 接入配置表
-- =====================================================
CREATE TABLE IF NOT EXISTS `access_config` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `instance_id` BIGINT NOT NULL COMMENT '关联实例ID',
    `access_domains` JSON COMMENT '接入域名列表',
    `verify_type` TINYINT DEFAULT 1 COMMENT '验证方式 1 DNS 2 HTTP',
    `access_type` TINYINT DEFAULT 1 COMMENT '接入方式 1 自动 2 手动',
    `dns_servers` JSON COMMENT 'DNS服务器列表',
    `access_key` VARCHAR(255) COMMENT '域名提供商AccessKey',
    `access_secret` VARCHAR(255) COMMENT '域名提供商AccessSecret',
    `status` TINYINT DEFAULT 2 COMMENT '状态 1无效 2有效',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_instance_id (`instance_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COMMENT='接入配置表';


-- =====================================================
-- 操作日志表
-- =====================================================
CREATE TABLE IF NOT EXISTS `operation_log` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `username` VARCHAR(100),
    `operation` VARCHAR(255) NOT NULL,
    `ip_address` VARCHAR(50),
    `location` VARCHAR(255),
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_id (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='操作日志表';


-- =====================================================
-- 订单主表
-- =====================================================
CREATE TABLE IF NOT EXISTS `order` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `order_no` VARCHAR(32) NOT NULL UNIQUE COMMENT '订单号',
    `php_user_id` BIGINT NOT NULL COMMENT '用户ID',
    `product_type` TINYINT NOT NULL COMMENT '1=云推送,2=云部署,3=云网关',
    `edition` TINYINT NOT NULL COMMENT '版本',
    `domain` VARCHAR(255) NOT NULL COMMENT '域名',
    `years` INT NOT NULL COMMENT '购买年限',
    `original_price` INT NOT NULL COMMENT '原价（分）',
    `discount_amount` INT DEFAULT 0 COMMENT '优惠金额（分）',
    `actual_price` INT NOT NULL COMMENT '实付金额（分）',
    `status` TINYINT DEFAULT 0 COMMENT '0待支付,1已支付,2已取消',
    `pay_time` DATETIME COMMENT '支付时间',
    `pay_method` VARCHAR(50) COMMENT '支付方式',
    `pay_order_no` VARCHAR(100) COMMENT '第三方支付订单号',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_php_user_id (`php_user_id`),
    INDEX idx_order_no (`order_no`),
    INDEX idx_status (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='订单主表';

-- =====================================================
-- 交易流水表
-- =====================================================
CREATE TABLE `trade_record` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `order_id` BIGINT NOT NULL COMMENT '订单ID',
    `order_no` VARCHAR(32) NOT NULL COMMENT '订单号',
    `php_user_id` BIGINT NOT NULL COMMENT '用户ID',
    `amount` INT NOT NULL COMMENT '金额（分）',
    `type` TINYINT DEFAULT 1 COMMENT '1=收入,2=支出',
    `channel` VARCHAR(50) COMMENT '支付渠道: alipay/wechat/balance',
    `trade_no` VARCHAR(100) COMMENT '第三方交易号',
    `status` TINYINT DEFAULT 1 COMMENT '1成功,2失败',
    `remark` VARCHAR(255) COMMENT '备注',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_php_user_id (`php_user_id`),
    INDEX idx_order_no (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='交易流水表';

-- =====================================================
-- 发票申请表
-- =====================================================
CREATE TABLE `invoice` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `php_user_id` BIGINT NOT NULL COMMENT '用户ID',
    `order_ids` VARCHAR(500) NOT NULL COMMENT '关联订单ID列表',
    `invoice_title` VARCHAR(200) NOT NULL COMMENT '发票抬头',
    `tax_no` VARCHAR(50) COMMENT '纳税人识别号',
    `invoice_type` TINYINT DEFAULT 1 COMMENT '1=电子普通发票,2=增值税专用发票',
    `amount` INT NOT NULL COMMENT '开票金额（分）',
    `status` TINYINT DEFAULT 0 COMMENT '0待处理,1已开票,2已拒绝',
    `invoice_url` VARCHAR(500) COMMENT '发票文件URL',
    `remark` VARCHAR(255) COMMENT '备注',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_php_user_id (`php_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='发票申请表';