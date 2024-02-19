let index = 0;
const polylineCases = [
  {
    id: index++,
    title: 'polyline，只设置1个坐标点，只设置color，不显示路线',
    data: [
      {
        points: [{ latitude: 39.925792, longitude: 116.453336 }],
        color: '#66CC00'
      }
    ]
  },

  {
    id: index++,
    title: 'polyline，设置2个坐标点，只设置color，路线显示正确',
    data: [
      {
        points: [
          { latitude: 39.925792, longitude: 116.453336 },
          { latitude: 39.91865, longitude: 116.458958 }
        ],
        color: '#66CC00'
      }
    ]
  },
  {
    id: index++,
    title: 'polyline，设置多个坐标点，只设置color，，路线显示正确',
    data: [
      {
        points: [
          { latitude: 39.923077, longitude: 116.451598 },
          { latitude: 39.923291, longitude: 116.452606 },
          { latitude: 39.923324, longitude: 116.454259 },
          { latitude: 39.923307, longitude: 116.455611 },
          { latitude: 39.923258, longitude: 116.457649 }
        ],
        color: '#66CC00'
      }
    ]
  },
  {
    id: index++,
    title: 'polyline，设置多个坐标点，设置的colorList长度小于points.length - 1，路线显示正确',
    data: [
      {
        points: [
          { latitude: 39.923077, longitude: 116.451598 },
          { latitude: 39.923291, longitude: 116.452606 },
          { latitude: 39.923324, longitude: 116.454259 },
          { latitude: 39.923307, longitude: 116.455611 },
          { latitude: 39.923258, longitude: 116.457649 }
        ],
        colorList: ['#FF0000', '#00FF00', '#0000FF']
      }
    ]
  },
  {
    id: index++,
    title: 'polyline，设置多个坐标点，设置的colorList大于points.length - 1，路线显示正确',
    data: [
      {
        points: [
          { latitude: 39.923077, longitude: 116.451598 },
          { latitude: 39.923291, longitude: 116.452606 },
          { latitude: 39.923324, longitude: 116.454259 },
          { latitude: 39.923307, longitude: 116.455611 },
          { latitude: 39.923258, longitude: 116.457649 }
        ],
        colorList: ['#FF0000', '#00FF00', '#0000FF', '#ff00ff', '#FFCC33']
      }
    ]
  },

  {
    id: index++,
    title: 'polyline，设置多个坐标点，设置的colorList中有重复的颜色，路线显示正确',
    data: [
      {
        points: [
          { latitude: 39.923077, longitude: 116.451598 },
          { latitude: 39.923291, longitude: 116.452606 },
          { latitude: 39.923324, longitude: 116.454259 },
          { latitude: 39.923307, longitude: 116.455611 },
          { latitude: 39.923258, longitude: 116.457649 }
        ],
        colorList: ['#FF0000', '#00FF00', '#FF0000', '#ff00ff', '#FFCC33']
      }
    ]
  },
  {
    id: index++,
    title: 'polyline，设置多个坐标点，同时设置color和colorList，路线显示正确',
    data: [
      {
        points: [
          { latitude: 39.923077, longitude: 116.451598 },
          { latitude: 39.923291, longitude: 116.452606 },
          { latitude: 39.923324, longitude: 116.454259 },
          { latitude: 39.923307, longitude: 116.455611 },
          { latitude: 39.923258, longitude: 116.457649 }
        ],
        color: '#0000FF',
        colorList: ['#FF0000', '#00FF00', '#0000FF', '#ff00ff', '#FFCC33']
      }
    ]
  },
  {
    id: index++,
    title: 'polyline，设置width，线的宽度显示正确',
    data: [
      {
        points: [
          { latitude: 39.922312, longitude: 116.450396 },
          { latitude: 39.920271, longitude: 116.450386 },
          { latitude: 39.918996, longitude: 116.450353 },
          { latitude: 39.917992, longitude: 116.450353 }
        ],
        color: '#0000FF',
        colorList: ['#FF0000', '#00FF00', '#0000FF', '#ff00ff', '#FFCC33'],
        width: 10
      }
    ]
  },
  {
    id: index++,
    title: 'polyline，不设置width，使用默认宽度',
    data: [
      {
        points: [
          { latitude: 39.923077, longitude: 116.451598 },
          { latitude: 39.923291, longitude: 116.452606 },
          { latitude: 39.923324, longitude: 116.454259 },
          { latitude: 39.923307, longitude: 116.455611 },
          { latitude: 39.923258, longitude: 116.457649 }
        ],
        color: '#66CC00'
      }
    ]
  },
  {
    id: index++,
    title: 'polyline，可设置多条路线',
    data: [
      {
        points: [
          { latitude: 39.923077, longitude: 116.451598 },
          { latitude: 39.923291, longitude: 116.452606 },
          { latitude: 39.923324, longitude: 116.454259 },
          { latitude: 39.923307, longitude: 116.455611 },
          { latitude: 39.923258, longitude: 116.457649 }
        ],
        color: '#0000FF',
        colorList: ['#FF0000', '#00FF00', '#0000FF', '#ff00ff', '#FFCC33'],
        width: 5
      },
      {
        points: [
          { latitude: 39.922312, longitude: 116.450396 },
          { latitude: 39.920271, longitude: 116.450386 },
          { latitude: 39.918996, longitude: 116.450353 },
          { latitude: 39.917992, longitude: 116.450353 }
        ],
        color: '#0000FF',
        colorList: ['#FF0000', '#00FF00', '#0000FF', '#ff00ff', '#FFCC33'],
        width: 10
      }
    ]
  },
  {
    id: index++,
    title: 'polyline，设置2个坐标点，不设置color和colorList，color取默认值黑色',
    data: [
      {
        points: [
          { latitude: 39.925792, longitude: 116.453336 },
          { latitude: 39.91865, longitude: 116.458958 }
        ]
      }
    ]
  }
];

exports.polylineCases = polylineCases;
