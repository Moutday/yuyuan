
App({
 


  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
   
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

 
  showErrToast(title, duration, image) {
    wx.showToast({
      title: title || "必选项未完全填完",
      image: image || '/assets/images/ic_cancel.png',
      duration: duration || 1500
    })
  },
  showToast(title, duration, image) {
    wx.showToast({
      title: title || "必选项未完全填完",
      duration: duration || 1500
    })
  },
  showModalTip(title, content, url, color) {
    wx.showModal({
      title: title || "必选项未完全填完",
      content: content || "必选项未完全填完",
      confirmColor: color || '#1AAD19',
      success: function (res) {
        if (res.confirm) {
          wx.switchTab({ url: url });
        }
      }
    })
  },

})
