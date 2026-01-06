// 账号信息数据类型定义

// 站点健康状态
export type SiteHealthStatus = "healthy" | "warning" | "error" | "unknown"

// 账号基础信息
export interface AccountInfo {
  id: number // 账号 ID（整数）
  access_token: string
  username: string
  quota: number // 总余额点数
  today_prompt_tokens: number // 今日 prompt_tokens
  today_completion_tokens: number // 今日 completion_tokens
  today_quota_consumption: number // 今日消耗 quota
  today_requests_count: number // 今日请求次数
}

// 站点账号完整信息
export interface SiteAccount {
  id: string
  emoji: string
  site_name: string
  site_url: string
  health_status: SiteHealthStatus
  exchange_rate: number
  account_info: AccountInfo
  last_sync_time: number
  lastSignInDate?: number
  updated_at: number
  created_at: number
}

// 存储配置
export interface StorageConfig {
  accounts: SiteAccount[]
  last_updated: number
}

// 账号统计信息 (用于展示)
export interface AccountStats {
  total_quota: number
  today_total_consumption: number
  today_total_requests: number
  today_total_prompt_tokens: number
  today_total_completion_tokens: number
}

// API 响应相关类型
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
}

// 用于排序的字段类型
export type SortField =
  | "site_name"
  | "quota"
  | "today_quota_consumption"
  | "last_sync_time"
export type SortOrder = "asc" | "desc"

// 货币类型
export type CurrencyType = "USD" | "CNY"

// 展示用的站点数据 (兼容当前 UI)
export interface DisplaySiteData {
  id: string
  icon: string
  name: string
  username: string
  balance: { USD: number; CNY: number }
  todayConsumption: { USD: number; CNY: number }
  todayTokens: { upload: number; download: number }
  healthStatus?: SiteHealthStatus
  baseUrl: string
  token: string
  userId: number
  signedToday?: boolean
}
