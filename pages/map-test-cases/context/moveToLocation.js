class ContextTestCase {
  constructor(title, expectResult, handler) {
    this.title = title; // 用例标题
    this.expectResult = expectResult; // 期望结果
    this.handler = handler; // 回调
  }
  trigger(_this, ma) {
    this.handler.call(_this, ma); // 绑定this、ma
  }
}

const moveToLocationCtxCases = [
  new ContextTestCase(
    'moveToLocation，设置了longitude/latitude的值',
    `1、会移动到南京常府街地铁站，弹出2个showModal框，内容有成功信息，一个是success回调函数定义的，一个是complete定义的`,
    function (ma) {
      const {
        mapContext
      } = this;

      mapContext.moveToLocation({
        longitude: 118.79205,
        latitude: 32.03237, //南京常府街地铁站
        success(res) {
          ma.showModal({
            content: res.errMsg
          });
        },
        fail(res) {
          ma.showModal({
            content: res.errMsg
          });
        },
        complete(res) {
          ma.showModal({
            content: res.errMsg
          });
        }
      });
      // @龚改
      mapContext.addMarkers({
        markers: [
          {
            longitude: 118.79205,
            latitude: 32.03237 //南京常府街地铁站
          }
        ]
      });
    }
  ),
  new ContextTestCase(
    'moveToLocation，只设置longitude的值，未设置latitude的',
    `1、会移动到首阳山附近（longitude取配置的，latitude取北京的），弹出2个showModal框，内容有成功信息，一个是success回调函数定义的，一个是complete定义的`,
    function (ma) {
      const {
        mapContext
      } = this;

      mapContext.moveToLocation({
        longitude: 118.79205,
        // latitude: 39.92,
        // latitude: 32.03237,   //南京常府街地铁站
        success(res) {
          ma.showModal({
            content: res.errMsg
          });
        },
        fail(res) {
          ma.showModal({
            content: res.errMsg
          });
        },
        complete(res) {
          ma.showModal({
            content: res.errMsg
          });
        }
      });
      // @龚改
      mapContext.addMarkers({
        markers: [
          {
            longitude: 118.79205, //南京常府街地铁站
            latitude: 39.92 // 取自默认地点（116.46， 39.92）的latitude
          }
        ]
      });
    }
  ),
  new ContextTestCase(
    'moveToLocation，未设置longitude的值，只设置latitude的',
    `1、会移动到安业村附近（longitude取北京的，latitude取配置的），弹出2个showModal框，内容有成功信息，一个是success回调函数定义的，一个是complete定义的`,
    function (ma) {
      const {
        mapContext
      } = this;
      mapContext.moveToLocation({
        // longitude: 118.79205,
        latitude: 32.03237, //南京常府街地铁站
        success(res) {
          ma.showModal({
            content: res.errMsg
          });
        },
        fail(res) {
          ma.showModal({
            content: res.errMsg
          });
        },
        complete(res) {
          ma.showModal({
            content: res.errMsg
          });
        }
      });
      // @龚改
      mapContext.addMarkers({
        markers: [
          {
            longitude: 116.46, // 取自默认地点（116.46， 39.92）的longitude
            latitude: 32.03237 //南京常府街地铁站
          }
        ]
      });
    }
  ),
  new ContextTestCase(
    'moveToLocation，不传longitude/latitude',
    `1、会移动到地图中心（模拟操作-地图中配置的），弹出2个showModal框，内容有成功信息，一个是success回调函数定义的，一个是complete定义的；2、不会移动位置，弹出2个showModal框，内容有失败信息，一个是fail回调函数定义的，一个是complete定义的`,
    function (ma) {
      const {
        mapContext
      } = this;
      mapContext.moveToLocation({
        success(res) {
          ma.showModal({
            content: res.errMsg
          });
        },
        fail(res) {
          ma.showModal({
            content: res.errMsg
          });
        }
      });
    }
  )
];

exports.moveToLocationCtxCases = moveToLocationCtxCases;
