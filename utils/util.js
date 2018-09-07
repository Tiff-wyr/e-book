const baseUrl ="https://m.yaojunrong.com"

const fetch={
  http(url,method,data){
    let token = wx.getStorageSync('token')
    let header = {
      "content-type": "application/json",
      'token': token
    }
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseUrl + url,
      method,
      data,
      header,
      success(res) {
        if(res.header.Token || res.data.token){
          wx.setStorageSync('token', res.header.Token || res.data.token)
        }
        resolve(res.data)
      },
      fail(err){
        reject(err)
      }

    })
  })
  },
  get(url,data){
    return this.http(url,'GET',data)
  },
  post(url, data) {
    return this.http(url, 'POST', data)
  }
}

const login=()=>{
  wx.login({
    success(res){
      if(res.code){
        fetch.post('/login', {
          code: res.code,
          appid: "wxc140647c1dc70030",
          secret: "503b99a6cad5a5f98d0567df6fafce21"
        }).then(res => {
        })
      }
    }
  })
}

exports.fetch=fetch;
exports.login = login;

