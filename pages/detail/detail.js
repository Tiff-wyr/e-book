// pages/detail/detail.js

const app = getApp()
import { fetch } from "../../utils/util.js"
Page({

  data: {
    detailUrl:{},
  },


  onLoad: function (options) {
   
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



  jump(event){
    console.log(event)
  wx.navigateTo({
    url: `/pages/catalog/catalog?look=${event.currentTarget.dataset.look}`,  
    })
  },
  onShareAppMessage(){
    
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  //收藏功能
 
  collect(){
    fetch.post('/collection',{
      bookId: this.data.detailUrl.data._id
    }).then(res=>{
        wx.showToast({
          title: res.msg,
          duration:1000
        })
      let detailUrl = { ...this.data.detailUrl, isCollect: 1 }
     this.setData({
      detailUrl: detailUrl
     })
 
    })
  },
  read(event){
    console.log(event)
      wx.navigateTo({
        url: `/pages/catalog-detail/catalog-detail?read=${event.currentTarget.dataset.read}`,
      })
  }

})