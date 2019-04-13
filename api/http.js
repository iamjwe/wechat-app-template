export default {
  post: function (url, data) {
    let promise = new Promise((resolve, reject) => {
      //网络请求
      wx.request({
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        url: url,
        data: data,
        method: "POST",
        success: function (res) { //服务器返回数据
          if (res.code == 200) {
            resolve(res);
          } else { //返回错误提示信息
            reject(res.data);
          }
        },
        error: function (e) {
          reject('网络出错');
        }
      })
    });
    return promise;
  },
  get: function (url, data) {
    let promise = new Promise((resolve, reject) => {
      //网络请求
      wx.request({
        url: url,
        header: {
          'content-type': 'application/json'
        },
        success: function (res) { //服务器返回数据
          if (res.code == 200) {
            resolve(res);
          } else { //返回错误提示信息
            reject(res.data);
          }
        },
        error: function (e) {
          reject('网络出错');
        }
      })
    });
    return promise;
  },
}
