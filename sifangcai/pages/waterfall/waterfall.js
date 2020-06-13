//logs.js
const util = require('../../utils/util.js')
const foodlist = require("../../food.js");

Page({
  data: {
    listData: [
      {
      "title":"食堂里的大锅饭",
      "src":"/images/food/ms1.jpg",
      "desc":"随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms2.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms3.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms4.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms5.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms6.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms7.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms8.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms9.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms10.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms11.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms12.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms13.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms14.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms15.jpg",
        "desc": "随便写点啥"
      },
      {
        "title": "食堂里的大锅饭",
        "src": "/images/food/ms16.jpg",
        "desc": "随便写点啥"
      },
    ],
    foodlistData:{}
  },
  onLoad: function() {
    console.log(foodlist);
    this.setData({foodlistData:foodlist.foodlist})
  },
  jup:function(event){
   var src =  event.target.dataset.src;
  var id =  src.split("ms")[1].split(".")[0]
  console.log(src+ " + "+id);
    wx.redirectTo({
      url: '/pages/context/context?foodid='+ id,
    })
  }

})