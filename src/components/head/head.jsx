/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 19:33:22
 * @LastEditTime: 2019-10-11 21:26:29
 * @LastEditors: Please set LastEditors
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components';
import Top from './top';
import './head.less'

class Head extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      store: {
        title: '川香居',
        notice: '欢迎光临',
        tags: ['好吃', '死贵']
      }
    }
  }
  render() {
    return (
      <View className='head'>
        <Top />
        {/* 背景墙 */}
        <Image className='back' src={require('../../assets/img/back.jpg')}></Image>
        <View className='store'>
          <Image className='store_img' src={require('../../assets/img/store.jpg')} />
          <View className='store_txt'>
            <Text>{this.state.store.title}</Text>
            <Text>{this.state.store.notice}</Text>
            <View>{this.state.store.tags.map((tag, index) =>
              <Text className='tag' key={index}>{tag}</Text>
            )}</View>
          </View>
        </View>
      </View>
    )
  }
}

export default Head
