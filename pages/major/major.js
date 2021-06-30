import common from "../../utils/public"
var navIdout=""
var pageNum=0
var navIdx=0

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navIdx:0,
    navId:0,
    ninHit:0,
    worklist:[],
    navlist: [],
    majorlist: [],
    onLoaded:false
  },

  //点击导航效果
  clickNav(res){
    wx.showLoading({
      title: '数据加载中',
      mask:true
    })
    var collegeId;
    if(res.currentTarget){
      collegeId = res.currentTarget.dataset.id
    }
    else collegeId = res
    this.setData({
      navIdx: collegeId-1
    })
    console.log(navIdx);
    // console.log(collegeId)
    this.getmajorlist(collegeId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.clickNav(1)
    this.getNavData()
    // this.getWinhit()
  },


  getNavData() {
    wx.request({
      url: 'https://www.fastmock.site/mock/46c6a9b0949862ed3239a76fa98badae/navbar/college',
      success: res => {
        this.setData({
          navlist: res.data
        })
      }
    })
  },
//根据学院id获取专业列表
  getmajorlist(id){
    wx.request({
      url: `https://www.fastmock.site/mock/46c6a9b0949862ed3239a76fa98badae/navbar/${id}`,
      success: res => {
        this.setData({
          majorlist: res.data
        })
        console.log(this.data.majorlist)
        wx.hideLoading()
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      worklist:[]
    })
    this.getWorkList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})