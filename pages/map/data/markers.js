let index = 0;
class TestCase {
  constructor(title, data, expectResult = '') {
    this.title = title; // 用例标题
    this.data = data; // 用例数据
    this.expectResult = expectResult; // 期望结果
  }
}
const markersCases = [
  new TestCase(
    'markers设置1个标记点',
    {
      markers: [
        {
          id: 0,
          title: 'marker0',
          latitude: 39.91865,
          longitude: 116.458958
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '手指缩放地图后能看到1个标记点，为北京环球金融中心'
  ),
  new TestCase(
    'markers设置多个标记点',
    {
      markers: [
        {
          id: 0,
          title: 'marker0',
          latitude: 39.91865,
          longitude: 116.458958
        },
        {
          id: 1,
          title: 'marker1',
          latitude: 39.925792,
          longitude: 116.453336
        },
        {
          id: 2,
          title: 'marker2',
          latitude: 39.911046,
          longitude: 116.46591
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '手指缩放地图后能看到3个标记点，都在北京，分别为环球金融中心、朝阳医院、北京CBD核心区'
  ),
  new TestCase(
    'markers，设置id，点击事件查看效果',
    {
      markers: [
        {
          id: 1,
          title: 'marker0',
          latitude: 39.91865,
          longitude: 116.458958
        },
        {
          id: 2,
          title: 'marker1',
          latitude: 39.925792,
          longitude: 116.453336
        },
        {
          id: 3,
          title: 'marker2',
          latitude: 39.911046,
          longitude: 116.46591
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '每个标记点分别弹出modal框，content显示了对应的id，1，2，3'
  ),
  new TestCase(
    'markers，不设置id，点击事件查看效果',
    {
      markers: [
        {
          // id: 1,
          title: 'marker0',
          latitude: 39.91865,
          longitude: 116.458958
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '弹出modal框，content显示的id为0'
  ),
  new TestCase(
    'markers，只设置longitude的值，不设置latitude的',
    {
      markers: [
        {
          id: 0,
          title: 'marker0',
          // latitude: 39.91865,
          longitude: 112.940665
        }
      ],
      // latitude: 39.91865,
      // longitude: 112.940665,
      scale: 12
    },
    '手指缩放地图后能看到标记点，为印度尼西亚'
  ),
  new TestCase(
    'markers，不设置longitude的值，只设置latitude的',
    {
      markers: [
        {
          id: 0,
          title: 'marker0',
          latitude: 31.239701,
          // longitude: 116.458958,
        }
      ],
      // latitude: 31.239701,
      // longitude: 116.458958,
      scale: 12
    },
    '手指缩放地图后能看到标记点，为阿尔及利亚'
  ),
  new TestCase(
    'markers，longitude/latitude的值均设置超出范围',
    {
      markers: [
        {
          id: 0,
          title: 'marker0',
          latitude: 98,
          longitude: 188
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上没有标记点'
  ),
  new TestCase(
    'markers，不设置longitude/latitude属性',
    {
      markers: [
        {
          id: 0,
          title: 'marker0'
        }
      ],
      scale: 12
    },
    '地图上没有标记点'
  ),
  new TestCase(
    'markers，设置title，点击标记点后标题显示正确',
    {
      markers: [
        {
          id: 0,
          title: '北京环球金融中心',
          latitude: 39.91865,
          longitude: 116.458958
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上能看到标记点，点击后标题为北京环球金融中心'
  ),
  new TestCase(
    'markers，不设置title，点击标记点后标题不显示',
    {
      markers: [
        {
          id: 0,
          latitude: 39.91865,
          longitude: 116.458958
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上能看到标记点，点击后没有标题'
  ),
  new TestCase(
    'markers，设置title为空，点击标记点后标题显示正确',
    {
      markers: [
        {
          id: 0,
          title: '',
          latitude: 39.91865,
          longitude: 116.458958
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '地图上能看到标记点，点击后没有标题'
  ),
  new TestCase(
    'markers，设置title含各种字符，点击标记点后标题显示正确',
    {
      markers: [
        {
          id: 0,
          title: 'zhong问df`12!@#$%^&*()_+|}{":?><.,=-0/', //其他字符编译打包不通过
          latitude: 39.91865,
          longitude: 116.458958
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '1、地图上能看到标记点，点击后标题为zhong问df`12!@#$%^&*()_+|}…，超长部分省略号表示了'
  ),
  new TestCase(
    'markers，设置iconPath为本地路径，标记点的图标显示正确',
    {
      markers: [
        {
          iconPath: '../../images/loc.png',
          id: 0,
          title: '环球金融中心',
          latitude: 39.91865,
          longitude: 116.458958
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '1、地图上能看到标记点，标记点图标为loc.png'
  ),
  new TestCase(
    'markers，设置iconPath为网络路径，标记点的图标不显示',
    {
      markers: [
        {
          iconPath: 'http://www.baidu.com/img/bdlogo.png',
          id: 0,
          title: '环球金融中心',
          latitude: 39.91865,
          longitude: 116.458958
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '1、地图上能看到标记点，标记点没有图标'
  ),
  new TestCase(
    'markers，设置width/height的值，标记点图标显示设置的宽度和高度',
    {
      markers: [
        {
          iconPath: '../../images/location.png',
          id: 0,
          title: '环球金融中心',
          latitude: 39.91865,
          longitude: 116.458958,
          width: 10,
          height: 15
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '1、标记点的图标长宽为设置的长宽（可与设置的其他值对比）'
  ),
  new TestCase(
    'markers，不设置width/height的值，标记点图标显示图片实际的宽度和高度',
    {
      markers: [
        {
          iconPath: '../../images/location.png',
          id: 1,
          title: '朝阳医院',
          latitude: 39.925792,
          longitude: 116.453336
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '1、标记点的图标长宽为图片实际长宽（可与设置的其他值对比）'
  ),
  new TestCase(
    'markers，设置anchor的值，标记点的锚点为设置的值',
    {
      markers: [
        {
          iconPath: '../../images/faxing.png', //使用方形的图片
          id: 0,
          title: '环球金融中心',
          latitude: 39.91865,
          longitude: 116.458958,
          width: 10,
          height: 15,
          anchor: { x: 1, y: 1 }
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '1、标记点锚点用的是图片右下角（可默认值对比）'
  ),
  new TestCase(
    'markers，不设置anchor的值，标记点的锚点为底边中点',
    {
      markers: [
        {
          iconPath: '../../images/faxing.png', //使用方形的图片
          id: 0,
          title: '环球金融中心',
          latitude: 39.91865,
          longitude: 116.458958,
          width: 10,
          height: 15,
          anchor: { x: 1, y: 1 }
        }
      ],
      latitude: 39.91865,
      longitude: 116.458958,
      scale: 12
    },
    '1、标记点锚点用的是图片底边终点（可其他值对比）'
  )
];

exports.markersCases = markersCases;
