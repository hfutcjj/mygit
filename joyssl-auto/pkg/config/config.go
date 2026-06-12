package config

import (
	"log"

	"github.com/spf13/viper"
)

type Config struct {
	Server      ServerConfig
	Database    DatabaseConfig
	PHPDatabase PHPDatabaseConfig `mapstructure:"php_database"`
	Redis       RedisConfig
	Log         LogConfig
	PHPAPI      PHPAPIConfig `mapstructure:"php_api"`
	JWT         JWTConfig
}

type ServerConfig struct {
	Port string
	Mode string
}

type DatabaseConfig struct {
	Host         string
	Port         int
	Username     string
	Password     string
	Database     string
	Charset      string
	MaxIdleConns int `mapstructure:"max_idle_conns"`
	MaxOpenConns int `mapstructure:"max_open_conns"`
}

type PHPDatabaseConfig struct {
	Host         string
	Port         int
	Username     string
	Password     string
	Database     string
	Charset      string
	MaxIdleConns int `mapstructure:"max_idle_conns"`
	MaxOpenConns int `mapstructure:"max_open_conns"`
}

type RedisConfig struct {
	Host     string
	Port     int
	Password string
	DB       int
}

type LogConfig struct {
	Level      string
	Filename   string
	MaxSize    int `mapstructure:"max_size"`
	MaxBackups int `mapstructure:"max_backups"`
	MaxAge     int `mapstructure:"max_age"`
}

type PHPAPIConfig struct {
	BaseURL string `mapstructure:"base_url"`
	Timeout int
}

type JWTConfig struct {
	Secret      string
	ExpireHours int `mapstructure:"expire_hours"`
}

var AppConfig *Config

func Init() {
	viper.SetConfigName("config")
	viper.SetConfigType("yaml")
	viper.AddConfigPath("./config")
	viper.AddConfigPath(".")

	if err := viper.ReadInConfig(); err != nil {
		log.Fatalf("读取配置文件失败: %v", err)
	}

	AppConfig = &Config{}
	if err := viper.Unmarshal(AppConfig); err != nil {
		log.Fatalf("解析配置文件失败: %v", err)
	}

}
