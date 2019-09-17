// pages/articleList/list.js
import {
  getData
} from '../../service/public.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //首页导航
    navList: [],
    //文章数据
    articleList: [],
    cat_id:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.导航
    this._navList()
    //2.文章
    this._article()
    //文章分类id
    let id = options.id
    console.log(id)
    this.setData({
      cat_id:id
    })
  },

  //导航
  _navList() {
    getData('/wxapi').then(res => {
      const navList = res.data.data;
      this.setData({
        navList: navList,
      })
    })
  },

  //文章
  _article() {
    getData('/wxapi/article').then(res => {
      const art = res.data.list;
      this.setData({
        articleList: art,
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