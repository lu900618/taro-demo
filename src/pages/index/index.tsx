import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'
import Demo from './child'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  // state = {
  //   name: '张三'
  // }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  // changName = () => {
  //   this.setState({ name: '李四' })
  // }

  // change = () => {
  //   this.setState({ name: '李四2' })
  // }
  render() {
    return (
      <View className='index'>
        {/* <Demo name={this.state.name} onChange={this.change} />
        <Button onClick={this.changName}>点击改变名字</Button>
        <Text>{this.state.name}</Text> */}
      </View>
    )
  }
}
