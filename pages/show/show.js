// pages/show/show.js
const app = getApp()

Page({
  /**
   * Page initial data
   */
  data: {

    bannerImages: ['https://images.pexels.com/photos/305250/pexels-photo-305250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/305250/pexels-photo-305250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/305250/pexels-photo-305250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/305250/pexels-photo-305250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'],
    autoplay: false,
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }]
   
  },

  
  /* Share Function */
  onShareAppMessage: function () {
    return {
      title: 'Skate City | Go Skate',
      path: 'pages/show/show'
    }
  },

  onShareAppMessage: function () {
    console.log('share')
    wx.showShareMenu({
      withShareTicket: true
    })

    spot: { }

  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log("OPTIONS",options)
    let page = this
    wx.request({
      // url: 'http://skatecity.wogengapp.cn/api/v1/show/',
      url: 'http://localhost:3000/api/v1/spots/'+ options.id,
      method: 'GET',
      success(res) {
        console.log("Data received", res)
        const spot = res.data.spot;
        // Update local data
        page.setData({
          spot: spot
        });
        wx.hideToast();

      }

    });

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }, 

  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  }

})