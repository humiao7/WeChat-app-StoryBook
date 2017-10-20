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
    var storys = wx.getStorageSync('storys');
    var new_story = { 'title': that.data.new_title, 'content': that.data.new_content, 'created_date': that.data.edit_time };
    storys.push(new_story);
    console.log(storys);
    wx.setStorageSync('storys', storys);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间  
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      edit_time: time
    });
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