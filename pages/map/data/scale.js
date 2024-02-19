let index = 0;
class TestCase {
  constructor(title, data, expectResult = '') {
    this.title = title; // 用例标题
    this.data = data; // 用例数据
    this.expectResult = expectResult; // 期望结果
  }
}
const scaleCases = [
  new TestCase(
    'scale值设置3-20，缩放正确',
    {
      scale: 18
    },
    '地图缩放正确'
  ),
  // 我增加的
  new TestCase(
    'scale值设置3，缩放正确',
    {
      scale: 3
    },
    '地图缩放正确，此时为最小级别'
  ),
  new TestCase(
    'scale值设置20，缩放正确',
    {
      scale: 20
    },
    '地图缩放正确，此时为最大级别'
  ),
  new TestCase('scale值不设置，缩放级别默认16 ', {}, '地图缩放默认16（可与scale值设置为16的对比下）'),
  new TestCase(
    'scale设置2，缩放级别取3',
    {
      scale: 2
    },
    '地图缩放为3，（可与scale值设置为3的对比下）'
  ),
  new TestCase(
    'scale设置21，缩放级别取20',
    {
      scale: 21
    },
    '地图缩放为20，（可与scale值设置为20的对比下）'
  )
];

exports.scaleCases = scaleCases;
