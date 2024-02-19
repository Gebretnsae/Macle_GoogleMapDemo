let index = 0;
class TestCase {
  constructor(title, data, expectResult = '') {
    this.title = title; // 用例标题
    this.data = data; // 用例数据
    this.expectResult = expectResult; // 期望结果
  }
}
const circleCases = [
  new TestCase(
    'circles，设置1个圆',
    {
      circles: [
        {
          latitude: 39.911046,
          longitude: 116.46591,
          radius: 20,
          color: '#87CEEB'
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上看到1个圆，颜色为蓝色，圆的中心点是北京CBD核心区'
  ),
  new TestCase(
    'circles，设置多个圆',
    {
      circles: [
        {
          latitude: 39.911046,
          longitude: 116.46591,
          radius: 50,
          color: '#87CEEB'
        },
        {
          latitude: 39.925792,
          longitude: 116.453336,
          radius: 50,
          color: '#9900CC'
        },
        {
          latitude: 39.91865,
          longitude: 116.458958,
          radius: 50,
          fillColor: '#FF6600'
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上看到3个圆，圆的中心点分别为：北京CBD核心区（蓝色）、朝阳医院（紫色）、环球金融中心（橙色）'
  ),
  new TestCase(
    'circles，只设置longitude的值，不设置latitude的',
    {
      circles: [
        {
          longitude: 116.46591,
          radius: 50,
          color: '#87CEEB'
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上看不到圆'
  ),
  new TestCase(
    'circles，不设置longitude的值，只设置latitude的',
    {
      circles: [
        {
          latitude: 39.925792,
          radius: 50,
          color: '#9900CC'
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上看不到圆'
  ),
  new TestCase(
    'circles，longitude/latitude的值均设置超出范围',
    {
      circles: [
        {
          latitude: -99,
          longitude: 188,
          color: '#9900CC',
          fillColor: '#FF6600'
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上看不到圆'
  ),
  new TestCase(
    'circles，不设置longitude/latitude属性',
    {
      circles: [
        {
          radius: 50,
          fillColor: '#FF6600'
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上看不到圆'
  ),
  new TestCase(
    'circles，仅设置color，描边颜色显示正确',
    {
      circles: [
        {
          latitude: 39.911046,
          longitude: 116.46591,
          radius: 20,
          color: '#87CEEB'
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上看到1个圆，描边颜色为蓝色，无填充色，圆的中心点是北京CBD核心区'
  ),
  new TestCase(
    'circles，不设置color，取默认值黑色',
    {
      circles: [
        {
          latitude: 39.911046,
          longitude: 116.46591,
          radius: 20
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上看到1个圆，描边颜色为黑色，圆的中心点是北京CBD核心区'
  ),
  new TestCase(
    'circles，设置fillColor',
    {
      circles: [
        {
          latitude: 39.907333,
          longitude: 116.459243,
          color: '#9900CC',
          fillColor: '#FF6600',
          radius: 20
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上看到1个圆，描边为紫色，填充色为橙色，圆的中心点是北京银泰中心'
  ),
  new TestCase(
    'circles，不设置radius属性',
    {
      circles: [
        {
          latitude: 39.907333,
          longitude: 116.459243,
          color: '#9900CC',
          fillColor: '#FF6600'
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上看不到圆'
  )
];

exports.circleCases = circleCases;
