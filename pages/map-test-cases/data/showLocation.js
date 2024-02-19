let index = 0;
class TestCase {
  constructor(title, data, expectResult = '', step = '') {
    this.title = title; // 用例标题
    this.data = data; // 用例数据
    this.expectResult = expectResult; // 期望结果
    this.step = step; // 测试步骤
  }
}
const showLocationCases = [
  new TestCase(
    'show-location，配置为true',
    {
      latitude: 31.978793,
      longitude: 118.770025, //南京华为研究所
      showLocation: true,
      scale: 12
    },
    `1、显示当前位置但不带箭头
    2、当前位置没有变化`,
    `1、模拟器打开demo小程序，查看地图，会询问是否使用当前位置，选择允许
    2、重复步骤1，会询问是否使用当前位置，选择拒绝`
  ),
  new TestCase(
    'show-location，配置为false',
    {
      latitude: 31.978793,
      longitude: 118.770025, //南京华为研究所
      showLocation: false,
      scale: 12
    },
    `1、当前位置为闪烁的圆点，不会询问是否使用当前位置信息`
  ),
  // @龚改：
  new TestCase(
    '龚改 ● show-location，配置为false，不设置经纬度',
    {
      showLocation: false
    },
    `1、当前位置为圆点，地图位置不会发生移动`
  ),
  new TestCase(
    '龚改 ● show-location，配置为false，位置设置为北京',
    {
      showLocation: false,
      latitude: 39.92,
      longitude: 116.46, //南京华为研究所
      scale: 12
    },
    `1、当前位置为圆点，地图位置显示为北京`
  ),
  new TestCase(
    '龚改 ● show-location，配置为true，不设置定位位置',
    {
      showLocation: true,
    },
    `1、弹窗获取授权；2、授权成功后，移动至当前位置`,
    `1、模拟器打开demo小程序，查看地图，会询问是否使用当前位置，选择允许
    2、重复步骤1，会询问是否使用当前位置，选择拒绝`
  ),
  new TestCase(
    '龚改 ● show-location，配置为true，并设置定位位置为北京',
    {
      showLocation: true,
      latitude: 39.92,
      longitude: 116.46, //南京华为研究所
      scale: 12
    },
    `1、位置移动至北京；2、弹窗获取定位授权；3、授权成功后，移动至当前位置，授权失败则不会移动。`,
    `1、模拟器打开demo小程序，查看地图，会询问是否使用当前位置，选择允许
    2、重复步骤1，会询问是否使用当前位置，选择拒绝`
  ),
  new TestCase(
    'show-location，不配置该属性',
    {
      latitude: 31.978793,
      longitude: 118.770025, //南京华为研究所
      scale: 12
    },
    `1、当前位置为闪烁的圆点，不会询问是否使用当前位置信息`,
    ``
  ),
  new TestCase(
    'show-location，配置为true，提示中英文均正确',
    {
      includePoints: []
    },
    `1、中英文均正确`,
    `1、模拟器打开demo小程序，查看地图，查看提示
    2、切换成英文，模拟器打开demo小程序，查看地图，查看提示`
  ),
  new TestCase(
    '标题标题标题标题标题标题标题标题标题标题',
    {
      includePoints: []
    },
    `地图上能看到这个坐标点`,
    ``
  )
];

exports.showLocationCases = showLocationCases;
