//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showData: []

    /*listInfo: ['说明文字信息1', '说明文字信息2', '说明文字信息3', '说明文字信息4', '说明文字信息5', '说明文字信息6', '说明文字信息7', '说明文字信息8']*/
  },
  //页面初始化
  onLoad: function () {

  },
  //页面显示
  onShow: function () {
    var listInfo = wx.getStorageSync('storys');
    console.log(listInfo);
    this.setData({
      showData: listInfo
    })
  }
})
