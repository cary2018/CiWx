// components/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    header:{
      type:Array,
      value:{}
    },
    cat_id:{
      type:String,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //被点击的导航菜单索引
    indexNav:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //点击导航菜单按钮
    clickNav:function(e) {
      var aid = e.currentTarget.id
      //console.log(aid)
      //设置最新的 index
      this.setData({
        indexNav: e.target.dataset.index
      })
      //发出时间
      const data = aid
      this.triggerEvent("tabclick",data,{})
    }
  }
})
