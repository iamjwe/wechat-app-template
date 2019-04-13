const dtime = '_deadtime';
function put(k, v, t) {
  wx.setStorageSync(k, v)
   //时效性存储
  let validTime = parseInt(t)
  if (validTime > 0) {
    wx.setStorageSync(k + dtime, Date.parse(new Date()) / 1000 + validTime + "")
  } else {
    wx.removeStorageSync(k + dtime)
  }
}

function get(k, defaultValue) {
  let deadtime = parseInt(wx.getStorageSync(k + dtime))
  //如果设置了过期时间，并且过期了
  if (deadtime && deadtime < Date.parse(new Date()) / 1000) {
      return defaultValue
  }
  let res = wx.getStorageSync(k);
  return res ? res : defaultValue
}

function remove(k) {
  wx.removeStorageSync(k);
  wx.removeStorageSync(k + dtime);
}

function clear() {
  wx.clearStorageSync();
}

export {put,get,remove,clear}