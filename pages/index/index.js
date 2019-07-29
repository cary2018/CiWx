Page({

  /**
   * 页面的初始数据
   */
  data: {
    //服务器地址
    webUrl:'https://www.889sw.com',
    //被点击的导航菜单索引
    indexNav:0,
    //首页导航
    navList:[],
    //轮播图片
    bannerList:[],
    //文章数据
    articleList:[]
  },

  //点击导航菜单按钮
  clickNav(e){
    this.setData({
      indexNav:e.target.dataset.index
    })
  },

  //获取菜单导航信息
  getNavList(){
    let that = this;
    //利用小程序内置发送请求方法
    wx.request({
      url: 'https://www.889sw.com/wxapi',
      success(res){
        //console.log(res);
        if(res.data.code == 1000){
          that.setData({
            navList:res.data.data
          })
        }
      }
    })
  },

  //获取轮播图片
  getBanner(){
    let that = this;
    wx.request({
      url: 'https://www.889sw.com/wxapi/banner',
      success(res){
        //console.log(res);
        if(res.data.code==1000){
          that.setData({
            bannerList:res.data.data
          })
        }
      }
    })
  },

  //获取文章数据
  getArticle(){
    let that = this;
    wx.request({
      url: 'https://www.889sw.com/wxapi/article',
      success(res){
        if(res.data.code=1000){
          that.setData({
            articleList:res.data.list
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取导航数据
    this.getNavList();
    //加载轮播图片
    this.getBanner();
    //加载文章
    this.getArticle();
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
    console.log('到底啦。。。')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})