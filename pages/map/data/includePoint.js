let index = 0;
class TestCase {
  constructor(title, data, expectResult = '') {
    this.title = title; // 用例标题
    this.data = data; // 用例数据
    this.expectResult = expectResult; // 期望结果
  }
}
const includePointsCases = [
  new TestCase(
    'include-points，配置1个坐标点（跟地图的中心位置相距较远）',
    {
      includePoints: [
        {
          latitude: 39.92022,
          longitude: 116.404225
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上能看到这个坐标点'
  ),
  new TestCase(
    'include-points，配置2个距离较近的坐标点',
    {
      markers: [
        {
          latitude: 39.911046,
          longitude: 116.46591
        },
        {
          latitude: 39.925792,
          longitude: 116.453336
        }
      ],
      includePoints: [
        {
          latitude: 39.911046,
          longitude: 116.46591
        },
        {
          latitude: 39.925792,
          longitude: 116.453336
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上能看到这2个坐标点'
  ),
  new TestCase(
    'include-points，配置2个距离较远的坐标点',
    {
      markers: [
        {
          latitude: 39.911046,
          longitude: 116.46591
        },
        {
          latitude: 39.925792,
          longitude: 116.453336
        }
      ],
      includePoints: [
        {
          latitude: 39.911046,
          longitude: 116.46591
        },
        {
          latitude: 39.925792,
          longitude: 116.453336
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上能看到这2个坐标点'
  )
];

exports.includePointsCases = includePointsCases;
