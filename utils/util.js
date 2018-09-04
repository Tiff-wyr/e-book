const baseUrl ="https://m.yaojunrong.com"

const fetch={
  http(url,method,data){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseUrl + url,
      method,
      data,
      header: {
        "content-type": "application/json"
      },
      success(res) {
        resolve(res.data)
      },
      fail(err){
        reject(err)
      }

    })
  })
  },
  get(url,method,data){
    return this.http(url,'GET',data)
  }
}

exports.fetch=fetch;
