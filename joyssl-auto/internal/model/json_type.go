package model

import (
	"database/sql/driver"
	"encoding/json"
)

// JSONMap 对应MySQL JSON对象
type JSONMap map[string]any

// 写入数据库时, Go类型转JSON字符串
func (j JSONMap) Value() (driver.Value, error) {
	return json.Marshal(j)
}

// 读取数据库时, JSON字符串转Go类型
func (j *JSONMap) Scan(value any) error {
	bytes, ok := value.([]byte)
	if !ok {
		return nil
	}
	return json.Unmarshal(bytes, j)
}

// JSONArray 对应MySQL JSON数组
type JSONArray []string

func (j JSONArray) Value() (driver.Value, error) {
	return json.Marshal(j)
}

func (j *JSONArray) Scan(value any) error {
	bytes, ok := value.([]byte)
	if !ok {
		return nil
	}
	return json.Unmarshal(bytes, j)
}
