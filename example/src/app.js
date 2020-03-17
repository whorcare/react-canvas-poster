import React, { Component } from 'react';
import { render } from 'react-dom'
import CanvasPoster from '../../src'
import bold from '../assets/bold.png';

let drawData= {
    width: 360,
    height: 667,
    backgroundColor: '#fff',
    views: [
      {
        type: 'image',
        url: bold, //  eslint-disable-line
        top: 0,
        left: 0,
        width: 360,
        height: 667,
      },
      {
        type: 'image',
        url: require('../assets/header.jpg'), //  eslint-disable-line
        top: 58,
        left: 165,
        width: 30,
        height: 30,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#f0efefea',
      },
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
      {
        type: 'text',
        content: 'xxxx-xx-xx: xx:xx:xx',
        fontSize: 14,
        color: '#f7f7f7',
        textAlign: 'center',
        top: 372,
        left: 180,
        width: 200,
        lineNum: 3,
        lineHeight: 20,
        baseLine: 'top',
      },
      {
        type: 'image',
        url: require('../assets/header.jpg'), //  eslint-disable-line
        top: 58,
        left: 165,
        width: 30,
        height: 30,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#f0efefea',
      },
      {
        type: 'qcode',
        text: 'https://github.com/whorcare/vue-canvas-poster-yufan', //  eslint-disable-line
        top: 420,
        left: 135,
        width: 90,
        height: 90,
      },
      {
        type: 'line',
        color: '#999',
        startX: 30,
        startY: 580,
        endX: 330,
        endY: 580,
        width: 2,
        lineCap: 'round', // lineCap 属性设置或返回线条末端线帽的样式。
      },
    ],

}

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: '',
    };
  }

  render () {
    return (
      <div>
        <img src={this.state.img} />
        <CanvasPoster drawData={drawData} success={this.success.bind(this)}/>
      </div>
    );
  }

  success(res) {
    this.setState({
      img: res
    });
  }
}

render(<App />, document.getElementById('root'))
