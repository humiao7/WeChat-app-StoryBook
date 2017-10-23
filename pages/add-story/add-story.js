// pages/add-story/add-story.js
var util = require('../../utils/util.js');
var new_title = '';
var new_content = '';

Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  titleKeyInput: function (e) {
    this.setData({
      new_title: e.detail.value
    })
  },
  contentKeyInput: function (e) {
    this.setData({
      new_content: e.detail.value
    })
  },
  commitStory: function (e) {
    var that = this;
    if (that.data.new_title == undefined || that.data.new_title == '') {
      wx.showModal({
        content: '请输入标题',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
    else {
      var storys = wx.getStorageSync('storys');
      var new_story = { 'title': that.data.new_title, 'content': that.data.new_content, 'created_date': that.data.edit_time };
      storys.push(new_story);
      console.log(storys);
      wx.setStorageSync('storys', storys);
      wx.navigateBack({
        delta: 1
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var time = util.formatTime(new Date());
    this.setData({
      edit_time: time
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.setData({
      header: '',
      body: ''
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})