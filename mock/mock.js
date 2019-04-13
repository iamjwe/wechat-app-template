import Mock from "./dist/WxMock.js"
import { meetings } from './data/info.js'
export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    console.log("开启请求拦截");
    Mock.mock('https://aimianshiguan.com/znzp/open/downYuyin.shtml', {
      "code": 200,
      "meetings": meetings
    })
    Mock.mock('https://xxx.com/user/delete', {
      "code": 200,
      "message": "删除成功"
    })
  }
}