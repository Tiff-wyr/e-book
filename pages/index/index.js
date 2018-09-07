//index.js
//获取应用实例
const app = getApp()
import {fetch,login} from "../../utils/util.js"


Page({

  data: {
    imgUrls: [ ],
    mainCon:[],
    loading:false,
    show:true,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    pn:1,
    hasMore:true
    },
    onLoad(){
      login();
      this.getData();
      this.getCon()
    },
    getData(){

      return new Promise((resolve,reject)=>{
        fetch.get('/swiper').then(res => {
          this.setData({
            imgUrls: res.data
          })
        })
      
      })
    }
       ,

    getCon(){

      return new Promise((resolve,reject)=>{
        fetch.get('/category/books').then(res => {
          this.setData({
            mainCon: res.data
          })
        })
      })
  
  },
  getMore(){
    return new Promise((resolve) => {
      fetch.get(`/category/books?pn=${this.data.pn}`
   ).then(res => {
let newArr=[...this.data.mainCon,...res.data]
        this.setData({
          mainCon: newArr  
        })
        resolve(res)
      })
    })
  },

  jump(event){
      wx.navigateTo({
        url: `/pages/detail/detail?id=${event.currentTarget.dataset.id}&type=${event.currentTarget.dataset.type}`,
      })
  },
  onPullDownRefresh(){
    Promise.all([this.getData(),this.getCon()]).then(()=>{
      wx.stopPullDownRefresh();
    })
  },
  onReachBottom(){
    if(this.data.hasMore){
      this.setData({
        pn:this.data.pn+1,
        loading:true,
        show:false
      })
    }
        this.getMore().then(res=>{
       if(res.data.length<2){
         this.setData({
           hasMore:false,
           loading:false
         })
       }
        })
  }
    
 
  
})
