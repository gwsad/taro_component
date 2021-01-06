import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import TitleText from '../../components/title-text'
import AVideo from '../../components/video'
import Note from '../../components/shop-note'
import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }
A
  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  config = {
    navigationBarTitleText: '首页',

    usingComponents: {
      'van-button' : '../../components/vant-weapp/button/index',
      }
  
   
  }
  

 
  render() {
    return (
      <View className='index'>
        <AVideo />
        {/* <Text>Hello world!</Text> */}


        
        {/* <TitleText
          position={0}
          title='this is tit213323213le'
          titleFontWeight='bold'
          titleColor='#333333'
          desc='this is desc'
          descColor='#333333'
          descFontWeight=''
          backgroundColor='pink'
          more={3}
          moreText='查看更多'
          link=''
        /> */}
        
        {/* <AVideo/> */}
      </View>
    )
  }
}
