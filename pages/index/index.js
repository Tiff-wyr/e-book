//index.js
//获取应用实例
const app = getApp()
import {fetch} from "../../utils/util.js"


Page({

  data: {
    imgUrls: [ ],
    mainCon:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
    },
    onLoad(){
      this.getData();
      this.getCon()
    },
    getData(){
        fetch.get('/swiper').then(res=>{

          this.setData({
            imgUrls:res.data
          })
        })
    },

    getCon(){
    fetch.get('/category/books').then(res => {
      console.log(res)
      this.setData({
        mainCon: res.data
      })
    })
  }
    
 
  
})
