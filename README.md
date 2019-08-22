# react-canvas-poster
一个基于react+canvas通过类CSS数据生成canvas图片的组件
(･(ง •_•)งﾟ✧ A super easy create canvas poster for React!)
# 生成效果
![生成一个简单海报图片](https://1img.evente.cn/6e/64/cc/89c0c54e4f6434c40a493efacd.jpg?imageView2/2/w/740)
# 安装
```
npm i react-canvas-poster
```
# 使用组件
##### 注册
```
import CanvasPoster from 'react-canvas-poster';
```
##### 使用
```
<CanvasPoster drawData={this.state.drawData} success={this.success.bind(this)}/>

// return base64类型图片文件
success(res) {}
```

<details><summary>demo数据例子（点击展开）</summary><br>

```javascript

     {
        width: 360,
        height: 667,
        backgroundColor: '#fff',
        views: [
          // 绘制本地图片
          {
            type: 'image',
            url: require('./assets/bold.png'), // 远程图片可以直接改为图片地址
            top: 0,
            left: 0,
            width: 360,
            height: 667,
          },
          // 绘制带圆角+边框的图片
          {
            type: 'image',
            url: require('./assets/header.jpg'),
            top: 58,
            left: 165,
            width: 30,
            height: 30,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#f0efefea',
          },
          // 绘制文字
          {
            type: 'text',
            content: 'react-canvas-poster简单快速的绘制canvas海报~~这是一段比较长的标题文字',
            fontSize: 14,
            color: '#f7f7f7',
            textAlign: 'center',
            top: 262,
            left: 180,
            width: 200,
            lineNum: 3,
            lineHeight: 20,
            baseLine: 'top',
          },
          // 绘制一条分割线
          {
            type: 'line',
            color: '#999',
            startX: 30,
            startY: 580,
            endX: 330,
            endY: 580,
            width: 2,
            lineCap: 'round',
          },
          // 绘制一个简易矩形
          {
            type: 'rect',
            width: 200,
            height: 200,
            x: 20,
            y: 50,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: '#fff',
          },
      }
```

  </details>

#API
### drawData（数据）
属性 | 含义 |  类型 |默认值 | 是否必填
---|---|---|---|---
width| 生成图片宽度 | Number|  |是|
height| 生成图片高度 | Number|  |是|
backgroundColor| 背景颜色 |String | #ffffff | 否|
debug| 是否开启调试模式 | Boolean | false | 否|
views| 绘制核心数据(数组对象 见下表) | Array |    |是|

### image字段（绘制图片）
属性 | 含义 |  默认值 | 是否必填
---|---|---|---
url| 图片地址 支持远程图片 & 本地图片：require('./assets/x.png')  |" " | 是|
top| 图片距离顶部距离 | 0|  是|
left| 图片距离左边距离|0|   是|
width| 图片宽度 |0  |   是|
height| 图片高度 | 0 |    是|
borderRadius| 图片圆角 | 0 |    否|
borderWidth| 图片边框 | 0 |    否|
borderColor| 图片边框颜色 | |   否 |

### text字段（绘制文字）
属性 | 含义 |  默认值 | 可选值 |是否必填
---|---|---|---|---
top| 文字距离顶部距离 |0 | | 是|
left| 文字距离左边距离 | 0| | 是|
content| 文字内容 | '' |   | 是 |
fontSize| 文字字号（px）|16|  | 否|
color| 文字颜色 | #000 |  | 否|
baseLine| 文字基线对齐 | bottom | top  middle bottom | 否|
textAlign| 文字对齐 | left |  left center right  | 否 |
opacity|透明度 | 1  | 0-1|否 |
width|文字最大长度 |  | | 否 |
lineNum|文字最大折行数 | 1|  |否 |
lineHeight| 文字行高| 0|  |否 |
fontWeight| 文字加粗|  normal|100-900 |否 |
fontFamily|文字字体 | Microsoft YaHei |  |否 |

### line字段（绘制线段）
属性 | 含义 |  默认值 | 可选值 |是否必填
---|---|---|---|---
startX| 开始坐标X | | | 是|
startY| 开始坐标Y | | |是 |
endX| 结束坐标X | | | 是|
endY| 结束坐标Y | | | 是|
color| 线颜色 |#000 | |否 |
width| 线粗细 | 1 | |否 |
lineCap| 设置结束端点样式 | butt |butt round square | 否|

### rect字段（绘制矩形 内部可添加文字）
属性 | 含义 |  默认值 | 是否必填
---|---|---|---
width| 矩形宽度 | |  是|
height| 矩形高度 | | 是 |
x| 开始坐标X | |  是|
y| 开始坐标Y | |  是|
text| 文字（对象 参数见字段text） | | 否 |
paddingLeft| 左内边距 | 0|  否|
paddingRight| 右内边距 |0 | 否 |
borderWidth| 边框宽度 | 0|  否|
backgroundColor| 背景颜色 | | 否 |
borderColor| 边框颜色 | |  否|
borderRadius| 圆角 | 0| 否 |
opacity| 透明度 | 1|  否|

### 方法
```
success(src) {
  // 返回base64图片
  console.log(src)
}
```

### 注意
##### 关于canvas图片跨域
图片跨域暂时未完全解决，远程图片地址推荐使用同域名，不然会报错

### 相关参考
[vue-canvas-poster](https://github.com/whorcare/vue-canvas-poster-yufan) 作者：也是俺自己
[canvas图片跨域怎么办](https://www.jianshu.com/p/454b288d4aa5)
[wxa-plugin-canvas](#) 作者：jasondu
[绘制圆角矩形](https://blog.csdn.net/liuyan19891230/article/details/51259147) 作者：YvetteLau
[贝塞尔曲线](https://github.com/hujiulong/blog/issues/1) 作者：hujiulong


### 持续开发中的功能...
box-shadow 绘制阴影
QrCode 绘制二维码
Bezier curve 贝塞尔曲线
可选类型图片导出
...

### 交流
有什么意见,或者bug 或者想一起开发react-canvas-poster
![我的微信](https://0img.evente.cn/0f/41/65/8ad030fc5d9f82f6345b3d6e7c.jpg?imageView2/2/w/740)
[提iss](https://github.com/whorcare/react-canvas-poster/issues/new)