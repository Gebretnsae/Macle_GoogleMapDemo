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
    '标题标题标题标题标题标题标题标题标题标题',
    {
      includePoints: [],
    },
    '地图上能看到这个坐标点'
  ),
  new TestCase(
    '标题标题标题标题标题标题标题标题标题标题',
    {
      includePoints: [],
    },
    '地图上能看到这个坐标点'
  ),
  new TestCase(
    '标题标题标题标题标题标题标题标题标题标题',
    {
      includePoints: [],
    },
    '地图上能看到这个坐标点'
  ),
  new TestCase(
    '标题标题标题标题标题标题标题标题标题标题',
    {
      includePoints: [],
    },
    '地图上能看到这个坐标点'
  ),
  new TestCase(
    '标题标题标题标题标题标题标题标题标题标题',
    {
      includePoints: [],
    },
    '地图上能看到这个坐标点'
  )
];

exports.circleCases = circleCases;
