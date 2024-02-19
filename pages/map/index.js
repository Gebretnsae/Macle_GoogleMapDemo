const { circleCases } = require('./data/circles');
const { includePointsCases } = require('./data/includePoint');
const { latlngCases } = require('./data/latlng');
const { markersCases } = require('./data/markers');
const { polylineCases } = require('./data/polyline');
const { scaleCases } = require('./data/scale');
const mapProps = require('./data').mapProps;

const data = {
  // 测试用例
  latlngCases,
  scaleCases,
  includePointsCases,
  markersCases,
  polylineCases,
  circleCases,
  // 这里定义需要录入到对象的属性字段
  scrollViewHeight: 300,
  updatedProps: {
    longitude: 116.46,
    latitude: 39.92,
    scale: 10
  },
  marker: {
    id: 1,
    iconPath: '../pics/pic-1.png',
    longitude: 116.46,
    latitude: 39.92,
    width: 32,
    height: 32,
    anchorX: 0.5,
    anchorY: 1
  },
  circle: {
    index: 0,
    longitude: 116.46,
    latitude: 39.92,
    radius: 32,
    strokeWidth: 2,
    color: '#aaee11',
    fillColor: '#ee11aa'
  },
  targetLocation: {},
  updatedPropsInputs: [
    {
      label: '经度', // 输入框标签提示
      prop: 'longitude', // 属性名
      type: 'digit'
    },
    {
      label: '纬度',
      prop: 'latitude',
      type: 'digit'
    },
    {
      label: '缩放',
      prop: 'scale',
      type: 'number'
    }
  ],
  markerInputs: [
    {
      label: '目标id',
      prop: 'id',
      type: 'number'
    },
    {
      label: '经度', // 输入框标签提示
      prop: 'longitude', // 属性名
      type: 'digit'
    },
    {
      label: '纬度',
      prop: 'latitude',
      type: 'digit'
    },
    {
      label: '宽度',
      prop: 'width',
      type: 'number'
    },
    {
      label: '高度',
      prop: 'height',
      type: 'number'
    },
    {
      label: '锚点X坐标',
      prop: 'anchorX',
      type: 'digit'
    },
    {
      label: '锚点Y坐标',
      prop: 'anchorY',
      type: 'digit'
    },
    {
      label: '图标地址', // 输入框标签提示
      prop: 'iconPath' // 属性名
    }
  ],
  circleInputs: [
    {
      label: '目标index',
      prop: 'index',
      type: 'number'
    },
    {
      label: '经度', // 输入框标签提示
      prop: 'longitude', // 属性名
      type: 'digit'
    },
    {
      label: '纬度',
      prop: 'latitude',
      type: 'digit'
    },
    {
      label: '描边颜色',
      prop: 'color',
      type: 'text'
    },
    {
      label: '填充颜色',
      prop: 'fillColor',
      type: 'text'
    },
    {
      label: '半径',
      prop: 'radius',
      type: 'number'
    },
    {
      label: '描边宽度',
      prop: 'strokeWidth',
      type: 'number'
    }
  ],
  targetLocationInputs: [
    {
      label: '经度', // 输入框标签提示
      prop: 'longitude', // 属性名
      type: 'digit'
    },
    {
      label: '纬度',
      prop: 'latitude',
      type: 'digit'
    }
  ],
  unnesessaryKeys: ['updatedPropsInputs', 'markerInputs', 'targetLocationInputs', 'scrollViewHeight'],
  mapProps
};
let mapContext;

Page({
  data,
  onReady() {
    mapContext = ma.createMapContext('myMap');
    // 设置可滚动区域的高度
    ma.getSystemInfo({
      success({ windowHeight }) {
        const mapHeight = 225;
        const marginTop = 16;
        const scrollViewHeight = windowHeight - mapHeight - marginTop;
        this.setData({
          scrollViewHeight
        });
      }
    });
    // ma.request({
    //   url: 'https://maps.googleapis.com/maps/api/directions/json?origin=32.0530307,118.7268646&destination=32.0920298,118.7974226&key=AIzaSyDEyj7Xmxl01jsbbb2-MBFj-W5hHRmAKyA',
    //   success(res) {
    //     console.log('route response', res);
    //     console.log({ res });
    //   },
    //   fail(err) {
    //     console.log('route response', err);
    //   }
    // });
  },
  showData() {
    const data = { ...this.data };
    const { unnesessaryKeys } = data;
    for (let key of unnesessaryKeys) {
      delete data[key];
    }
    console.log({ data });
    ma.showModal({
      title: '数据',
      content: JSON.stringify(data, null, 4),
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定'
    });
  },
  // 输入框输入时，更新属性
  bindPropUpdate(event) {
    const { targetObj, targetProp, inputConfig = {} } = event.currentTarget.dataset;
    const { value } = event.detail;
    const { type = 'text' } = inputConfig;
    // 根据输入框组件的类型声明转换值类型
    const transformedValue = this.getTransformedValue(value, type);
    this.setData({
      [targetObj]: {
        ...this.data[targetObj],
        [targetProp]: transformedValue
      }
    });
  },
  getTransformedValue(value, type) {
    // 空字符串视为undefined
    if (value === '') {
      return undefined;
    }
    if (['number', 'digit'].includes(type)) {
      return Number(value);
    }
    return value;
  },
  // 更新组件属性
  triggerPropsUpdate() {
    const { mapProps, updatedProps } = this.data;
    const { scale, longitude, latitude } = updatedProps;
    const propsData = { scale, longitude, latitude };
    console.log({ propsData });
    this.setData({
      mapProps: {
        ...mapProps,
        ...propsData
      }
    });
    console.log({ mapProps: this.data.mapProps });
  },
  updateMarker() {
    const targetMarker = this.data.marker;
    const anchor = { x: targetMarker.anchorX, y: targetMarker.anchorY };
    delete targetMarker.anchorX;
    delete targetMarker.anchorY;
    const { mapProps } = this.data;
    const { markers } = mapProps;
    const markerIndex = markers.findIndex((item) => item.id === Number(targetMarker.id));
    const marker = markers[markerIndex];
    if (markerIndex !== -1) {
      console.log({ id: targetMarker.id, markerIndex, marker });
      mapProps.markers[markerIndex] = {
        ...mapProps.markers[markerIndex],
        ...targetMarker,
        anchor
      };
      this.setData({
        mapProps
      });
      console.log({ id: targetMarker.id, markerIndex, marker, mapProps: this.data.mapProps });
    } else {
      ma.showToast({ title: `未找到id：${targetMarker.id}`, icon: 'error' });
    }
  },
  updateCircle() {
    const { index, longitude, latitude, radius, strokeWidth, color, fillColor } = this.data.circle;
    const targetCircle = { index, longitude, latitude, radius, strokeWidth, color, fillColor };

    const { mapProps } = this.data;
    const { circles } = mapProps;
    const circle = circles[targetCircle.index];
    console.log({ circles, circle, index });
    if (circle) {
      mapProps.circles[targetCircle.index] = {
        ...mapProps.circles[targetCircle.index],
        ...targetCircle
      };
      this.setData({
        mapProps
      });
      console.log({ index, circle, mapProps: this.data.mapProps });
    } else {
      ma.showToast({ title: `未找到index：${targetCircle.index}`, icon: 'error' });
    }
  },
  updatePolyline() {},
  // 地图事件
  markerTap(e) {
    ma.showModal({
      content: `markerTap：${JSON.stringify(e.detail)}`
    });
  },
  mapTap(e) {
    ma.showModal({
      content: `mapTap：${JSON.stringify(e.detail)}`
    });
  },
  moveToLocation() {
    const { longitude, latitude } = this.data.targetLocation;
    console.log({ longitude, latitude, mapContext });
    mapContext.moveToLocation({
      longitude,
      latitude,
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
  },
  // 测试用例覆盖
  bindPickerChange: function (e) {
    const {
      currentTarget: {
        dataset: { targetArr, targetMapProp }
      },
      detail: { value }
    } = e;
    const { data } = this;
    const { mapProps } = this.data;
    console.log('激活用例', data[targetArr][value].title, data[targetArr][value]);
    this.setData({
      mapProps: {
        ...mapProps,
        [targetMapProp]: data[targetArr][value].data
      }
    });
  },
  // 不止单一属性的地图数据更新
  bindMapDataPickerChange: function (e) {
    const {
      currentTarget: {
        dataset: { targetArr }
      },
      detail: { value }
    } = e;
    const { data } = this;
    const { mapProps } = this.data;
    console.log('激活用例', data[targetArr][value].title, data[targetArr][value]);
    this.setData({
      mapProps: {
        ...mapProps,
        ...data[targetArr][value].data
      }
    });
  }
});
