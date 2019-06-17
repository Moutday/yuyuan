// pages/index/index.js
const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 400,
    scrollData: {
      indicatorDots: true,
      autoplay: true,
      interval: 4000,
      duration: 1200,
      imgUrls: [
        '/assets/images/1.jpg',
        '/assets/images/2.jpg',
        '/assets/images/3.jpg',
        '/assets/images/4.jpg',
        '/assets/images/5.jpg',
        '/assets/images/6.jpg',
        '/assets/images/7.jpg',
        '/assets/images/8.jpg',
        '/assets/images/9.jpg',
        '/assets/images/10.jpg',
      ],
    },
  },
  
 


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
   
  
  },
  onHide:function(){
  },

  



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    
  },

  onReady() {
   
  },

  
  toPhone(){
    wx.makePhoneCall({
      phoneNumber: '000000' // 仅为示例，并非真实的电话号码
    })
  },
  
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
 
  
})