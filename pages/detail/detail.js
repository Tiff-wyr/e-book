// pages/detail/detail.js

const app = getApp()
import { fetch } from "../../utils/util.js"
Page({

  data: {
    detailUrl:{}
  },


  onLoad: function (options) {
    detailUrl:{}
    if(options.type=="con"){
      this.getDe(options.id)
    }else

    this.getDetail(options.id)
    
  },

  getDetail(id){
   fetch.get(`/swiper/${id}`).then(res=>{
    console.log("ahhahah") 
     console.log(res.data)
   this.setData({
     detailUrl: res.data

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
  }
})