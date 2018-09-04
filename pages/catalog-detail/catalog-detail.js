// pages/catalog-detail/catalog-detail.js
import { fetch } from "../../utils/util.js"


const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

    article:{},
    isLoading:false
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
        console.log(res)
        let data = app.towxml.toJson(res.data.article.content, 'markdown');

       
        this.setData({    
          article: data,
          isLoading: false
        })
      })
}
})