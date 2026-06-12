-- =====================================================
-- JoySSL Database DDL
-- Generated on 2026-06-03
-- =====================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for audit_log
-- ----------------------------
CREATE TABLE IF NOT EXISTS `audit_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `table_name` varchar(255) DEFAULT NULL COMMENT '表名',
  `operation_type` enum('INSERT','UPDATE','DELETE') DEFAULT NULL COMMENT '操作类型',
  `old_value` text COMMENT '旧值',
  `new_value` text COMMENT '新值',
  `changed_by` varchar(255) DEFAULT NULL COMMENT '操作人',
  `change_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '变更时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_account
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_account` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `serialnum` varchar(255) NOT NULL COMMENT '序列号',
  `customname` varchar(255) NOT NULL DEFAULT '' COMMENT '客户名称',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `isadd` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否添加',
  `price` varchar(255) NOT NULL COMMENT '价格',
  `paychannel` tinyint(1) DEFAULT NULL COMMENT '支付渠道',
  `paychanneltxt` varchar(255) DEFAULT NULL COMMENT '支付渠道说明',
  `usefunds` tinyint(1) DEFAULT '0' COMMENT '使用资金',
  `usefundstxt` varchar(255) DEFAULT NULL COMMENT '使用资金说明',
  `content` text COMMENT '内容',
  `rukuanid` int(10) DEFAULT '0' COMMENT '入款ID',
  `isconfirm` tinyint(1) DEFAULT '0' COMMENT '是否确认',
  `confirmman` varchar(255) DEFAULT NULL COMMENT '确认人',
  `confirmtime` int(20) DEFAULT NULL COMMENT '确认时间',
  `confirminfo` text COMMENT '确认信息',
  `istype` tinyint(1) DEFAULT '0' COMMENT '类型',
  `balance` varchar(255) DEFAULT NULL COMMENT '余额',
  `pzlitpic` varchar(255) DEFAULT NULL COMMENT '凭证图片',
  `addtime` int(20) DEFAULT NULL COMMENT '添加时间',
  `relaordernum` varchar(255) DEFAULT NULL COMMENT '关联订单号',
  `relaserialnum` varchar(255) DEFAULT NULL COMMENT '关联序列号',
  `isappinvoice` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否APP发票',
  `ispaytype` tinyint(1) DEFAULT '0' COMMENT '支付类型',
  `isagent` tinyint(1) DEFAULT '0' COMMENT '是否代理',
  `tradedetail` text COMMENT '交易详情',
  `wechatpronum` varchar(255) DEFAULT NULL COMMENT '微信流水号',
  `alipay` varchar(255) DEFAULT NULL COMMENT '支付宝',
  `isthirdpay` tinyint(1) DEFAULT '0' COMMENT '是否第三方支付',
  `isgiftcert` tinyint(1) DEFAULT '0' COMMENT '是否礼品券',
  `paymentId` varchar(64) DEFAULT NULL COMMENT '支付ID',
  `paymentRequestId` varchar(64) DEFAULT NULL COMMENT '支付请求ID',
  PRIMARY KEY (`id`),
  UNIQUE KEY `paymentRequestId` (`paymentRequestId`)
) ENGINE=MyISAM AUTO_INCREMENT=95819 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_allocationuserlog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_allocationuserlog` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `allocationtype` tinyint(1) NOT NULL COMMENT '分配类型',
  `operatorid` int(10) NOT NULL COMMENT '操作员ID',
  `isfenpei` tinyint(1) NOT NULL COMMENT '是否分配',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=707 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_analysis_line
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_analysis_line` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `dnsid` int(10) NOT NULL COMMENT 'DNS ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `startip` varchar(255) NOT NULL COMMENT '起始IP',
  `endip` varchar(255) NOT NULL COMMENT '结束IP',
  `title` varchar(255) NOT NULL COMMENT '标题',
  `content` varchar(255) NOT NULL COMMENT '内容',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态',
  `lineid` varchar(255) NOT NULL COMMENT '线路ID',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=72 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_analysis_weight
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_analysis_weight` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `dnsid` int(10) NOT NULL COMMENT 'DNS ID',
  `host_record` varchar(255) NOT NULL COMMENT '主机记录',
  `host_recordtype` varchar(100) NOT NULL COMMENT '主机记录类型',
  `host_analysis_line` varchar(100) NOT NULL COMMENT '主机解析线路',
  `host_record_num` int(10) NOT NULL COMMENT '主机记录数',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `content` text NOT NULL COMMENT '内容',
  `fuzaitype` tinyint(1) NOT NULL DEFAULT '1' COMMENT '复杂类型',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=93 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_analysisinfo
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_analysisinfo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `host_dnsid` varchar(100) NOT NULL COMMENT '主机DNS ID',
  `host_record` varchar(255) NOT NULL COMMENT '主机记录',
  `host_recordtype` varchar(100) NOT NULL COMMENT '主机记录类型',
  `host_analysis_line` varchar(255) NOT NULL COMMENT '主机解析线路',
  `host_record_value` varchar(255) NOT NULL COMMENT '主机记录值',
  `host_tll` varchar(50) NOT NULL COMMENT '主机TTL',
  `host_status` tinyint(1) NOT NULL COMMENT '主机状态',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `content` text NOT NULL COMMENT '内容',
  `analysisid` varchar(100) NOT NULL COMMENT '解析ID',
  `host_preference` int(10) NOT NULL COMMENT '主机优先级',
  `host_record_weight` varchar(100) NOT NULL COMMENT '主机记录权重',
  `host_dominant` tinyint(255) NOT NULL COMMENT '主机主导',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=551 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_analysislog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_analysislog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `dnsid` int(10) NOT NULL COMMENT 'DNS ID',
  `content` text NOT NULL COMMENT '内容',
  `ipaddress` varchar(255) NOT NULL COMMENT 'IP地址',
  `area` varchar(255) NOT NULL COMMENT '区域',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=788 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_azorder_field
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_azorder_field` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `ordernum` varchar(255) NOT NULL COMMENT '订单号',
  `cid` int(20) NOT NULL COMMENT '客户ID',
  `uid` int(20) NOT NULL COMMENT '用户ID',
  `activeid` varchar(255) NOT NULL COMMENT '证书ID',
  `proid` tinyint(1) NOT NULL COMMENT '产品ID',
  `stypes` tinyint(1) NOT NULL COMMENT '类型',
  `nums` int(20) NOT NULL COMMENT '数量',
  `times` int(20) NOT NULL COMMENT '次数',
  `shengyunnums` int(20) NOT NULL COMMENT '剩余数量',
  `anzhuangnums` int(20) NOT NULL COMMENT '安装数量',
  `realprice` varchar(255) NOT NULL COMMENT '实价',
  `ispay` tinyint(1) NOT NULL COMMENT '是否支付',
  `content` text NOT NULL COMMENT '内容',
  `paytime` int(20) NOT NULL COMMENT '支付时间',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1116 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_azorderlog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_azorderlog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `domain` varchar(255) NOT NULL COMMENT '域名',
  `activeid` varchar(255) NOT NULL COMMENT '证书ID',
  `opsystem` tinyint(1) NOT NULL COMMENT '操作系统',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  `servicestate` tinyint(1) NOT NULL DEFAULT '1' COMMENT '服务状态',
  `content` text NOT NULL COMMENT '内容',
  `hfcontent` text NOT NULL COMMENT '回复内容',
  `certactiveid` varchar(255) NOT NULL COMMENT '证书ID',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=115 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_channels
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_channels` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `certnum` varchar(255) NOT NULL COMMENT '证书数量',
  `content` text NOT NULL COMMENT '内容',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=294 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_channels_log
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_channels_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `num` varchar(255) NOT NULL COMMENT '数量',
  `content` text NOT NULL COMMENT '内容',
  `ipaddress` varchar(255) NOT NULL COMMENT 'IP地址',
  `balance` varchar(255) NOT NULL COMMENT '余额',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3354 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_checkorder
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_checkorder` (
  `activeid` varchar(255) NOT NULL COMMENT '证书ID',
  `ordernum` varchar(255) NOT NULL COMMENT '订单号',
  `domain` varchar(255) NOT NULL COMMENT '域名',
  `signdomain` varchar(255) NOT NULL COMMENT '签名域名',
  `checktype` tinyint(1) NOT NULL COMMENT '验证类型',
  `checkunitinfonum` tinyint(1) NOT NULL COMMENT '验证单位信息编号',
  `company` varchar(255) NOT NULL COMMENT '公司',
  `buniness_category` varchar(100) NOT NULL COMMENT '行业类别',
  `province` varchar(255) NOT NULL COMMENT '省份',
  `city` varchar(255) NOT NULL COMMENT '城市',
  `country` varchar(255) NOT NULL COMMENT '国家',
  `place` varchar(255) NOT NULL COMMENT '地址',
  `mobile` varchar(255) NOT NULL COMMENT '手机',
  `email` varchar(255) NOT NULL COMMENT '邮箱',
  `zcode` varchar(255) NOT NULL COMMENT '邮编',
  `m_company` varchar(255) NOT NULL COMMENT '管理人公司',
  `m_taxpayercode` varchar(255) NOT NULL COMMENT '管理人税务登记号',
  `m_part` varchar(255) NOT NULL COMMENT '管理人部门',
  `mf_name` varchar(255) NOT NULL COMMENT '管理人姓名',
  `ml_name` varchar(255) NOT NULL COMMENT '管理人英文名',
  `m_email` varchar(255) NOT NULL COMMENT '管理人邮箱',
  `m_mobile` varchar(255) NOT NULL COMMENT '管理人手机',
  `m_place` varchar(255) NOT NULL COMMENT '管理人地址',
  `m_country` varchar(255) NOT NULL COMMENT '管理人国家',
  `m_province` varchar(255) NOT NULL COMMENT '管理人省份',
  `m_city` varchar(255) NOT NULL COMMENT '管理人城市',
  `m_zcode` varchar(255) NOT NULL COMMENT '管理人邮编',
  `c_company` varchar(255) NOT NULL COMMENT '联系人公司',
  `c_taxpayercode` varchar(255) NOT NULL COMMENT '联系人税务登记号',
  `c_part` varchar(255) NOT NULL COMMENT '联系人部门',
  `cf_name` varchar(255) NOT NULL COMMENT '联系人姓名',
  `cl_name` varchar(255) NOT NULL COMMENT '联系人英文名',
  `c_email` varchar(255) NOT NULL COMMENT '联系人邮箱',
  `c_mobile` varchar(255) NOT NULL COMMENT '联系人手机',
  `c_place` varchar(255) NOT NULL COMMENT '联系人地址',
  `c_country` varchar(255) NOT NULL COMMENT '联系人国家',
  `c_province` varchar(255) NOT NULL COMMENT '联系人省份',
  `c_city` varchar(255) NOT NULL COMMENT '联系人城市',
  `c_zcode` varchar(255) NOT NULL COMMENT '联系人邮编',
  `t_company` varchar(255) NOT NULL COMMENT '技术联系人公司',
  `t_taxpayercode` varchar(255) NOT NULL COMMENT '技术联系人税务登记号',
  `t_part` varchar(255) NOT NULL COMMENT '技术联系人部门',
  `tf_name` varchar(255) NOT NULL COMMENT '技术联系人姓名',
  `tl_name` varchar(255) NOT NULL COMMENT '技术联系人英文名',
  `t_email` varchar(255) NOT NULL COMMENT '技术联系人邮箱',
  `t_mobile` varchar(255) NOT NULL COMMENT '技术联系人手机',
  `t_place` varchar(255) NOT NULL COMMENT '技术联系人地址',
  `t_country` varchar(255) NOT NULL COMMENT '技术联系人国家',
  `t_province` varchar(255) NOT NULL COMMENT '技术联系人省份',
  `t_city` varchar(255) NOT NULL COMMENT '技术联系人城市',
  `t_zcode` varchar(255) NOT NULL COMMENT '技术联系人邮编',
  `csrcontent` text NOT NULL COMMENT 'CSR内容',
  `privatekey` text NOT NULL COMMENT '私钥',
  `signcsrcontent` text NOT NULL COMMENT '签名CSR内容',
  `signprivatekey` text NOT NULL COMMENT '签名私钥',
  `encsrcontent` text NOT NULL COMMENT '加密CSR内容',
  `enprivatekey` text NOT NULL COMMENT '加密私钥',
  `dnscheckrecord` varchar(255) NOT NULL COMMENT 'DNS验证记录',
  `dnscheckvalue` varchar(255) NOT NULL COMMENT 'DNS验证值',
  `dnschecktype` varchar(255) NOT NULL COMMENT 'DNS验证类型',
  `filecheckname` varchar(255) NOT NULL COMMENT '文件验证名称',
  `filecheckcontent` text NOT NULL COMMENT '文件验证内容',
  `filecheckroute` varchar(255) NOT NULL COMMENT '文件验证路径',
  `istongbu1` tinyint(1) NOT NULL DEFAULT '1' COMMENT '同步状态1',
  `istongbu2` tinyint(1) NOT NULL COMMENT '同步状态2',
  `istongbu3` tinyint(1) NOT NULL COMMENT '同步状态3',
  `addtime` int(20) NOT NULL DEFAULT '1' COMMENT '添加时间',
  `certId` text NOT NULL COMMENT '证书ID',
  `certificate` text NOT NULL COMMENT '证书',
  `cacertificate` text NOT NULL COMMENT 'CA证书',
  `signcertificate` text NOT NULL COMMENT '签名证书',
  `encertificate` text NOT NULL COMMENT '加密证书',
  `cacertificateroot` text NOT NULL COMMENT 'CA根证书',
  `jks` text NOT NULL COMMENT 'JKS格式',
  `pkcs12` text NOT NULL COMMENT 'PKCS12格式',
  `jksPass` varchar(255) NOT NULL COMMENT 'JKS密码',
  `pkcsPass` varchar(255) NOT NULL COMMENT 'PKCS12密码',
  `beginDate` varchar(255) NOT NULL COMMENT '开始日期',
  `endDate` varchar(255) NOT NULL COMMENT '结束日期',
  `nowcertendtime` int(20) NOT NULL COMMENT '当前证书到期时间',
  `orderno` varchar(255) NOT NULL COMMENT '订单号',
  `uniqueValue` varchar(255) NOT NULL COMMENT '唯一值',
  `singledomain` text NOT NULL COMMENT '单域名',
  `wildcarddomain` varchar(255) NOT NULL COMMENT '通配符域名',
  `ischange` tinyint(1) NOT NULL COMMENT '是否变更',
  `ischeckaccess` tinyint(1) NOT NULL COMMENT '是否验证通过',
  `checkemail` varchar(255) NOT NULL COMMENT '验证邮箱',
  `checkemailcode` varchar(255) NOT NULL COMMENT '验证邮箱验证码',
  `renewactiveid` varchar(255) NOT NULL COMMENT '续费证书ID',
  `ischangedomain` tinyint(1) NOT NULL COMMENT '是否变更域名',
  `encry_bits` varchar(255) NOT NULL COMMENT '加密位数',
  `caordernum` varchar(255) NOT NULL COMMENT 'CA订单号',
  `cacertnum` varchar(255) NOT NULL COMMENT 'CA证书号',
  `checkstate` tinyint(1) NOT NULL COMMENT '验证状态',
  `m_cardid` varchar(255) NOT NULL COMMENT '管理人身份证号',
  `c_cardid` varchar(255) NOT NULL COMMENT '联系人身份证号',
  `t_cardid` varchar(255) NOT NULL COMMENT '技术联系人身份证号',
  `reissue` tinyint(1) NOT NULL COMMENT '是否补办',
  `realappcode` varchar(10) NOT NULL COMMENT '实际申请码',
  `c_serialnumber` varchar(100) NOT NULL COMMENT '证书序列号',
  `certumovevfile` varchar(255) NOT NULL COMMENT 'Certum移动文件',
  `olddnscheckvalue` varchar(255) NOT NULL COMMENT '原DNS验证值',
  `ischangechecktype` tinyint(1) NOT NULL COMMENT '是否变更验证类型',
  `domain_validationtimes` int(20) NOT NULL COMMENT '域名验证次数',
  `sm2rootcert` text NOT NULL COMMENT 'SM2根证书',
  `company_en` varchar(255) NOT NULL COMMENT '公司名英文1',
  `place_en` varchar(255) NOT NULL COMMENT '地址英文2',
  `place_qcc` varchar(255) NOT NULL COMMENT '公司地址来源企查查3',
  `credit_no_qcc` varchar(100) NOT NULL COMMENT '统一机构代码证来源企查查4',
  `handler_py` varchar(100) NOT NULL COMMENT '经办人拼音5',
  `borthdate` varchar(100) NOT NULL COMMENT '经办人出生日期6',
  `period_of_validity` varchar(100) NOT NULL COMMENT '经办人身份证到期时间7',
  `legal_person` varchar(100) NOT NULL COMMENT '法人8',
  `legal_person_py` varchar(100) NOT NULL COMMENT '法人拼音9',
  `legal_person_type` varchar(100) NOT NULL COMMENT '法人类型10',
  `enlegal_person_type` varchar(100) DEFAULT NULL COMMENT '英文法人类型',
  `authorization_date` varchar(100) NOT NULL COMMENT '授权时间11',
  `qcc_url` text COMMENT '企查查URL12',
  `qcc_screenshot` text COMMENT '企业查查截图13',
  `frond_id_card` text COMMENT '身份证正面14',
  `back_id_card` text COMMENT '身份证反面15',
  `holding_frond_id_card` text COMMENT '手持身份证正面16',
  `holding_back_id_card` text COMMENT '手持身份证反面17',
  `business_license` text COMMENT '营业执照18',
  `authorization_pic` text COMMENT '授权书19',
  `invoice_pic` text COMMENT '发票20',
  `proof_address` text COMMENT '地址证明21',
  `incorporation` text COMMENT '公司注册证明书22',
  `incorporation_form` text COMMENT '法团成立表格23',
  `ukeyorderno` varchar(100) DEFAULT NULL COMMENT 'ukey版订单号24',
  `uploadcertumfile` text NOT NULL COMMENT '上传验证资料25',
  `issubmittocertum` tinyint(1) NOT NULL COMMENT '是否提交到certum接口26',
  `isgetqccdata` tinyint(1) DEFAULT NULL COMMENT '是否获取到张杰接口的信息27',
  `ishongkong` tinyint(1) DEFAULT NULL COMMENT '是否香港',
  PRIMARY KEY (`activeid`),
  KEY `activeid_all` (`activeid`,`checkstate`) USING BTREE,
  KEY `domain` (`domain`) USING BTREE,
  KEY `ordernum` (`ordernum`) USING BTREE,
  KEY `beginDate` (`beginDate`) USING BTREE,
  FULLTEXT KEY `idx_singledomain` (`singledomain`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_checkorder_auth
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_checkorder_auth` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `ordernum` varchar(255) NOT NULL COMMENT '订单号',
  `auth_status` tinyint(2) NOT NULL DEFAULT '0' COMMENT '0 待可信   1审核中、2生效中、3已关停',
  `auth_code` varchar(60) NOT NULL DEFAULT '' COMMENT '可信编号',
  `cloud_protection` tinyint(2) NOT NULL DEFAULT '1' COMMENT '云端防护  默认1开启 0关闭',
  `auto_script` text COMMENT '自动化脚本',
  `auth_mark_one` varchar(255) NOT NULL DEFAULT '' COMMENT '认证图标1',
  `auth_mark_two` varchar(255) NOT NULL DEFAULT '' COMMENT '认证图标2',
  `icp_record` varchar(255) NOT NULL DEFAULT '' COMMENT 'ICP备案',
  `cybersecurity_record` varchar(255) NOT NULL DEFAULT '' COMMENT '网安备案',
  `unit_type` varchar(100) NOT NULL DEFAULT '' COMMENT '单位类型',
  `operating_status` varchar(20) NOT NULL DEFAULT '' COMMENT '经营状态',
  `business_scope` text COMMENT '经营范围',
  `stamped_image` varchar(255) DEFAULT '' COMMENT '盖章图片',
  `auth_steps` text COMMENT '认证步骤',
  `credit_code` varchar(100) DEFAULT '' COMMENT '信用编码',
  `verify_method` text COMMENT '验证方法',
  `auti_tips` text NOT NULL COMMENT '防伪提示',
  `disclaimers` text COMMENT '免责声明',
  `service_support` varchar(255) DEFAULT '' COMMENT '服务支持',
  `crated_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `updated_time` int(11) NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_ordernum` (`ordernum`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_config
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_config` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `field` varchar(20) DEFAULT NULL COMMENT '字段',
  `value` varchar(50) DEFAULT NULL COMMENT '值',
  `date` varchar(20) DEFAULT NULL COMMENT '日期',
  PRIMARY KEY (`id`),
  UNIQUE KEY `field` (`field`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_coupon
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_coupon` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `sendmethod` tinyint(1) NOT NULL COMMENT '发放方式',
  `sendobjectnum` tinyint(1) NOT NULL COMMENT '发放对象编号',
  `sendobjectinfo` varchar(255) NOT NULL COMMENT '发放对象信息',
  `price` varchar(255) NOT NULL COMMENT '价格',
  `sendreasonnum` tinyint(1) NOT NULL COMMENT '发放原因编号',
  `sendreason` varchar(255) NOT NULL COMMENT '发放原因',
  `app_products` varchar(255) NOT NULL COMMENT '适用产品',
  `app_cabrands` varchar(255) NOT NULL COMMENT '适用品牌',
  `app_catypes` varchar(255) NOT NULL COMMENT '适用证书类型',
  `app_cafits` varchar(255) NOT NULL COMMENT '适用规格',
  `app_types` varchar(255) NOT NULL COMMENT '适用类型',
  `tiaojian` varchar(255) NOT NULL COMMENT '条件',
  `uselimitprice` varchar(255) NOT NULL COMMENT '使用限制价格',
  `expiry_date` tinyint(1) NOT NULL COMMENT '有效期类型',
  `expiry_dateinfo` varchar(255) NOT NULL COMMENT '有效期信息',
  `isrelacustomerjl` tinyint(1) NOT NULL COMMENT '是否关联客户经理',
  `customerjl` varchar(255) NOT NULL COMMENT '客户经理',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  `operator` varchar(255) NOT NULL COMMENT '操作员',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=647 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_couponcode
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_couponcode` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `sendmethod` tinyint(1) NOT NULL COMMENT '发放方式',
  `sendobjectnum` tinyint(1) NOT NULL COMMENT '发放对象编号',
  `senduid` int(10) NOT NULL COMMENT '发放用户ID',
  `sendobjectinfo` varchar(255) NOT NULL COMMENT '发放对象信息',
  `couponcode` varchar(255) NOT NULL COMMENT '优惠券码',
  `price` varchar(255) NOT NULL COMMENT '价格',
  `sendreasonnum` tinyint(1) NOT NULL COMMENT '发放原因编号',
  `sendreason` varchar(255) NOT NULL COMMENT '发放原因',
  `app_products` varchar(255) NOT NULL COMMENT '适用产品',
  `app_cabrands` varchar(255) NOT NULL COMMENT '适用品牌',
  `app_catypes` varchar(255) NOT NULL COMMENT '适用证书类型',
  `app_cafits` varchar(255) NOT NULL COMMENT '适用规格',
  `apptypes` varchar(255) NOT NULL COMMENT '适用类型',
  `tiaojian` varchar(255) NOT NULL COMMENT '条件',
  `uselimitprice` varchar(255) NOT NULL COMMENT '使用限制价格',
  `expiry_date` varchar(255) NOT NULL COMMENT '有效期',
  `expiry_dateinfo` tinyint(1) NOT NULL COMMENT '有效期信息',
  `addtime` varchar(255) NOT NULL COMMENT '添加时间',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  `operator` int(20) NOT NULL COMMENT '操作员',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_couponcodelog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_couponcodelog` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `couponnum` varchar(255) NOT NULL COMMENT '优惠券号',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `customname` varchar(255) NOT NULL COMMENT '客户名称',
  `couponid` varchar(255) NOT NULL COMMENT '优惠券ID',
  `isuse` tinyint(1) NOT NULL COMMENT '是否使用',
  `content` varchar(255) NOT NULL COMMENT '内容',
  `starttime` int(20) NOT NULL COMMENT '开始时间',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  `relaactiveid` varchar(255) NOT NULL COMMENT '关联证书ID',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_couponlog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_couponlog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `couponnum` varchar(255) NOT NULL COMMENT '优惠券号',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `customname` varchar(255) NOT NULL COMMENT '客户名称',
  `couponid` int(10) NOT NULL COMMENT '优惠券ID',
  `isuse` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否使用',
  `content` text NOT NULL COMMENT '内容',
  `couponstarttime` int(20) NOT NULL COMMENT '优惠券开始时间',
  `couponendtime` int(20) NOT NULL COMMENT '优惠券结束时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29813 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_customerchannel
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_customerchannel` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `ordernum` varchar(100) NOT NULL COMMENT '订单号',
  `activeid` varchar(255) NOT NULL COMMENT '证书ID',
  `edition` varchar(100) NOT NULL COMMENT '版本',
  `brands` varchar(100) NOT NULL COMMENT '品牌',
  `algorithm` varchar(100) NOT NULL COMMENT '算法',
  `types` varchar(100) NOT NULL COMMENT '类型',
  `fits` varchar(100) NOT NULL COMMENT '规格',
  `realprice` varchar(100) NOT NULL COMMENT '实价',
  `times` varchar(100) NOT NULL COMMENT '年限',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `starttime` int(20) NOT NULL COMMENT '开始时间',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  `orderstate` tinyint(1) NOT NULL COMMENT '订单状态',
  `certnum` int(10) NOT NULL COMMENT '证书数量',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `isfree` tinyint(1) NOT NULL COMMENT '是否免费',
  `usecertnum` int(20) NOT NULL COMMENT '使用证书数量',
  `czuid` int(10) NOT NULL COMMENT '操作员ID',
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=434 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_customerprice
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_customerprice` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `pactiveid` varchar(255) NOT NULL COMMENT '产品ID',
  `bigcategory` varchar(255) NOT NULL COMMENT '大类',
  `category` varchar(255) NOT NULL COMMENT '类别',
  `brands` varchar(255) NOT NULL COMMENT '品牌',
  `edition` varchar(255) NOT NULL COMMENT '版本',
  `algorithm` varchar(255) NOT NULL COMMENT '算法',
  `types` varchar(255) NOT NULL COMMENT '类型',
  `fits` varchar(255) NOT NULL COMMENT '规格',
  `units` int(20) NOT NULL COMMENT '单位',
  `years` int(20) NOT NULL COMMENT '年限',
  `price` decimal(20,2) NOT NULL COMMENT '价格',
  `procode` varchar(255) NOT NULL COMMENT '产品代码',
  `isshow` tinyint(1) NOT NULL COMMENT '是否显示',
  `mshow` tinyint(1) NOT NULL COMMENT '移动端显示',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=489 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_dns
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_dns` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `activeid` varchar(255) NOT NULL COMMENT '证书ID',
  `ordernum` varchar(255) NOT NULL COMMENT '订单号',
  `proid` int(10) NOT NULL COMMENT '产品ID',
  `dnsedition` tinyint(1) NOT NULL COMMENT 'DNS版本',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `domain` varchar(255) NOT NULL COMMENT '域名',
  `starttime` int(20) NOT NULL COMMENT '开始时间',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  `nowendtime` int(20) NOT NULL COMMENT '当前到期时间',
  `checkstate` tinyint(1) NOT NULL COMMENT '验证状态',
  `analysis_num` int(10) NOT NULL COMMENT '解析数量',
  `dnsstatus` tinyint(1) NOT NULL COMMENT 'DNS状态',
  `groups` int(10) NOT NULL COMMENT '分组',
  `price` varchar(255) NOT NULL COMMENT '价格',
  `realtimes` int(20) NOT NULL COMMENT '实际年限',
  `costprice` varchar(255) NOT NULL COMMENT '成本价',
  `orderstate` tinyint(1) NOT NULL COMMENT '订单状态',
  `checktype` varchar(100) NOT NULL COMMENT '验证类型',
  `checkrecord` varchar(100) NOT NULL COMMENT '验证记录',
  `checkvalue` varchar(100) NOT NULL COMMENT '验证值',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `isownsite` tinyint(1) NOT NULL COMMENT '是否自有站点',
  `isshow` tinyint(1) NOT NULL COMMENT '是否显示',
  `dnscontent` text NOT NULL COMMENT 'DNS内容',
  `editioncontent` text NOT NULL COMMENT '版本内容',
  `dnsladomainid` varchar(100) NOT NULL COMMENT 'DNSLA域名ID',
  `expectdns1` varchar(100) NOT NULL COMMENT '期望DNS1',
  `expectdns2` varchar(100) NOT NULL COMMENT '期望DNS2',
  `realdns1` varchar(100) NOT NULL COMMENT '实际DNS1',
  `realdns2` varchar(100) NOT NULL COMMENT '实际DNS2',
  `bindstatus` tinyint(1) NOT NULL DEFAULT '1' COMMENT '绑定状态',
  `dnslaorderid` varchar(100) NOT NULL COMMENT 'DNSLA订单ID',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=381 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_dns_group
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_dns_group` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `groupname` varchar(255) NOT NULL COMMENT '分组名称',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_dns_viewtimes
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_dns_viewtimes` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `domain` varchar(255) NOT NULL COMMENT '域名',
  `datetime` varchar(255) NOT NULL COMMENT '日期时间',
  `viewtimes` varchar(100) NOT NULL COMMENT '访问次数',
  `addtime` int(10) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_dnspage
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_dnspage` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `activeid` varchar(100) NOT NULL COMMENT '证书ID',
  `ordernum` varchar(100) NOT NULL COMMENT '订单号',
  `proid` int(10) NOT NULL COMMENT '产品ID',
  `dnsedition` tinyint(1) NOT NULL COMMENT 'DNS版本',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `domain` varchar(255) NOT NULL COMMENT '域名',
  `starttime` int(20) NOT NULL COMMENT '开始时间',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  `nowendtime` int(20) NOT NULL COMMENT '当前到期时间',
  `checkstate` tinyint(1) NOT NULL COMMENT '验证状态',
  `status` tinyint(1) NOT NULL COMMENT '状态',
  `price` varchar(255) NOT NULL COMMENT '价格',
  `realtimes` int(20) NOT NULL COMMENT '实际年限',
  `costprice` varchar(255) NOT NULL COMMENT '成本价',
  `reductionprice` varchar(255) NOT NULL COMMENT '减免价格',
  `couponprice` varchar(255) NOT NULL COMMENT '优惠券价格',
  `couponnum` varchar(255) NOT NULL COMMENT '优惠券号',
  `couponcodeprice` varchar(255) NOT NULL COMMENT '优惠券码价格',
  `couponcodenum` varchar(20) NOT NULL COMMENT '优惠券码数量',
  `orderstate` tinyint(1) NOT NULL COMMENT '订单状态',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `dnslaorderid` varchar(100) NOT NULL COMMENT 'DNSLA订单ID',
  `assetid` varchar(100) NOT NULL COMMENT '资产ID',
  `dnsladomainid` varchar(100) NOT NULL COMMENT 'DNSLA域名ID',
  `content` varchar(255) NOT NULL COMMENT '内容',
  `isbuytype` tinyint(1) NOT NULL COMMENT '购买类型',
  `relaactiveid` varchar(255) NOT NULL COMMENT '关联证书ID',
  `isover` tinyint(1) NOT NULL COMMENT '是否到期',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=481 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_dnspage_log
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_dnspage_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `activeid` varchar(100) NOT NULL COMMENT '证书ID',
  `editionnum` tinyint(1) NOT NULL COMMENT '版本号',
  `buyyear` tinyint(1) NOT NULL COMMENT '购买年限',
  `price` varchar(100) NOT NULL COMMENT '价格',
  `domain` varchar(255) NOT NULL COMMENT '域名',
  `starttime` int(20) NOT NULL COMMENT '开始时间',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  `ispay` tinyint(1) NOT NULL COMMENT '是否支付',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `isbuytype` tinyint(1) NOT NULL COMMENT '购买类型',
  `isupdate` tinyint(1) NOT NULL COMMENT '是否更新',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=260 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_freedeploy
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_freedeploy` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `ordernum` varchar(255) NOT NULL COMMENT '订单号',
  `activeid` varchar(255) NOT NULL COMMENT '证书ID',
  `relacertactiveid` varchar(255) NOT NULL COMMENT '关联证书ID',
  `times` int(20) NOT NULL COMMENT '年限',
  `domain` varchar(255) NOT NULL COMMENT '域名',
  `realprice` varchar(255) NOT NULL COMMENT '实价',
  `couponprice` varchar(255) NOT NULL COMMENT '优惠券价格',
  `couponnum` varchar(255) NOT NULL COMMENT '优惠券号',
  `couponcodeprice` varchar(255) NOT NULL COMMENT '优惠券码价格',
  `couponcodenum` varchar(255) NOT NULL COMMENT '优惠券码数量',
  `checkstate` int(10) NOT NULL COMMENT '验证状态',
  `orderstate` int(10) NOT NULL COMMENT '订单状态',
  `uid` int(20) NOT NULL COMMENT '用户ID',
  `cid` int(20) NOT NULL COMMENT '客户ID',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `edition` varchar(255) NOT NULL COMMENT '版本',
  `usearea` int(10) NOT NULL COMMENT '使用区域',
  `analysis` varchar(255) NOT NULL COMMENT '解析',
  `otherreason` varchar(255) NOT NULL COMMENT '其他原因',
  `isopenhttps` tinyint(1) NOT NULL COMMENT '是否开启HTTPS',
  `starttime` int(20) NOT NULL COMMENT '开始时间',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  `content` varchar(255) NOT NULL COMMENT '内容',
  `isaddcdndomain` tinyint(1) NOT NULL COMMENT '是否添加CDN域名',
  `checktxtvalue` varchar(255) NOT NULL COMMENT '验证文本值',
  `issetcdndomain` tinyint(1) NOT NULL COMMENT '是否设置CDN域名',
  `stopstatus` tinyint(1) NOT NULL COMMENT '停用状态',
  `isupdate` tinyint(1) NOT NULL COMMENT '是否更新',
  `isrenew` tinyint(1) NOT NULL COMMENT '是否续费',
  `isvaild` tinyint(1) NOT NULL COMMENT '是否有效',
  `setcdndomaintime` int(20) NOT NULL COMMENT '设置CDN域名时间',
  `oldactiveid` varchar(255) NOT NULL COMMENT '原证书ID',
  `isday` tinyint(1) NOT NULL COMMENT '是否按天',
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=113 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_freedeploypack
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_freedeploypack` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `ordernum` varchar(255) NOT NULL COMMENT '订单号',
  `activeid` varchar(255) NOT NULL COMMENT '证书ID',
  `buynum` int(20) NOT NULL COMMENT '购买数量',
  `realprice` varchar(255) NOT NULL COMMENT '实价',
  `checkstate` tinyint(1) NOT NULL COMMENT '验证状态',
  `couponprice` varchar(255) NOT NULL COMMENT '优惠券价格',
  `couponnum` varchar(255) NOT NULL COMMENT '优惠券号',
  `couponcodeprice` varchar(255) NOT NULL COMMENT '优惠券码价格',
  `couponcodenum` varchar(255) NOT NULL COMMENT '优惠券码数量',
  `orderstate` tinyint(1) NOT NULL COMMENT '订单状态',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `edition` varchar(255) NOT NULL COMMENT '版本',
  `starttime` int(20) NOT NULL COMMENT '开始时间',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  `used_amount` varchar(255) NOT NULL COMMENT '使用量',
  `content` varchar(255) NOT NULL COMMENT '内容',
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_invoice
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_invoice` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `invoicetitle` varchar(255) NOT NULL COMMENT '发票抬头',
  `taxpayercode` varchar(255) NOT NULL COMMENT '纳税人识别号',
  `bank` varchar(255) NOT NULL COMMENT '银行',
  `b_account` varchar(255) NOT NULL COMMENT '银行账号',
  `regplace` varchar(255) NOT NULL COMMENT '注册地址',
  `regphone` varchar(255) NOT NULL COMMENT '注册电话',
  `invoicetype` tinyint(1) NOT NULL COMMENT '发票类型',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=661 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_invoicelog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_invoicelog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `price` varchar(255) NOT NULL COMMENT '价格',
  `relaordid` text NOT NULL COMMENT '关联订单ID',
  `invoicetype` tinyint(1) NOT NULL COMMENT '发票类型',
  `invoicexs` tinyint(1) NOT NULL COMMENT '发票形式',
  `invoicestate` tinyint(1) NOT NULL COMMENT '发票状态',
  `beizhu` text NOT NULL COMMENT '备注',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `wuliucode` text NOT NULL COMMENT '物流单号',
  `slbeizhu` text NOT NULL COMMENT '收料备注',
  `sltime` int(20) NOT NULL COMMENT '收料时间',
  `invoicetitle` varchar(255) NOT NULL COMMENT '发票抬头',
  `taxpayercode` varchar(255) NOT NULL COMMENT '纳税人识别号',
  `bank` varchar(255) NOT NULL COMMENT '银行',
  `b_account` varchar(255) NOT NULL COMMENT '银行账号',
  `regplace` varchar(255) NOT NULL COMMENT '注册地址',
  `regphone` varchar(255) NOT NULL COMMENT '注册电话',
  `name` varchar(255) NOT NULL COMMENT '名称',
  `mobile` varchar(255) NOT NULL COMMENT '手机',
  `s_province` varchar(255) NOT NULL COMMENT '收件省份',
  `s_city` varchar(255) NOT NULL COMMENT '收件城市',
  `s_county` varchar(255) NOT NULL COMMENT '收件区县',
  `address` varchar(255) NOT NULL COMMENT '地址',
  `email` varchar(255) NOT NULL COMMENT '邮箱',
  `invoiceurl` varchar(255) NOT NULL COMMENT '发票URL',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=870 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_log
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `active` varchar(255) NOT NULL COMMENT '操作',
  `ipplace` varchar(255) NOT NULL COMMENT 'IP位置',
  `ipaddress` varchar(255) NOT NULL COMMENT 'IP地址',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`),
  KEY `idx_joy_log_uid_addtime` (`uid`,`addtime`)
) ENGINE=MyISAM AUTO_INCREMENT=153217 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_notice
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_notice` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `noticeid` int(10) NOT NULL COMMENT '公告ID',
  `title` text NOT NULL COMMENT '标题',
  `litpic` varchar(255) NOT NULL COMMENT '缩略图',
  `source` varchar(255) NOT NULL COMMENT '来源',
  `author` varchar(255) NOT NULL COMMENT '作者',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `rank` int(8) NOT NULL COMMENT '排序',
  `content` longtext NOT NULL COMMENT '内容',
  `pid` int(1) NOT NULL COMMENT '父ID',
  `isshow` tinyint(1) NOT NULL COMMENT '是否显示',
  `links` varchar(255) NOT NULL COMMENT '链接',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=106 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_notice_tips
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_notice_tips` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `content` text NOT NULL COMMENT '内容',
  `sendtime` int(20) NOT NULL COMMENT '发送时间',
  `comfirmtime` int(20) NOT NULL COMMENT '确认时间',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `sendtouid` int(10) NOT NULL COMMENT '发送给用户ID',
  `isview` tinyint(1) NOT NULL COMMENT '是否查看',
  `ipaddress` varchar(255) NOT NULL COMMENT 'IP地址',
  PRIMARY KEY (`id`),
  KEY `idx_sendtouid_id` (`sendtouid`,`id`,`uid`,`isview`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=1129768 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_order
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_order` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `domain` text NOT NULL COMMENT '域名',
  `ordernum` varchar(255) NOT NULL COMMENT '订单号',
  `proid` tinyint(1) NOT NULL COMMENT '产品ID',
  `realprice` varchar(255) NOT NULL COMMENT '实价',
  `couponprice` varchar(255) NOT NULL COMMENT '优惠券价格',
  `couponcodeprice` varchar(255) NOT NULL COMMENT '优惠券码价格',
  `orderprice` varchar(255) NOT NULL COMMENT '订单价格',
  `ordertype` tinyint(1) NOT NULL COMMENT '订单类型',
  `orderstate` tinyint(1) NOT NULL COMMENT '订单状态',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `paytime` int(20) NOT NULL COMMENT '支付时间',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  `paytype` tinyint(1) NOT NULL COMMENT '支付类型',
  `content` text NOT NULL COMMENT '内容',
  `isappinvoice` tinyint(1) NOT NULL COMMENT '是否APP发票',
  `checkstate` tinyint(1) NOT NULL DEFAULT '0' COMMENT '验证状态',
  `orderzkprice` varchar(255) NOT NULL DEFAULT '0' COMMENT '订单折扣价格',
  `totalreductionprice` varchar(255) NOT NULL DEFAULT '0' COMMENT '总减免价格',
  `fromcerttype` varchar(100) NOT NULL COMMENT '来源证书类型',
  `dnsbackurlnum` tinyint(1) NOT NULL COMMENT 'DNS回调URL数量',
  `dnsbackid` int(10) NOT NULL COMMENT 'DNS回调ID',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=85146 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_packusedlog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_packusedlog` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(20) NOT NULL COMMENT '用户ID',
  `activeid` varchar(255) NOT NULL COMMENT '证书ID',
  `addflow` varchar(255) NOT NULL COMMENT '添加流量',
  `addviewtimes` varchar(255) NOT NULL COMMENT '添加访问次数',
  `flow` varchar(255) NOT NULL COMMENT '流量',
  `viewtimes` varchar(255) NOT NULL COMMENT '访问次数',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `usetime` varchar(255) NOT NULL COMMENT '使用时间',
  `balanceflow` varchar(255) NOT NULL COMMENT '剩余流量',
  `balanceviewtimes` varchar(255) NOT NULL COMMENT '剩余访问次数',
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7382 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_payorderlog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_payorderlog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `ordernum` varchar(100) NOT NULL COMMENT '订单号',
  `out_trade_no` varchar(100) NOT NULL COMMENT '外部交易号',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `isshow` tinyint(1) NOT NULL COMMENT '是否显示',
  `vaildtime` int(20) NOT NULL COMMENT '有效时间',
  `price` varchar(100) NOT NULL COMMENT '价格',
  `ispay` tinyint(1) NOT NULL COMMENT '是否支付',
  `proid` int(10) NOT NULL COMMENT '产品ID',
  `paychannel` tinyint(1) NOT NULL COMMENT '支付渠道',
  `paychanneltxt` varchar(100) NOT NULL COMMENT '支付渠道说明',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=225 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_performancelog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_performancelog` (
  `id` int(10) NOT NULL COMMENT '自增ID',
  `uid` int(20) NOT NULL COMMENT '用户ID',
  `cid` int(20) NOT NULL COMMENT '客户ID',
  `nowmonthyeji` varchar(255) NOT NULL COMMENT '本月业绩',
  `nowmonth` varchar(255) NOT NULL COMMENT '当前月份',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `customertargetnum` varchar(255) NOT NULL COMMENT '客户目标数量',
  `yejitargetprice` varchar(255) NOT NULL COMMENT '业绩目标价格',
  `standardofmoney` varchar(255) NOT NULL COMMENT '金额标准',
  `channel_deduction` varchar(255) NOT NULL COMMENT '渠道扣款',
  `bb_customernums` varchar(255) NOT NULL COMMENT 'BB客户数量',
  `bb_customerid_text` text NOT NULL COMMENT 'BB客户ID文本',
  `overtimepay` varchar(255) NOT NULL COMMENT '超时支付',
  `customertarget_deduction` varchar(255) NOT NULL COMMENT '客户目标扣款',
  `fpcustomer_deduction` varchar(255) NOT NULL COMMENT 'FP客户扣款',
  `bb_customermoney` varchar(255) NOT NULL COMMENT 'BB客户金额',
  PRIMARY KEY (`id`),
  KEY `id` (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=27912 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_porder_field
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_porder_field` (
  `activeid` varchar(255) NOT NULL COMMENT '证书ID',
  `ordernum` varchar(255) NOT NULL COMMENT '订单号',
  `channelactiveid` varchar(255) NOT NULL COMMENT '渠道证书ID',
  `proid` tinyint(1) NOT NULL COMMENT '产品ID',
  `nums` int(20) NOT NULL COMMENT '数量',
  `times` int(20) NOT NULL COMMENT '年限',
  `realtimes` int(20) NOT NULL COMMENT '实际年限',
  `pcategory` varchar(255) NOT NULL COMMENT '产品类别',
  `pbrands` varchar(255) NOT NULL COMMENT '产品品牌',
  `pedition` varchar(255) NOT NULL COMMENT '产品版本',
  `palgorithm` varchar(255) NOT NULL COMMENT '产品算法',
  `ptypes` varchar(255) NOT NULL COMMENT '产品类型',
  `pfits` varchar(255) NOT NULL COMMENT '产品规格',
  `psigntype` tinyint(1) NOT NULL DEFAULT '1' COMMENT '产品签名类型',
  `realprice` varchar(255) NOT NULL COMMENT '实价',
  `costprice` varchar(255) NOT NULL COMMENT '成本价',
  `reductionprice` varchar(255) NOT NULL DEFAULT '0' COMMENT '减免价格',
  `couponprice` varchar(255) NOT NULL COMMENT '优惠券价格',
  `couponnum` varchar(255) NOT NULL COMMENT '优惠券号',
  `couponcodeprice` varchar(255) NOT NULL DEFAULT '0' COMMENT '优惠券码价格',
  `couponcodenum` varchar(255) NOT NULL COMMENT '优惠券码数量',
  `isfree` tinyint(1) NOT NULL COMMENT '是否免费',
  `checkstate` tinyint(1) NOT NULL COMMENT '验证状态',
  `singledomainnum` int(20) NOT NULL COMMENT '单域名数量',
  `multidomainnum` int(20) NOT NULL COMMENT '多域名数量',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `orderstate` tinyint(1) NOT NULL COMMENT '订单状态',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `content` text NOT NULL COMMENT '内容',
  `ordertype` tinyint(1) NOT NULL COMMENT '订单类型',
  `procode` varchar(255) NOT NULL COMMENT '产品代码',
  `isorder` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否下单',
  `isopenfreedeploy` tinyint(1) NOT NULL COMMENT '是否开启免费部署',
  `openfreedeploydomain` varchar(255) NOT NULL COMMENT '免费部署域名',
  `cnametag` varchar(255) NOT NULL COMMENT 'CNAME标签',
  `cnamevalue` varchar(255) NOT NULL COMMENT 'CNAME值',
  `cnamesuffix` varchar(255) NOT NULL COMMENT 'CNAME后缀',
  `isanalysisdomain` tinyint(1) NOT NULL COMMENT '是否解析域名',
  `certnameinfo` varchar(255) NOT NULL COMMENT '证书名称信息',
  `failreason` varchar(255) NOT NULL COMMENT '失败原因',
  `daichecktime` int(20) NOT NULL COMMENT '待审核时间',
  `daiqianfatime` int(20) NOT NULL COMMENT '待签发时间',
  `lastsubmittime` int(20) NOT NULL COMMENT '最后提交时间',
  `useendtime` int(20) NOT NULL COMMENT '使用结束时间',
  `isotherplat` tinyint(1) NOT NULL COMMENT '是否其他平台',
  `getcertstatustime` int(20) NOT NULL COMMENT '获取证书状态时间',
  `isshowchecktxt` tinyint(1) NOT NULL COMMENT '是否显示验证文本',
  `cendstatus` tinyint(1) NOT NULL COMMENT '证书状态',
  `reissue` tinyint(1) NOT NULL COMMENT '是否补办',
  `t_content` text NOT NULL COMMENT '技术内容',
  `isnewcaroot` tinyint(1) NOT NULL COMMENT '是否新CA根',
  `isinterface` tinyint(1) NOT NULL COMMENT '是否接口',
  `isrenew` tinyint(1) NOT NULL COMMENT '是否续费',
  `certumissubmit` tinyint(1) NOT NULL COMMENT 'Certum是否提交',
  `issubmitapptable` tinyint(1) NOT NULL COMMENT '是否提交到申请表',
  `isrevocationcert` tinyint(1) NOT NULL COMMENT '是否撤销证书',
  `ischongqian` tinyint(1) NOT NULL COMMENT '是否重签',
  `ownsignurl` varchar(255) NOT NULL COMMENT '自有签名URL',
  `certcreatetime` int(20) NOT NULL COMMENT '证书创建时间',
  `reissueactiveid` varchar(255) NOT NULL COMMENT '补办证书ID',
  `isagent` tinyint(1) NOT NULL COMMENT '是否代理',
  `canceltime` int(20) NOT NULL COMMENT '取消时间',
  PRIMARY KEY (`activeid`),
  KEY `uid` (`uid`),
  KEY `checkstate` (`checkstate`),
  KEY `orderstate` (`orderstate`),
  KEY `pcategory` (`pcategory`) USING BTREE,
  KEY `pbrands` (`pbrands`) USING BTREE,
  KEY `pedition` (`pedition`) USING BTREE,
  KEY `ptypes` (`ptypes`) USING BTREE,
  KEY `pfits` (`pfits`) USING BTREE,
  KEY `cid` (`cid`) USING BTREE,
  KEY `activeid` (`activeid`) USING BTREE,
  KEY `idx_orderstate_pcategory_uid_addtime` (`orderstate`,`pcategory`,`uid`,`addtime`),
  FULLTEXT KEY `idx_content` (`content`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_pricelist
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_pricelist` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `pactiveid` varchar(255) NOT NULL COMMENT '产品ID',
  `bigcategory` varchar(255) NOT NULL COMMENT '大类',
  `category` varchar(255) NOT NULL COMMENT '类别',
  `brands` varchar(255) NOT NULL COMMENT '品牌',
  `edition` varchar(255) NOT NULL COMMENT '版本',
  `algorithm` varchar(255) NOT NULL COMMENT '算法',
  `types` varchar(255) NOT NULL COMMENT '类型',
  `fits` varchar(255) NOT NULL COMMENT '规格',
  `units` int(20) NOT NULL COMMENT '单位',
  `years` int(20) NOT NULL COMMENT '年限',
  `price` decimal(20,2) NOT NULL COMMENT '价格',
  `price6` decimal(20,2) NOT NULL COMMENT '6年价格',
  `price1` decimal(20,2) NOT NULL COMMENT '1年价格',
  `price2` decimal(20,2) NOT NULL COMMENT '2年价格',
  `price3` decimal(20,2) NOT NULL COMMENT '3年价格',
  `price4` decimal(20,2) NOT NULL COMMENT '4年价格',
  `price5` decimal(20,2) NOT NULL COMMENT '5年价格',
  `procode` varchar(255) NOT NULL COMMENT '产品代码',
  `isshow` tinyint(1) NOT NULL COMMENT '是否显示',
  `mshow` tinyint(1) NOT NULL COMMENT '移动端显示',
  `signtype` tinyint(1) NOT NULL DEFAULT '1' COMMENT '签名类型',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41598 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_receiving
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_receiving` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(20) NOT NULL COMMENT '用户ID',
  `name` varchar(255) NOT NULL COMMENT '收货人姓名',
  `mobile` varchar(255) NOT NULL COMMENT '收货人手机',
  `s_province` varchar(255) NOT NULL COMMENT '收货省份',
  `s_city` varchar(255) NOT NULL COMMENT '收货城市',
  `s_county` varchar(255) NOT NULL COMMENT '收货区县',
  `address` varchar(255) NOT NULL COMMENT '收货地址',
  `email` varchar(255) NOT NULL COMMENT '邮箱',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=634 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_refundlog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_refundlog` (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `refundnum` varchar(100) NOT NULL COMMENT '退款单号',
  `certactiveid` varchar(100) NOT NULL COMMENT '证书ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `paytime` int(20) NOT NULL COMMENT '支付时间',
  `apptime` int(20) NOT NULL COMMENT '申请时间',
  `paytype` tinyint(1) NOT NULL COMMENT '支付类型',
  `refundtime` int(20) NOT NULL COMMENT '退款时间',
  `refundcontent` text NOT NULL COMMENT '退款内容',
  `refundreason` varchar(100) NOT NULL COMMENT '退款原因',
  `refundprice` varchar(100) NOT NULL COMMENT '退款金额',
  `isallowrefund` tinyint(1) NOT NULL COMMENT '是否允许退款',
  `refundtype` tinyint(1) NOT NULL DEFAULT '1' COMMENT '退款类型',
  `refundstatus` tinyint(1) NOT NULL COMMENT '退款状态',
  `content` text NOT NULL COMMENT '内容',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1548 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_renew
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_renew` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `activeid` varchar(255) NOT NULL COMMENT '证书ID',
  `proname` varchar(255) NOT NULL COMMENT '产品名称',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `starttime` int(20) NOT NULL COMMENT '开始时间',
  `endtime` int(20) NOT NULL COMMENT '结束时间',
  `isshow` tinyint(1) NOT NULL COMMENT '是否显示',
  `renewtips` varchar(255) NOT NULL COMMENT '续费提示',
  `endstatus60` tinyint(1) NOT NULL COMMENT '到期前60天状态',
  `endstatus30` tinyint(1) NOT NULL COMMENT '到期前30天状态',
  `endstatus15` tinyint(1) NOT NULL COMMENT '到期前15天状态',
  `endstatus7` tinyint(1) NOT NULL COMMENT '到期前7天状态',
  `endstatus3` tinyint(1) NOT NULL COMMENT '到期前3天状态',
  `endstatus1` tinyint(1) NOT NULL COMMENT '到期前1天状态',
  `isrenew` tinyint(1) NOT NULL COMMENT '是否续费',
  `domain` varchar(255) NOT NULL COMMENT '域名',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=59822 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_renewsmslog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_renewsmslog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `addtime` varchar(255) NOT NULL COMMENT '添加时间',
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=55080 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_renzhenglog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_renzhenglog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `reviewer` int(10) NOT NULL COMMENT '审核员ID',
  `audittime` int(20) NOT NULL COMMENT '审核时间',
  `isshenghe` tinyint(1) NOT NULL COMMENT '是否审核',
  `rejectinfo` varchar(255) NOT NULL COMMENT '拒绝原因',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1612 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_sendcodelog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_sendcodelog` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `name` varchar(255) NOT NULL COMMENT '姓名',
  `area` varchar(255) NOT NULL COMMENT '区域',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1310 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_signlog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_signlog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `todaysigncertnum` varchar(100) NOT NULL COMMENT '今日签发证书数量',
  `yesterdaysigncertnum` varchar(100) NOT NULL COMMENT '昨日签发证书数量',
  `nowweeksigncertnum` varchar(100) NOT NULL COMMENT '本周签发证书数量',
  `lastweeksigncertnum` varchar(100) NOT NULL COMMENT '上周签发证书数量',
  `nowmonthsigncertnum` varchar(100) NOT NULL COMMENT '本月签发证书数量',
  `lastmonthsigncertnum` varchar(100) NOT NULL COMMENT '上月签发证书数量',
  `certtype` varchar(100) NOT NULL COMMENT '证书类型',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_sourcesiteinfo
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_sourcesiteinfo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `activeid` varchar(255) NOT NULL COMMENT '证书ID',
  `cdndomain` varchar(255) NOT NULL COMMENT 'CDN域名',
  `sourcesite` varchar(255) NOT NULL COMMENT '源站',
  `sourcezhubei` int(10) NOT NULL COMMENT '源站主备',
  `sourceqz` int(10) NOT NULL COMMENT '源站强制',
  `sourcetcp` int(10) NOT NULL COMMENT '源站TCP',
  `sourceport` int(10) NOT NULL COMMENT '源站端口',
  `sourcecontent` text NOT NULL COMMENT '源站内容',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=97 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_syslog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_syslog` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `title` varchar(255) NOT NULL COMMENT '标题',
  `content` text NOT NULL COMMENT '内容',
  `beizhu` text NOT NULL COMMENT '备注',
  `rank` int(20) NOT NULL COMMENT '排序',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_tag (可信认证)
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_tag` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '用户id',
  `activeid` varchar(60) NOT NULL DEFAULT '' COMMENT '证书id',
  `uname` varchar(30) NOT NULL DEFAULT '' COMMENT '客户名字',
  `uphone` varchar(30) NOT NULL COMMENT '客户手机',
  `start_time` varchar(60) NOT NULL DEFAULT '' COMMENT '订阅开始时间',
  `t_status` tinyint(1) NOT NULL COMMENT '认证状态：3=待审核,1=生效中,2=已关停',
  `t_scope` int(6) unsigned NOT NULL DEFAULT '31' COMMENT '认证范围:工商注册信息=1、域名管理信息=2、网站备案信息=4、网络身份信息=8、https安全防护=16',
  `t_code` varchar(50) NOT NULL DEFAULT '' COMMENT '可信编号',
  `domain` varchar(100) NOT NULL DEFAULT '' COMMENT '网站域名',
  `host_entity` varchar(80) NOT NULL DEFAULT '' COMMENT '举办主体',
  `icp_beian` varchar(100) NOT NULL DEFAULT '' COMMENT 'icp备案',
  `ga_beian` varchar(100) NOT NULL DEFAULT '' COMMENT '公安备案',
  `social_code` varchar(50) NOT NULL DEFAULT '' COMMENT '统一社会信用代码',
  `c_type` varchar(50) NOT NULL DEFAULT '' COMMENT '单位类型',
  `c_address` varchar(255) NOT NULL DEFAULT '' COMMENT '注册地址',
  `c_status` varchar(20) NOT NULL DEFAULT '' COMMENT '经营状态',
  `c_scope` text NOT NULL COMMENT '经营范围',
  `s_level` varchar(30) NOT NULL DEFAULT '' COMMENT '安全等级',
  `s_vol` varchar(30) NOT NULL DEFAULT '' COMMENT '加密强度',
  `key_algo` varchar(80) NOT NULL DEFAULT '' COMMENT '秘钥算法',
  `sign_algo` varchar(80) NOT NULL DEFAULT '' COMMENT '签名算法',
  `issu_auth` varchar(100) NOT NULL DEFAULT '' COMMENT '签发机构',
  `ssl_status` varchar(20) NOT NULL DEFAULT '' COMMENT '运行状态',
  `cloud_status` varchar(10) NOT NULL DEFAULT '' COMMENT '云端防护',
  `jc_time` varchar(30) NOT NULL DEFAULT '' COMMENT '检测时间',
  `ipv6_status` varchar(20) NOT NULL DEFAULT '' COMMENT 'ipv6状态',
  `end_time` int(11) DEFAULT '0' COMMENT '认证结束时间',
  `manager` varchar(20) NOT NULL DEFAULT '' COMMENT '客戶经理',
  `code` text COMMENT '生成的代码',
  `cid` int(10) NOT NULL DEFAULT '0' COMMENT '客户经理id',
  `tag_width` char(4) DEFAULT '180' COMMENT '图标大小',
  `created_at` int(11) DEFAULT NULL COMMENT '创建时间',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `is_shoudong` tinyint(1) DEFAULT '1' COMMENT '管理员手动设置可信状态：1=正常，2=异常',
  `pfits` varchar(20) DEFAULT NULL COMMENT '产品规格',
  `singledomain` varchar(255) DEFAULT NULL COMMENT '单域名',
  `m_domain` varchar(50) DEFAULT NULL COMMENT '主域名',
  `log_remark` varchar(255) DEFAULT NULL COMMENT '日志备注',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `t_code` (`t_code`) USING BTREE,
  UNIQUE KEY `domain` (`domain`) USING BTREE,
  KEY `uid` (`uid`) USING BTREE,
  KEY `end_time` (`end_time`) USING BTREE,
  KEY `activeid` (`activeid`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=116 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='可信认证';

-- ----------------------------
-- Table structure for joy_tag_copy1
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_tag_copy1` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '用户id',
  `activeid` varchar(60) NOT NULL DEFAULT '' COMMENT '证书id',
  `uname` varchar(30) NOT NULL DEFAULT '' COMMENT '客户名字',
  `uphone` varchar(30) NOT NULL COMMENT '客户手机',
  `start_time` varchar(60) NOT NULL DEFAULT '' COMMENT '订阅开始时间',
  `t_status` tinyint(1) NOT NULL COMMENT '认证状态：3=待审核,1=生效中,2=已关停',
  `t_scope` int(6) unsigned NOT NULL DEFAULT '31' COMMENT '认证范围:工商注册信息=1、域名管理信息=2、网站备案信息=4、网络身份信息=8、https安全防护=16',
  `t_code` varchar(50) NOT NULL DEFAULT '' COMMENT '可信编号',
  `domain` varchar(100) NOT NULL DEFAULT '' COMMENT '网站域名',
  `host_entity` varchar(80) NOT NULL DEFAULT '' COMMENT '举办主体',
  `icp_beian` varchar(100) NOT NULL DEFAULT '' COMMENT 'icp备案',
  `ga_beian` varchar(100) NOT NULL DEFAULT '' COMMENT '公安备案',
  `social_code` varchar(50) NOT NULL DEFAULT '' COMMENT '统一社会信用代码',
  `c_type` varchar(50) NOT NULL DEFAULT '' COMMENT '单位类型',
  `c_address` varchar(255) NOT NULL DEFAULT '' COMMENT '注册地址',
  `c_status` varchar(20) NOT NULL DEFAULT '' COMMENT '经营状态',
  `c_scope` text NOT NULL COMMENT '经营范围',
  `s_level` varchar(30) NOT NULL DEFAULT '' COMMENT '安全等级',
  `s_vol` varchar(30) NOT NULL DEFAULT '' COMMENT '加密强度',
  `key_algo` varchar(80) NOT NULL DEFAULT '' COMMENT '秘钥算法',
  `sign_algo` varchar(80) NOT NULL DEFAULT '' COMMENT '签名算法',
  `issu_auth` varchar(100) NOT NULL DEFAULT '' COMMENT '签发机构',
  `ssl_status` varchar(20) NOT NULL DEFAULT '' COMMENT '运行状态',
  `cloud_status` varchar(10) NOT NULL DEFAULT '' COMMENT '云端防护',
  `jc_time` varchar(30) NOT NULL DEFAULT '' COMMENT '检测时间',
  `ipv6_status` varchar(20) NOT NULL DEFAULT '' COMMENT 'ipv6状态',
  `end_time` int(11) DEFAULT '0' COMMENT '认证结束时间',
  `manager` varchar(20) NOT NULL DEFAULT '' COMMENT '客戶经理',
  `code` text COMMENT '生成的代码',
  `cid` int(10) NOT NULL DEFAULT '0' COMMENT '客户经理id',
  `tag_width` char(4) DEFAULT '180' COMMENT '图标大小',
  `created_at` int(11) DEFAULT NULL COMMENT '创建时间',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `is_shoudong` tinyint(1) DEFAULT '1' COMMENT '管理员手动设置可信状态：1=正常，2=异常',
  `pfits` varchar(20) DEFAULT NULL COMMENT '产品规格',
  `singledomain` varchar(255) DEFAULT NULL COMMENT '单域名',
  `m_domain` varchar(50) DEFAULT NULL COMMENT '主域名',
  `log_remark` varchar(255) DEFAULT NULL COMMENT '日志备注',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `t_code` (`t_code`) USING BTREE,
  UNIQUE KEY `domain` (`domain`) USING BTREE,
  KEY `uid` (`uid`) USING BTREE,
  KEY `end_time` (`end_time`) USING BTREE,
  KEY `activeid` (`activeid`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=113 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='可信认证';

-- ----------------------------
-- Table structure for joy_tag_log (可信认证日志)
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_tag_log` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(11) NOT NULL DEFAULT '0' COMMENT '用户ID',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `content` varchar(255) NOT NULL DEFAULT '' COMMENT '变更内容',
  `activeid` varchar(50) NOT NULL DEFAULT '' COMMENT '证书id',
  `tag_id` int(11) NOT NULL DEFAULT '0' COMMENT '可信认证id',
  `cid` int(11) NOT NULL DEFAULT '0' COMMENT '管理员id',
  `remark` varchar(255) NOT NULL DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=153 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='可信认证日志';

-- ----------------------------
-- Table structure for joy_unitinfo
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_unitinfo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `unitid` varchar(255) NOT NULL COMMENT '单位ID',
  `company` varchar(255) NOT NULL COMMENT '公司',
  `province` varchar(255) NOT NULL COMMENT '省份',
  `city` varchar(255) NOT NULL COMMENT '城市',
  `country` varchar(255) NOT NULL COMMENT '国家',
  `place` varchar(255) NOT NULL COMMENT '地址',
  `mobile` varchar(255) NOT NULL COMMENT '手机',
  `email` varchar(255) NOT NULL COMMENT '邮箱',
  `zcode` varchar(255) NOT NULL COMMENT '邮编',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `taxpayercode` varchar(255) NOT NULL COMMENT '纳税人识别号',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16115 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_usedlog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_usedlog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `domain` varchar(255) NOT NULL COMMENT '域名',
  `uid` int(20) NOT NULL COMMENT '用户ID',
  `cflow` varchar(255) NOT NULL COMMENT '当前流量',
  `f_flow` varchar(255) NOT NULL COMMENT '免费流量',
  `g_flow` varchar(255) NOT NULL COMMENT '已用流量',
  `viewtimes` varchar(255) NOT NULL COMMENT '访问次数',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `usetime` varchar(255) NOT NULL COMMENT '使用时间',
  PRIMARY KEY (`id`),
  KEY `id` (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5663 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_user
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_user` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `auser` varchar(255) NOT NULL COMMENT '用户名',
  `userpic` varchar(255) NOT NULL COMMENT '用户头像',
  `aname` varchar(255) NOT NULL COMMENT '用户姓名',
  `apass` varchar(32) NOT NULL COMMENT '密码',
  `aemail` varchar(50) NOT NULL COMMENT '邮箱',
  `amobile` varchar(11) NOT NULL COMMENT '手机',
  `awechat` varchar(255) NOT NULL COMMENT '微信',
  `arole` tinyint(1) NOT NULL COMMENT '角色',
  `alevel` tinyint(1) NOT NULL COMMENT '级别',
  `islockip` tinyint(1) NOT NULL COMMENT '是否锁定IP',
  `lockipcont` varchar(255) NOT NULL COMMENT '锁定IP内容',
  `isshow` tinyint(1) NOT NULL COMMENT '是否显示',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `operatetime` int(20) NOT NULL COMMENT '操作时间',
  `loginip` varchar(255) NOT NULL COMMENT '登录IP',
  `lastlogintime` int(20) NOT NULL COMMENT '最后登录时间',
  `beizhu` text NOT NULL COMMENT '备注',
  `tokenid` varchar(255) NOT NULL COMMENT 'Token ID',
  `onlinetime` varchar(255) NOT NULL COMMENT '在线时间',
  `openid` varchar(255) NOT NULL COMMENT 'OpenID',
  `apitoken` varchar(255) NOT NULL COMMENT 'API Token',
  `apisecret` varchar(255) NOT NULL COMMENT 'API Secret',
  `isopenip` tinyint(1) NOT NULL COMMENT '是否开启IP限制',
  `whiteip` varchar(255) NOT NULL COMMENT '白名单IP',
  `cartinfo` text NOT NULL COMMENT '购物车信息',
  `dnscartinfo` text NOT NULL COMMENT 'DNS购物车信息',
  `isopenapi` tinyint(1) NOT NULL COMMENT '是否开启API',
  `trusteeshipnum` int(20) NOT NULL COMMENT '托管数量',
  `isstandardprice` tinyint(1) NOT NULL COMMENT '是否标准价格',
  `openregcode` tinyint(1) NOT NULL COMMENT '是否开启注册码',
  `regcode` varchar(100) NOT NULL COMMENT '注册码',
  `relaregcode` varchar(255) NOT NULL COMMENT '关联注册码',
  `getkftarget` varchar(255) NOT NULL COMMENT '客服目标',
  `getyejitarget` varchar(255) NOT NULL COMMENT '业绩目标',
  `ispaiming` tinyint(1) NOT NULL COMMENT '是否排名',
  `getagentnum` varchar(255) NOT NULL COMMENT '代理数量',
  `changetime` int(20) NOT NULL COMMENT '变更时间',
  `freeze_funds` varchar(255) NOT NULL DEFAULT '0' COMMENT '冻结资金',
  `isexportsms` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否导出短信',
  `wechatpic` varchar(255) NOT NULL COMMENT '微信图片',
  `ctotalnum1` varchar(100) NOT NULL COMMENT '证书总数1',
  `ctotalnum6` varchar(100) NOT NULL COMMENT '证书总数6',
  `ctotalnum5` varchar(100) NOT NULL COMMENT '证书总数5',
  `ctotalnum11` varchar(100) NOT NULL COMMENT '证书总数11',
  `ctotalnum9` varchar(100) NOT NULL COMMENT '证书总数9',
  `ctotalnum8` varchar(100) NOT NULL COMMENT '证书总数8',
  `ctotalnum7` varchar(100) NOT NULL DEFAULT '0' COMMENT '证书总数7',
  `ctotalnum3` varchar(100) NOT NULL DEFAULT '0' COMMENT '证书总数3',
  `ctotalnum4` varchar(100) NOT NULL COMMENT '证书总数4',
  `firstappcode` varchar(10) NOT NULL COMMENT '首次申请码',
  `customer_acquisition` varchar(255) NOT NULL DEFAULT '0' COMMENT '客户获取',
  `customer_weight` varchar(255) NOT NULL DEFAULT '0' COMMENT '客户权重',
  `today_customernum` varchar(255) NOT NULL DEFAULT '0' COMMENT '今日客户数量',
  `isopencreditpay` tinyint(1) NOT NULL COMMENT '是否开启信用支付',
  `opencreditpaytime` int(20) NOT NULL COMMENT '开启信用支付时间',
  `teamid` tinyint(1) NOT NULL COMMENT '团队ID',
  `jointime` int(20) NOT NULL COMMENT '加入时间',
  `standardofmoney` varchar(255) NOT NULL COMMENT '金额标准',
  `overtimemoney` varchar(255) NOT NULL COMMENT '超时金额',
  `allocation_charge` varchar(255) NOT NULL COMMENT '分配费用',
  `telmktregcode` text NOT NULL COMMENT '电话营销注册码',
  `noticepaperuid` int(10) NOT NULL COMMENT '公告用户ID',
  PRIMARY KEY (`id`),
  KEY `amobile` (`amobile`) USING BTREE,
  KEY `id` (`id`) USING BTREE,
  KEY `idx_joy_user_role_addtime` (`arole`,`addtime`)
) ENGINE=MyISAM AUTO_INCREMENT=30612 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_user_field
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_user_field` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `isrealname` tinyint(1) NOT NULL COMMENT '是否实名',
  `realname` varchar(255) NOT NULL COMMENT '真实姓名',
  `realphone` varchar(255) NOT NULL COMMENT '真实电话',
  `card` varchar(255) NOT NULL COMMENT '身份证号',
  `cardpic1` varchar(255) NOT NULL COMMENT '身份证正面',
  `cardpic2` varchar(255) NOT NULL COMMENT '身份证反面',
  `company` varchar(255) NOT NULL COMMENT '公司',
  `taxpayercode` varchar(255) NOT NULL COMMENT '纳税人识别号',
  `bank` varchar(255) NOT NULL COMMENT '银行',
  `b_account` varchar(255) NOT NULL COMMENT '银行账号',
  `regplace` varchar(255) NOT NULL COMMENT '注册地址',
  `regphone` varchar(255) NOT NULL COMMENT '注册电话',
  `licensepic` varchar(255) NOT NULL COMMENT '营业执照',
  `powerbookpic` varchar(255) NOT NULL COMMENT '授权书',
  `isrenzheng` tinyint(1) NOT NULL COMMENT '是否认证',
  `isshenghe` tinyint(1) NOT NULL COMMENT '是否审核',
  `renzhengstate` tinyint(1) NOT NULL COMMENT '认证状态',
  `isfenpei` tinyint(1) NOT NULL COMMENT '是否分配',
  `reviewer` int(10) NOT NULL COMMENT '审核员',
  `realnametime` int(20) NOT NULL COMMENT '实名时间',
  `maindomain` varchar(255) NOT NULL COMMENT '主域名',
  `audittime` int(20) NOT NULL COMMENT '审核时间',
  `baobeitime` int(20) NOT NULL COMMENT '报备时间',
  `rejectinfo` text NOT NULL COMMENT '拒绝原因',
  `isopenchannel` tinyint(1) NOT NULL COMMENT '是否开通渠道',
  `isopenfreechannelpack` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否开通免费渠道包',
  `historycid` varchar(255) NOT NULL COMMENT '历史客户ID',
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=30530 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_verifylog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_verifylog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `activeid` varchar(255) NOT NULL COMMENT '证书ID',
  `domain` varchar(255) NOT NULL COMMENT '域名',
  `nsispass` tinyint(1) NOT NULL COMMENT 'NS验证是否通过',
  `caaispass` tinyint(1) NOT NULL COMMENT 'CAA验证是否通过',
  `dnsispass` tinyint(1) NOT NULL COMMENT 'DNS验证是否通过',
  `changetime` int(20) NOT NULL COMMENT '变更时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12343 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_weixinlog
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_weixinlog` (
  `id` int(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `openid` varchar(255) NOT NULL COMMENT 'OpenID',
  `nickname` varchar(255) NOT NULL COMMENT '昵称',
  `is_first` int(1) NOT NULL COMMENT '是否首次',
  `headimg` varchar(255) NOT NULL COMMENT '头像',
  `logintime` int(20) NOT NULL COMMENT '登录时间',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3424063 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_weixintoken
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_weixintoken` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `access_token` varchar(200) NOT NULL COMMENT '访问令牌',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  `ipaddress` varchar(100) NOT NULL COMMENT 'IP地址',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_workorder
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_workorder` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `wdid` varchar(255) NOT NULL COMMENT '工单ID',
  `uid` int(10) NOT NULL COMMENT '用户ID',
  `cid` int(10) NOT NULL COMMENT '客户ID',
  `proid` tinyint(1) NOT NULL COMMENT '产品ID',
  `workorderflid` tinyint(1) NOT NULL COMMENT '工单分类ID',
  `relauid` int(10) NOT NULL COMMENT '关联用户ID',
  `content` text NOT NULL COMMENT '内容',
  `litpic` text NOT NULL COMMENT '缩略图',
  `domain` varchar(255) NOT NULL COMMENT '域名',
  `gdstate` tinyint(1) NOT NULL COMMENT '工单状态',
  `isnew` tinyint(1) NOT NULL COMMENT '是否新建',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=566 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for joy_workorder_field
-- ----------------------------
CREATE TABLE IF NOT EXISTS `joy_workorder_field` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `wdid` varchar(255) NOT NULL COMMENT '工单ID',
  `content` text NOT NULL COMMENT '内容',
  `senduid` int(10) NOT NULL COMMENT '发送用户ID',
  `litpic` text NOT NULL COMMENT '缩略图',
  `crole` tinyint(1) NOT NULL COMMENT '角色',
  `addtime` int(20) NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1791 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Restore foreign key checks
-- ----------------------------
SET FOREIGN_KEY_CHECKS = 1;