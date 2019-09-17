// pages/home/home.js
import {
  getData
} from '../../service/public.js'
import{
  baseURL
} from '../../service/config.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    webUrl: baseURL,
    //首页导航
    navList:[],
    //轮播图片
    bannerList:[],
    //文章数据
    articleList:[],
    typeid:0,
    page:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.导航
    this._navList()
    //2.请求轮播图
    this._banner()
    //3.文章
    this._article()
    //
    //console.log(ar_id)
  },
  //导航
  _navList(){
    getData('/wxapi').then(res => {
      const navList = res.data.data;
      this.setData({
        navList: navList,
      })
    })
  },
  //轮播图
  _banner(){
    getData('/wxapi/banner').then(res => {
      const bannerList = res.data.data;
      this.setData({
        bannerList: bannerList,
      })
    })
  },
  //文章
  _article(){
    let that = this;
    const typeid = that.data.typeid;
    const  page = that.data.page+1;
    getData('/wxapi/article', typeid, page).then(res => {
      const art = res.data.list;
      const oldlist = that.data.articleList;
      oldlist.push(...art);
      //console.log(oldlist);
      this.setData({
        articleList: oldlist,
        typeid:typeid,
        page:page
      })
    })
  },

  //点击菜单事件监听
  handleTabClick(a){
    //取出id
    let that = this;
    const id = a.detail;
    const pg = 0;
    const page = pg+1;
    getData('/wxapi/article', id, page).then(res => {
      const art = res.data.list;
      const oldlist = that.data.articleLis;
      //oldlist.push(...art)
      this.setData({
        articleList: art,
        typeid:id,
        page:page
      })
    })
    console.log(id);
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
    this._article()
    //console.log('到底啦。。。')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})