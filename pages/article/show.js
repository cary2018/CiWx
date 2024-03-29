// pages/article/show.js
var WxParse = require('../../components/wxParse/wxParse.js');
import{
  getData
} from '../../service/public.js';
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    let id = options.id;
    getData('/wxapi/show?id=' + id).then(res => {
      const art = res.data.data;
      console.log(id);
      var article = res.data.data[0].ar_content;
      WxParse.wxParse('article', 'html', article, this, 5)
      this.setData({
        title: art[0].ar_title
      })
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