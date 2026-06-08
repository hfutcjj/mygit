package utils

import (
	"crypto/md5"
	"encoding/hex"
	"math/rand"
	"time"
)

// MD5加密, 生成32位小写16进制字符串
func MD5(str string) string {
	h := md5.New()
	h.Write([]byte(str))
	return hex.EncodeToString(h.Sum(nil))
}

// 生成随机字符串
func RandStr(n int) string {
	const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	b := make([]byte, n)
	for i := range b {
		b[i] = letters[rand.Intn(len(letters))]
	}
	return string(b)
}

// 生成实例编号
func GenerateInstanceNo() string {
	return "INS" + time.Now().Format("20060102150405") + RandStr(4)
}

// 获取当前时间戳
func Timestamp() int64 {
	return time.Now().Unix()
}
