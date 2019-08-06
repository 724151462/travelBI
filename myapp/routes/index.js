var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/weather', function (req, res, next) {
  res.json(
    {
      data: {
        temp: '27~30',
        air: '良',
        wind: '微风'
      }
    })
});

router.get('/api/touristrate', function (req, res, next) {
  res.json(
    {
      data: [{
        place: '红光湖',
        num: '335'
      }, {
        place: '龙王湖',
        num: '310'
      },
      {
        place: '白云山',
        num: '135'
      },
      {
        place: '火龙果园',
        num: '300'
      },
      {
        place: '鼓山公园',
        num: '1500'
      },
      {
        place: '鼓尾山',
        num: '145'
      }]
    })
});

router.get('/api/generaldata', function (req, res, next) {
  res.json(
    {
      data: [{
        item: '今日游客人数',
        num: '335'
      }, {
        item: '今日售票数',
        num: '310'
      },
      {
        item: '民宿入住数',
        num: '135'
      },
      {
        item: '商品销售数',
        num: '300'
      },
      {
        item: 'xxxx数',
        num: '1500'
      },
      {
        item: '今日营业额',
        num: '145'
      }]
    })
});

router.get('/api/touristage', function (req, res, next) {
  res.json(
    {
      data: [{
        item: '0-20岁',
        detail: [
          { time: '周一', num: '335' },
          { time: '周二', num: '345' },
          { time: '周三', num: '355' },
          { time: '周四', num: '365' },
          { time: '周五', num: '385' },
          { time: '周六', num: '412' },
          { time: '周日', num: '395' }
        ]
      }, {
        item: '20-40岁',
        detail: [
          { time: '周一', num: '355' },
          { time: '周二', num: '375' },
          { time: '周三', num: '325' },
          { time: '周四', num: '345' },
          { time: '周五', num: '315' },
          { time: '周六', num: '432' },
          { time: '周日', num: '375' }
        ]
      },
      {
        item: '40-60岁',
        detail: [
          { time: '周一', num: '235' },
          { time: '周二', num: '245' },
          { time: '周三', num: '255' },
          { time: '周四', num: '265' },
          { time: '周五', num: '285' },
          { time: '周六', num: '212' },
          { time: '周日', num: '444' }
        ]
      }]
    })
});

router.get('/api/touristdate', function (req, res, next) {
  res.json(
    {
      data: [{
        item: '0-2天',
        num: '335'
      }, {
        item: '2-3天',
        num: '310'
      },
      {
        item: '3-4天',
        num: '135'
      },
      {
        item: '4-6天',
        num: '300'
      },
      {
        item: '7天以上',
        num: '1200'
      }]
    })
});

router.get('/api/touristfrequency', function (req, res, next) {
  res.json(
    {
      data: [{
        item: '1次',
        num: '335'
      }, {
        item: '2-3次',
        num: '310'
      },
      {
        item: '3-4次',
        num: '135'
      },
      {
        item: '4-5次',
        num: '300'
      },
      {
        item: '5次以上',
        num: '1200'
      }]
    })
});

router.get('/api/touristentertain', function (req, res, next) {
  res.json(
    {
      data: [{
        item: '1次',
        num: '700'
      }, {
        item: '2-3次',
        num: '500'
      },
      {
        item: '3-4次',
        num: '400'
      },
      {
        item: '4-5次',
        num: '300'
      },
      {
        item: '5次以上',
        num: '200'
      }]
    })
});

router.get('/api/todaydata', function (req, res, next) {
  res.json(
    {
      data: [{
        item: '00:00',
        num: '0'
      }, {
        item: '06:00',
        num: '200'
      },
      {
        item: '12:00',
        num: '400'
      },
      {
        item: '14:00',
        num: '500'
      },
      {
        item: '16:00',
        num: '400'
      },
      {
        item: '20:00',
        num: '600'
      },
      {
        item: '22:00',
        num: '500'
      }
      ]
    })
});

router.get('/api/touristgender', function (req, res, next) {
  res.json(
    {
      data: [
        {
          item: '男',
          detail: [
            { time: '一月', num: '355' },
            { time: '二月', num: '375' },
            { time: '三月', num: '325' },
            { time: '四月', num: '345' },
            { time: '五月', num: '315' },
            { time: '六月', num: '432' },
            { time: '七月', num: '375' }
          ]
        },
        {
          item: '女',
          detail: [
            { time: '一月', num: '235' },
            { time: '二月', num: '245' },
            { time: '三月', num: '255' },
            { time: '四月', num: '265' },
            { time: '五月', num: '285' },
            { time: '六月', num: '212' },
            { time: '七月', num: '444' }
          ]
        }]
    })
});

module.exports = router;    
