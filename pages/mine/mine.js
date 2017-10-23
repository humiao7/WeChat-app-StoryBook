//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    }
  },
  //登陆
  getUserInfo: function (e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //注销
  logOut: function () {
    this.setData({
      userInfo: {},
      hasUserInfo: false,
      globalData: null
    }),
      getApp().globalData.userInfo = null;
    console.log(app.globalData.userInfo);
  },
  //联系我们
  contactUs: function () {
    wx.makePhoneCall({
      phoneNumber: '17688893619' //仅为示例，并非真实的电话号码
    })
  },
  clearCache: function () {
    wx.showModal({
      content: '清除所有数据？',
      success: function (res) {
        if (res.confirm) {
          wx.removeStorage({
            key: 'storys',
            success: function (res) {
              wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000
              });
              wx.setStorageSync('storys', []);
            }
          });
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
