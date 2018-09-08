// pages/catalog/catalog.js
import { fetch } from "../../utils/util.js"


const app = getApp()


Page({


  data: {
      catalog:[],
      isLoading:false,
      bookId : ''
  },


  onLoad: function (options) {
    var catalogId=options.look
    console.log("查看目录",options.look)
      this.setData({
        isLoading:true,
        bookId: catalogId
      })
        this.getCatalog(options.look)
  },

  getCatalog(id){
    fetch.get(`/titles/${id}`).then(res=>{
      console.log("目录",res.data)
      this.setData({
        catalog:res.data,
        isLoading:false
      })
    })
  },

  
  jump(event){

    wx.navigateTo({
      url: `/pages/catalog-detail/catalog-detail?id=${event.currentTarget.dataset.pp}&bookId=${this.data.bookId}`,
    })
  }
})