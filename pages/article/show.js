// pages/article/show.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleInfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let id = options.id;
    this.getArticle(id);
    wx.request({
      url: 'https://www.889sw.com/wxapi/show?id=' + id,
      success: function (res) {
        //console.log(res.data.data[0].ar_content);
        var article = res.data.data[0].ar_content;
        WxParse.wxParse('article', 'html', article, that, 5);
      }
    })
  },

  getArticle(articleId){
    let that = this;
    wx.request({
      url: 'https://www.889sw.com/wxapi/show?id='+articleId,
      success(res){
        //console.log(res);
        if (res.data.code == 1000) {
          that.setData({
            articleInfo: res.data.data,
          })
        }
      }
    })
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