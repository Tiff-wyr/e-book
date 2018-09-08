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
    font:40,
    catalog:[],
    show:false,
    jumpId:""
  },


  onLoad: function (options) {
  // console.log("阅读书籍",options)
  console.log("jump",options.jump)
//bokid 是这本书的id
    this.setData({
      isLoading: true,
    
    })
    this.getCataDetail(options.id)
      this.getCatalog(options.bookId)
    this.readFirst(options.read)
  
  },

getCataDetail(id){
      fetch.get(`/article/${id}`).then(res=>{
        console.log("阅读书", res)
        this.setData({
          isLoading: false,
          md: res.data.article.content,
          show:false
         
        })

      })
},

getCatalog(id){
  fetch.get(`/titles/${id}`).then(res => {
    console.log("目录",res)
    this.setData({
      catalog: res.data,
    
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

},

readFirst(id){
        
  fetch.get(`/titles/${id}`).then(res => {
    console.log("目录数组第一个前言",res.data[0])
    this.getCataDetail(res.data[0]._id)
  

  })

},
  before(){

  },
  after(){

  },
click(){
    this.setData({
      show:!this.data.show
    })
},
  jumping(event){
    const id = event.currentTarget.dataset.pp
                this.setData({
                  jumpId: id          
                })
      this.getCataDetail(id)
      
  }
})