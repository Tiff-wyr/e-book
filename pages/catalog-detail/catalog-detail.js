// pages/catalog-detail/catalog-detail.js
import { fetch } from "../../utils/util.js"


const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:false,
    md:"",
    font:40
  },


  onLoad: function (options) {
    this.setData({
      isLoading: true
    })
    this.getCataDetail(options.id)
    console.log(options.id)  
  },

getCataDetail(id){
      fetch.get(`/article/${id}`).then(res=>{
        this.setData({
          isLoading: false,
          md: res.data.article.content
        })

      })
},
add(){

  if(this.data.font>60){
  wx.showToast({
    title: '字体太大',
    duration:1000
  })
  }else{
    this.setData({
      font: this.data.font + 2
    })
  }
},
sub(){
          if(this.data.font<24){
            wx.showToast({
              title: '字体太小',
              duration: 1000
            })
          }else{
            this.setData({
              font: this.data.font - 2
            })
          }

}
})