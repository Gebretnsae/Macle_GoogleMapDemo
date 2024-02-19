let index = 0;
class TestCase {
  constructor(title, data, expectResult = '') {
    this.title = title; // 用例标题
    this.data = data; // 用例数据
    this.expectResult = expectResult; // 期望结果
  }
}
const latlngCases = [
  new TestCase(
    '设置了longitude/latitude的值，地图中的中心位置显示正确 ',
    {
      latitude: 31.239701,
      longitude: 121.499729 //上海东方明珠
    },
    '地图显示的中心位置应为上海东方明珠'
  ),
  new TestCase(
    '不设置longitude属性，只设置latitude的值 ',
    {
      latitude: 31.239701,
      scale: 9
    },
    '地图显示的中心位置经度取的北京的经度，纬度取的配置的31.239701，打开地图能看到霍山县等地方'
  ),
  new TestCase(
    '只设置longitude的值，不设置latitude属性 ',
    {
      longitude: 112.940665,
      scale: 9
    },
    '地图显示的中心位置经度取的北京的纬度，经度取的配置的112.940665，打开地图能看到左云县、云岗区，怀仁市等地方'
  ),
  new TestCase(
    '不设置longitude/latitude属性，地图中的中心位置显示北京 ',
    {
      scale: 9
    },
    '地图显示的中心位置为北京'
  )
];

exports.latlngCases = latlngCases;
