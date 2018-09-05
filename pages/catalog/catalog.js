// pages/catalog/catalog.js
import { fetch } from "../../utils/util.js"


const app = getApp()


Page({


  data: {
      catalog:[],
      isLoading:false
  },


  onLoad: function (options) {
    console.log(options.id)
      this.setData({
        isLoading:true
      })
        this.getCatalog(options.id)
  },

  getCatalog(id){
    fetch.get(`/titles/${id}`).then(res=>{
      console.log(res)
      this.setData({
        catalog:res.data,
        isLoading:false
      })
    })
  },

  
  jump(event){
  //  console.log("www")
  //   console.log(event)
    wx.navigateTo({
      url: `/pages/catalog-detail/catalog-detail?id=${event.currentTarget.dataset.pp}`,
    })
  }
})