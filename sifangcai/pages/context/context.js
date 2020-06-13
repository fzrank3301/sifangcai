// pages/context/context.js

const foodlist = require("../../food.js");
var PageID = null;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    msinfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.foodid)
    PageID = options.foodid;
    this.setData({
      msinfo: foodlist.foodlist
    })
    console.log(this.data.msinfo);
    this.setData({
      msinfo: this.data.msinfo.list[PageID-1]
    })
    console.log(this.data.msinfo)
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