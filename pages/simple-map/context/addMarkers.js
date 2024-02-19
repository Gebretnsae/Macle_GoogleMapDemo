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

const addMarkersCtxCases = [
  new ContextTestCase(
    'addMarkers，增加1个标记点',
    `1、地图上出现了1个新的标记点，标记点为：建外SOHO西区; 2、弹出2个showModal框，一个是success回调函数定义的，一个是complete定义的`,
    function (ma) {
      let {
        data: { markersIndex },
        mapContext
      } = this;
      let markerObj = {
        id: ++markersIndex,
        title: `marker${markersIndex}`,
        iconPath: '../../images/location.png',
        latitude: 39.903168,
        longitude: 116.453771
      };
      let a = [markerObj];
      mapContext.addMarkers({
        markers: a,
        clear: false,
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

      // @龚：更新index
      this.setData({
        markersIndex
      });
    }
  ),
  // @龚改
  new ContextTestCase(
    '龚改 ● addMarkers，增加1个标记点，显式声明宽高为图片资源的实际大小：64*64',
    `1、地图上出现了1个新的标记点，标记点为：建外SOHO西区附近; 2、标记图标的大小表现应该与未设置宽高时相同；3、弹出2个showModal框，一个是success回调函数定义的，一个是complete定义的`,
    function (ma) {
      let {
        data: { markersIndex },
        mapContext
      } = this;
      let markerObj = {
        id: ++markersIndex,
        title: `marker${markersIndex}`,
        iconPath: '../../images/location.png',
        latitude: 39.903168,
        longitude: 116.453771,
        // 宽高为图片的实际大小
        width: 64,
        height: 64
      };
      let a = [markerObj];
      mapContext.addMarkers({
        markers: a,
        clear: true, // 清空，方便测试
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

      // @龚：增加移动，方便统一视角；更新index到data
      const center = {
        latitude: 39.903168,
        longitude: 116.453771,
      };
      mapContext.moveToLocation({
        ...center,
        scale: 12
      });
      this.setData({
        markersIndex
      });
    }
  ),
  // @龚改
  new ContextTestCase(
    '龚改 ● addMarkers，增加1个标记点，不显式声明宽高',
    `1、地图上出现了1个新的标记点，标记点为：建外SOHO西区附近; 2、此时标记图标的宽高应该与图片的实际宽高一致；3、弹出2个showModal框，一个是success回调函数定义的，一个是complete定义的`,
    function (ma) {
      let {
        data: { markersIndex },
        mapContext
      } = this;
      let markerObj = {
        id: ++markersIndex,
        title: `marker${markersIndex}`,
        iconPath: '../../images/location.png',
        latitude: 39.903168,
        longitude: 116.453771
      };
      let a = [markerObj];
      mapContext.addMarkers({
        markers: a,
        clear: true, // 清空，方便测试
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

      // @龚：增加移动，方便统一视角；更新index到data
      const center = {
        latitude: 39.903168,
        longitude: 116.453771,
      };
      mapContext.moveToLocation({
        ...center,
        scale: 12
      });
      this.setData({
        markersIndex
      });
    }
  ),
  new ContextTestCase(
    'addMarkers，增加2个标记点',
    `1、地图上出现了2个新的标记点，标记点为z：建外SOHO西区、世贸天阶
    2、弹出2个showModal框，一个是success回调函数定义的，一个是complete定义的`,
    function (ma) {
      let {
        data: { markersIndex },
        mapContext
      } = this;

      let markerObj = {
        id: ++markersIndex,
        title: `marker${markersIndex}`,
        iconPath: '../../images/location.png',
        latitude: 39.905506,
        longitude: 116.453642
      };
      let markerObj1 = {
        id: ++markersIndex,
        title: `marker${markersIndex}`,
        iconPath: '../../images/location.png',
        latitude: 39.916566,
        longitude: 116.451926
      };
      let a = [markerObj, markerObj1];
      mapContext.addMarkers({
        markers: a,
        clear: false,
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

      // @龚：增加移动，方便统一视角；更新index到data
      const center = {
        longitude: (markerObj.longitude + markerObj1.longitude) / 2,
        latitude: (markerObj.latitude + markerObj1.latitude) / 2
      };
      mapContext.moveToLocation({
        ...center,
        scale: 12
      });
      this.setData({
        markersIndex
      });
    }
  ),
  new ContextTestCase(
    'addMarkers，设置clear为true，会清掉之前的标记点',
    `1、地图上会先清理掉先前的markers，增加2个新的标记点，标记点为：建外SOHO西区、世贸天阶；2、弹出2个showModal框，一个是success回调函数定义的，一个是complete定义的`,
    function (ma) {
      let {
        data: { markersIndex },
        mapContext
      } = this;
      let markerObj = {
        id: ++markersIndex,
        title: `marker${markersIndex}`,
        iconPath: '../../images/location.png',
        latitude: 39.903168,
        longitude: 116.453771
      };
      let a = [markerObj];
      mapContext.addMarkers({
        markers: a,
        clear: true,
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

      // @龚：更新index
      this.setData({
        markersIndex
      });
    }
  ),
  new ContextTestCase(
    'addMarkers，设置clear为false，不会清掉之前的标记点',
    `1、地图上会先清理掉先前的markers，增加2个新的标记点，标记点为：建外SOHO西区、世贸天阶；2、弹出2个showModal框，一个是success回调函数定义的，一个是complete定义的`,
    function (ma) {
      let {
        data: { markersIndex },
        mapContext
      } = this;

      let markerObj = {
        id: ++markersIndex,
        title: `marker${markersIndex}`,
        iconPath: '../../images/location.png',
        latitude: 39.903168,
        longitude: 116.453771
      };
      let a = [markerObj];
      mapContext.addMarkers({
        markers: a,
        clear: false,
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

      // @龚：更新index
      this.setData({
        markersIndex
      });
    }
  ),
  new ContextTestCase(
    'addMarkers，不设置clear，不会清掉之前的标记点',
    `1、地图上会先清理掉先前的markers，增加2个新的标记点，标记点为：建外SOHO西区、世贸天阶；2、弹出2个showModal框，一个是success回调函数定义的，一个是complete定义的`,
    function (ma) {
      let {
        data: { markersIndex },
        mapContext
      } = this;

      let markerObj = {
        id: ++markersIndex,
        title: `marker${markersIndex}`,
        iconPath: '../../images/location.png',
        latitude: 39.903168,
        longitude: 116.453771
      };
      let a = [markerObj];
      mapContext.addMarkers({
        markers: a,
        // clear: false,
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

      // @龚：更新index
      this.setData({
        markersIndex
      });
    }
  )
  // new ContextTestCase(
  //   '标题标题标题标题标题标题标题标题',
  //   `期望结果期望结果期望结果期望结果`,
  //   function (ma) {
  //     let {
  //       data: { markersIndex = 1 },
  //       mapContext
  //     } = this;

  //   }
  // )
];

exports.addMarkersCtxCases = addMarkersCtxCases;
