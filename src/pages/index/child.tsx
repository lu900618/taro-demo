import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

export default class Child extends Component {
  props = {
    name: '',
    onChange: () => { }
  }
  clickHandle = () => {
    this.props.onChange()
  }
  render() {
    return (
      <View>{this.props.name}
        <Button onClick={this.clickHandle}>aa</Button>
      </View>
    )
  }
}
