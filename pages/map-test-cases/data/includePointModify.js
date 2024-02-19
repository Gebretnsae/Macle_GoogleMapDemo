let index = 0;
class TestCase {
  constructor(title, data, expectResult = '') {
    this.title = title; // 用例标题
    this.data = data; // 用例数据
    this.expectResult = expectResult; // 期望结果
  }
}
// @备注：增加了marker、longtitude等参数，方便重置视图和查看效果
const includePointModifyCases = [
  new TestCase(
    '龚增 ● include-points，配置1个坐标点为北京（跟地图的默认中心位置重合）',
    {
      markers: [
        {
          latitude: 39.92,
          longitude: 116.46
        }
      ],
      includePoints: [
        {
          latitude: 39.92,
          longitude: 116.46
        }
      ],
      latitude: 39.92,
      longitude: 116.46,
      scale: 10
    },
    '地图上能看到北京市这个坐标点'
  ),
  new TestCase(
    'include-points，配置1个坐标点（跟地图的中心位置相距较远）',
    {
      markers: [
        {
          latitude: 39.92022,
          longitude: 116.404225
        }
      ],
      includePoints: [
        {
          latitude: 39.92022,
          longitude: 116.404225
        }
      ],
      latitude: 39.92022,
      longitude: 116.404225,
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
    '龚增 ● include-points，配置2个距离较远的坐标点，且不设置scale',
    {
      markers: [
        {
          latitude: 39.911046,
          longitude: 116.46591
        },
        {
          latitude: 39.756782311751856,
          longitude: 116.72278162439285
        }
      ],
      includePoints: [
        {
          latitude: 39.911046,
          longitude: 116.46591
        },
        {
          latitude: 39.756782311751856,
          longitude: 116.72278162439285
        }
      ],
      latitude: 39.83222870076584,
      longitude: 116.59002741245496,
    },
    '当scale的取值较小、显示大范围时，地图上能看到这2个坐标点，反之看不到'
  ),
  new TestCase(
    '龚增 ● include-points，配置2个距离较远的坐标点，且scale设置为6，显示大范围',
    {
      markers: [
        {
          latitude: 39.911046,
          longitude: 116.46591
        },
        {
          latitude: 39.756782311751856,
          longitude: 116.72278162439285
        }
      ],
      includePoints: [
        {
          latitude: 39.911046,
          longitude: 116.46591
        },
        {
          latitude: 39.756782311751856,
          longitude: 116.72278162439285
        }
      ],
      latitude: 39.83222870076584,
      longitude: 116.59002741245496,
      scale: 6
    },
    '地图上能看到这2个坐标点'
  ),
  new TestCase(
    '龚增 ● include-points，配置2个距离较远的坐标点，且scale设置为16，显示小范围',
    {
      markers: [
        {
          latitude: 39.911046,
          longitude: 116.46591
        },
        {
          latitude: 39.756782311751856,
          longitude: 116.72278162439285
        }
      ],
      includePoints: [
        {
          latitude: 39.911046,
          longitude: 116.46591
        },
        {
          latitude: 39.756782311751856,
          longitude: 116.72278162439285
        }
      ],
      latitude: 39.83222870076584,
      longitude: 116.59002741245496,
      scale: 16
    },
    '地图上看不到这2个坐标点'
  )
];

exports.includePointModifyCases = includePointModifyCases;
