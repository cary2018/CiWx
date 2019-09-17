// list/list.js
import{
  baseURL
} from '../../service/config.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    article:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    webURL:baseURL
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
