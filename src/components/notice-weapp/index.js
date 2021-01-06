import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import NoticeIcon from '../../assets/images/notice-icon.png'
import PropTypes from 'prop-types'
import './index.scss'

export default class NoticeWeapp extends Component {
    // 应用全局样式类
    static options = {
        addGlobalClass: true
    }

    static defaultProps = {
        data: {
            type: "notice",
            content: "请填写内容，如果过长，将会在手机上滚动显示",
            bg_color: "#fff8e9",
            color: "#646566"            
        }
    }

    config = {
        usingComponents: {
            "van-notice-bar": "../vant-weapp/notice-bar/index"
        }
    }

    render() {
        const { data } = this.props
        return (
            <View className='com-item active com-item--notice com-item-deletable'>
                <van-notice-bar
                    left-icon={NoticeIcon}
                    backgroundColor={data.bg_color}
                    color={data.color}
                    text={data.content}
                    onClick={()=>{console.log('点击了消息')}}
                />
            </View>
        );
    }
}

NoticeWeapp.PropTypes = {
    data: {
        type: PropTypes.string,
        content: PropTypes.string,
        bg_color: PropTypes.string,
        color: PropTypes.string            
    }    
}