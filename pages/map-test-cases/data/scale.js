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
    '@龚增：scale值设置16，即为默认值',
    {
      scale: 16
    },
    '地图以默认值初始化加载后，再次进行该缩放动作，缩放比例应该不会变化'
  ),
  new TestCase(
    '@龚增：scale值设置4，逼近最小缩放值3',
    {
      scale: 4
    },
    '地图缩放正确，相对最小缩放等级3，应有细微差异'
  ),
  new TestCase(
    '@龚增：scale值设置19，逼近最大缩放值20',
    {
      scale: 19
    },
    '地图缩放正确，相对于最大缩放等级20，应有细微差异'
  ),
  new TestCase(
    'scale值设置18，取值在范围3-20中，缩放正确',
    {
      scale: 18
    },
    '地图缩放正确'
  ),
  // 我增加的
  new TestCase(
    '@龚增：scale值设置最小值3',
    {
      scale: 3
    },
    '地图缩放正确，此时为最小级别'
  ),
  new TestCase(
    '@龚增：scale值设置最大值20',
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
