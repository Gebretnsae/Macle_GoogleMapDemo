# 全局优化问题

[#测试用例][TODO] # 测试用例 transformPicUrl 的 undefined 值和在线 url 处理

[TODO] 模拟器的授权弹窗《国际化》
[TODO] #优化所有涉及回调的 API 补充 try catch，走错误回调
[TODO] 地图校验失败时，样式问题，字体大小调整
[TODO] 组件属性，做类型校验（数组的涉及长度校验），确保不会出现异常报错
[TODO] 小概率，API Key 正确，地图走失败回调

# 测试用例

[OK] polyline
[TO_VERIFY] scale：默认值 16，超出取最大最小值（端侧验证一下）
[TO_VERIFY] #优化问题 scale 缩放范围超出，默认值
[TO_VERIFY] #优化问题 弹窗逻辑：初始化、更新地图时不弹窗，除非配置了 showLocation。

[TO_VERIFY] markers：icon 仅支持本地 url，需限制
[TO_VERIFY] circles：fill 和 color 的“透明度”的默认值问题（端侧验证一下）

[TODO] longitude/latitude：
[TO_VERIFY][parent]文档上写的是必填值，不记得哪里说默认值取北京（端侧验证一下）(116.46, 39.92)
[TO_VERIFY][child]默认北京 (116.46, 39.92)
[TO_VERIFY][child]是否为必填值

[TODO][!] show-location：如果设置为 true，初始化时申请定位权限，获取成功后定位点显示 marker
[TODO] show-location 的实现——配置时弹窗授权，授权成功后在当前位置增加一个 marker。需保证；以及是否弹窗，取决于 showLocation。如果 showLocation 切换为 false，则移除标记。

[NOT_SURE] include-points：和 scale 的冲突情况（端侧验证一下）

# 事件

[OK] bindtap：基本没问题
[OK] bindmarkertap：基本没问题

[TODO] addMarkers：clear 属性需要支持，清空地图标记
[TODO] removeMarkers：markerIds
[TODO] moveToLocation：默认当前定位点

# 测试用例检查 RE

## longitude/latitude

[OK]

## scale

[OK]

## includePoints

[NOT_SURE] 和 scale 冲突

## showLocation

[FXIED] clear 时，location 的标记点会被清空

## markers

[NOT_SURE] markerId 默认值是否为空字符串
[NOT_SURE] title 为空字符串时，点击是否显示
[FXIED] icon 的默认大小和端侧不一致，查看 iOS 的代码，确认默认值

## circles

[OK]

## polylines

## bindtap

[TO_FIX] 触发多次：是 runtime 问题，x，y 的参数是默认的

## bindmarkertap

[TO_FIX] 同时触发了 Runtime，runtime 问题；

# 其他

[TODO] request：开发态配置代理，验证外网 url 是否能够请求通。

# 已知问题

## iOS 真机

1. scale: 默认值有问题，默认值不为 16（默认表现，与 scale:16 的表现存在差异）
2. showLocation：显示逻辑不明，第一次设置为 true 时，会申请定位授权。但移动结果似乎的不是当前定位点，而是上一次手动设定的定位点。
3. marker 的 icon 尺寸问题：根据文档，不声明 icon 尺寸时，默认采用图片的真实大小。但经测试，默认表现与设置宽高为真实大小时的表现不一致。

## runtime

1. bindtap、bindMarkerTap 的触发问题：
   由于 runtime 实现的组件，默认注册了 macle 原生的点击事件，点击后默认触发 tap，并传入{ x, y }参数。
   导致问题一：点击地图时，bindtap 会被触发两次：第一次入参为{ x, y }，这个是 runtime 触发的 macle 原生点击事件（这一次本不应该触发）；第二次入参为{ longtitude, latitude }，这个才是模拟器主动触发通知地图组件的点击事件。
   导致问题二：点击 marker 标记时，本应只触发 bindmarkertap 事件，但同时和先触发一次 bindtap（这一次本不应该触发）。
   该问题在端侧无法复现，因为端侧采用原生组件覆盖了地图组件，掩盖了这个潜在问题。
   但该问题较难解决，不建议直接提问题单，请先和开发确认。
2. 地图加载失败场景中，回调拿不到具体的错误信息（鉴权失败、其他等）：3月份的 runtime 的实现就是如此，就没有提供具体失败原因，是否需要修改可以再讨论。

## 模拟器

1. 同一个页面无法显示两个地图组件：这个受 runtime 的实现限制，无法针对同一页面的多个地图组件进行区分。已和芹姐对齐，暂不考虑此场景。
2. request：验证外网 url，需要在代理环境下验证。
3. 谷歌地图组件存在街景小人等界面辅助控件：不影响基本功能，小程序可通过css主动屏蔽。但如果认为模拟器有必要默认隐藏，需要runtime进行样式注入达成隐藏效果。


【定位模拟】
9.01
38.45
Africa/Addis_Ababa