// pages/detail/detail.js

const app = getApp()
import { fetch } from "../../utils/util.js"
Page({

  data: {
    detailUrl:{}
  },


  onLoad: function (options) {
    console.log('详情options',options)
    this.getDetail(options.id)
    
  },

  getDetail(id){
    fetch.get(`/book/${id}`).then(res=>{
     console.log('书籍详情',res)
   this.setData({
     detailUrl: res

})
   })
  },

// getDe(id){
//   fetch.get(`/book/${id}`).then(res => {
//     console.log(res)
//     this.setData({
//       detailUrl: res.data

//     })
//   })
// }

  jump(event){
    console.log(event)
  wx.navigateTo({
    url: `/pages/catalog/catalog?id=${event.currentTarget.dataset.qq}`,
     
    })
  },
  onShareAppMessage(){
    
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})