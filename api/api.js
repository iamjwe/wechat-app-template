import http from "./http.js" //这里踩了一次默认暴露和分别暴露的亏。

let base = "" // 待更改为ip地址

export const testPost = param => {
  return http.post("https://aimianshiguan.com/znzp/open/downYuyin.shtml", param)
}
export const testGet = param => {
  return http.get("https://aimianshiguan.com/znzp/open/downYuyin.shtml", param)
}