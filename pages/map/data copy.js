const mapProps = {
  // latitude: 39.911046,
  // longitude: 116.46591,
  markers: [
    {
      id: 1,
      iconPath: '../../images/location-1.png',
      title: '雍和宫',
      latitude: 39.89495,
      longitude: 116.37972,
      width: 25,
      height: 25
      // anchor: { x: 1, y: 1 },
    },
    {
      iconPath: '../../images/location-2.png',
      id: 2,
      title: '不知带',
      latitude: 39.90495,
      longitude: 116.38972,
      width: 20,
      height: 20
      // anchor: { x: 1, y: 1 },
    },
    {
      iconPath: '../../images/location-3.png',
      id: 3,
      title: '恭王府zhong问df`12!@#$%^&*()_+|}{":?><.,=-0/',
      latitude: 39.91865,
      longitude: 116.458958,
      width: 24,
      height: 24,
      anchor: { x: 0, y: 1 }
    },
    {
      iconPath: '../../images/location-4.png',
      title: '哈哈哈哈',
      id: 4,
      width: 24,
      height: 24,
      latitude: 39.907333,
      longitude: 116.459243
      // anchor: { x: 1, y: 1 },
    }
  ],
  circles: [
    // {
    //   latitude: 99,
    //   longitude: 188,
    //   radius: 50,
    //   color: '#87CEEB',
    //   fillColor: '#FF6600'
    // },
    {
      latitude: 39.92751726531695,
      longitude: 116.45641591408786,
      color: '#87CEEB',
      fillColor: '#FF6600',
      radius: 100,
      strokeWidth: 20
    }
    // {
    //   latitude: 99,
    //   longitude: 188,
    //   radius: 50,
    //   color: '#9900CC',
    // },
    // {
    //   // latitude: 39.91865,
    //   longitude: 116.458958,
    //   radius: 50,
    //   color: '#9900CC',
    // },
    // {
    //   latitude: 39.91865,
    //   // longitude: 116.458958,
    //   radius: 50,
    //   color: '#9900CC',
    // },
    // {
    //   // latitude: 39.91865,
    //   // longitude: 116.458958,
    //   radius: 50,
    //   fillColor: '#FF6600',
    // },
    // {
    //   latitude: 39.907333,
    //   longitude: 116.459243,
    //   radius: 50,
    //   color: '#9900CC',
    //   fillColor: '#FF6600',
    // },
  ],
  includePoints: [
    {
      latitude: 39.89495,
      longitude: 116.37972
    },
    {
      latitude: 39.90495,
      longitude: 116.38972
    },
    {
      latitude: 39.91865,
      longitude: 116.458958
    },
    {
      latitude: 39.907333,
      longitude: 116.459243
    }
  ],
  polyline: [
    {
      points: [
        { latitude: 39.923077, longitude: 116.451598 },
        { latitude: 39.923291, longitude: 116.452606 },
        { latitude: 39.923324, longitude: 116.454259 },
        { latitude: 39.923307, longitude: 116.455611 },
        { latitude: 39.923258, longitude: 116.457649 }
      ],
      color: '#0000FF',
      colorList: ['#FF0000', '#00FF00', '#FF0000', '#ff00ff', '#FFCC33'],
      width: 4
    },
    {
      points: [
        { latitude: 39.922312, longitude: 116.450396 },
        { latitude: 39.920271, longitude: 116.450386 },
        { latitude: 39.918996, longitude: 116.450353 },
        { latitude: 39.917992, longitude: 116.450353 }
      ],
      color: '#0000FF',
      colorList: ['#FF0000', '#00FF00', '#0000FF', '#ff00ff', '#FFCC33']
      // width: 10,
    }
  ],
  showLocation: true,
  scale: 14
};

exports.mapProps = mapProps;