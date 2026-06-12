package jwt

import (
	"errors"
	"joyssl-auto/pkg/config"
	"joyssl-auto/pkg/logger"
	"joyssl-auto/pkg/utils"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"go.uber.org/zap"
)

type CustomClaims struct {
	jwt.RegisteredClaims
}

// GenerateToken 生成Token
func GenerateToken() (string, error) {
	cfg := config.AppConfig.JWT

	claims := &CustomClaims{
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(time.Duration(cfg.ExpireHours) * time.Hour)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			NotBefore: jwt.NewNumericDate(time.Now()),
			Issuer:    "joyssl-auto",
			ID:        generateTokenID(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString([]byte(cfg.Secret))
	if err != nil {
		logger.Log.Error("生成Token失败", zap.Error(err))
		return "", err
	}

	return tokenString, nil
}

// ValidateToken 验证Token
func ValidateToken(tokenString string) error {
	if tokenString == "" {
		return errors.New("Token不能为空")
	}

	cfg := config.AppConfig.JWT

	token, err := jwt.ParseWithClaims(tokenString, &CustomClaims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("无效的签名方法")
		}
		return []byte(cfg.Secret), nil
	})

	if err != nil {
		if errors.Is(err, jwt.ErrTokenExpired) {
			return errors.New("Token已过期")
		}
		return errors.New("无效的Token")
	}

	if !token.Valid {
		return errors.New("无效的Token")
	}

	return nil
}

func generateTokenID() string {
	return time.Now().Format("20060102150405") + utils.RandStr(8)
}
