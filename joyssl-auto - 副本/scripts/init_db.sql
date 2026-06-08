-- 创建Go项目自己的数据库
CREATE DATABASE IF NOT EXISTS `joyssl_go` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE `joyssl_go`;

-- 1. 实例表（关联PHP系统的用户和证书）
CREATE TABLE IF NOT EXISTS `instance` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `instance_no` VARCHAR(32) NOT NULL UNIQUE COMMENT '实例编号',
    `php_user_id` BIGINT NOT NULL COMMENT 'PHP系统用户ID',
    `php_cert_id` BIGINT COMMENT 'PHP系统证书ID',
    `domain` VARCHAR(255) NOT NULL COMMENT '主域名',
    `product_type` VARCHAR(50) DEFAULT 'cloud_push' COMMENT '产品类型',
    `edition` VARCHAR(20) DEFAULT 'free' COMMENT '版本',
    `edition_name` VARCHAR(50) COMMENT '版本名称',
    `push_nodes` INT DEFAULT 2 COMMENT '推送节点数量',
    `push_times` INT DEFAULT 20 COMMENT '推送次数上限',
    `used_push_times` INT DEFAULT 0 COMMENT '已使用推送次数',
    `last_push_date` DATE COMMENT '最后一次推送日期',
    `start_time` DATETIME COMMENT '生效时间',
    `end_time` DATETIME COMMENT '结束时间',
    `status` TINYINT DEFAULT 1 COMMENT '1生效中 2已过期 3已暂停',
    `auto_renew` TINYINT DEFAULT 0 COMMENT '是否自动续费 0否 1是',
    `remark` VARCHAR(255) COMMENT '备注',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_php_user_id (`php_user_id`),
    INDEX idx_domain (`domain`),
    INDEX idx_status (`status`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- 2. 接入配置表
CREATE TABLE IF NOT EXISTS `access_config` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `instance_id` BIGINT NOT NULL COMMENT '关联实例ID',
    `access_domains` JSON COMMENT '接入域名列表',
    `verify_type` TINYINT DEFAULT 1 COMMENT '验证方式 1 DNS 2 HTTP',
    `access_type` TINYINT DEFAULT 1 COMMENT '接入方式 1 自动 2 手动',
    `dns_servers` JSON COMMENT 'DNS服务器列表',
    `access_key` VARCHAR(255) COMMENT '域名提供商AccessKey',
    `access_secret` VARCHAR(255) COMMENT '域名提供商AccessSecret',
    `status` TINYINT DEFAULT 0 COMMENT '状态 0无效 1有效',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_instance_id (`instance_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

-- 3. 操作日志表
CREATE TABLE IF NOT EXISTS `operation_log` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL COMMENT 'PHP用户ID',
    `username` VARCHAR(100) COMMENT '用户名',
    `operation` VARCHAR(255) NOT NULL COMMENT '操作内容',
    `ip_address` VARCHAR(50) COMMENT 'IP地址',
    `location` VARCHAR(255) COMMENT '位置',
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_id (`user_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;