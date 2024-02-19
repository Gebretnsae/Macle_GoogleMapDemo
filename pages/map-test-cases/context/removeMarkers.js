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

const removeMarkersCtxCases = [
  new ContextTestCase(
    'removeMarkers，传入1个标记点',
    `1.1、地图上原先有多个标记点，点击按钮后，少了1个标记点，少的标记点为removeMarkers传的值；1.2、弹出2个showModal框，一个是success回调函数定义的，一个是complete定义的
    `,
    function (ma) {
      const {
        data: { markersIndex },
        mapContext
      } = this;
      mapContext.removeMarkers({
        markerIds: [1], //先在地图上增加多个markers
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
      // @龚
      console.log({ markerIds: [1] });
    }
  ),
  new ContextTestCase(
    'removeMarkers，传入多个标记点',
    `1.1、地图上原先有多个标记点，点击按钮后，少了2个标记点，少的标记点为removeMarkers传的值；1.2、弹出2个showModal框，一个是success回调函数定义的，一个是complete定义的`,
    function (ma) {
      const {
        data: { markersIndex },
        mapContext
      } = this;

      mapContext.removeMarkers({
        markerIds: [1, 2], //先在地图上增加多个markers
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
      // @龚
      console.log({ markerIds: [1, 2] });
    }
  ),
  new ContextTestCase(
    'removeMarkers，传入的标记点为空',
    `1、地图上原先有多个标记点，点击按钮后，标记点未变少；2、弹出2个showModal框，一个是success回调函数定义的，一个是complete定义的`,
    function (ma) {
      const {
        data: { markersIndex },
        mapContext
      } = this;
      mapContext.removeMarkers({
        markerIds: [], //先在地图上增加多个markers
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
    }
  )
  // new ContextTestCase(
  //   '标题标题标题标题标题标题标题标题',
  //   `期望结果期望结果期望结果期望结果`,
  //   function (ma) {
  //     const {
  //       data: { markersIndex },
  //       mapContext
  //     } = this;

  //   }
  // ),
];

exports.removeMarkersCtxCases = removeMarkersCtxCases;
