/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 19:36:38
 * @LastEditTime: 2019-10-11 19:54:02
 * @LastEditors: Please set LastEditors
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components';
import './top.less';

class Top extends Component {
  render() {
    return (
      <View className='top'>
        <View className='left'>
          <Image className='image' src={require('../../assets/img/left.png')} />
        </View>
        <View className='right'>
          <Image className='image' src={require('../../assets/img/search.png')} />
          <Image className='image' src={require('../../assets/img/colletion.png')} />
          <Image className='image' src={require('../../assets/img/tuan.png')} />
        </View>
      </View>
    )
  }
}

export default Top
