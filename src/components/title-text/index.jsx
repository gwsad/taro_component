import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

class Index extends Component {

    constructor(props) {
        super(props)
    }

    config = {
        usingComponents: {
            'van-icon': '../../components/vant-weapp/icon/index',
        }
    }

    redirect = () => {
        Taro.redirectTo({
            url: this.props.link
        })
    }

    showMore() {
        const { more, moreText } = this.props

        if (more === 1) {
            return <View className='cap-title-text__link' style={{color: '#155bd4'}} onClick={this.redirect}>{moreText}</View>
        }
        if (more === 2) {
            return <View className='cap-title-text__link' style={{color: '#969799'}} onClick={this.redirect}>
                {moreText}
                <van-icon name="arrow" />
            </View>
        }
        if (more === 3) {
            return <View className='cap-title-text__link' onClick={this.redirect}>
                <van-icon name="arrow" />
            </View> 
        }

    }


    render() {

        const {
            position,
            title,
            titleFontSize,
            titleFontWeight,
            titleColor,
            desc,
            descColor,
            descFontSize,
            descFontWeight,
            backgroundColor,
            more,
            moreText,
            link
        } = this.props



        return (
            <View className='cap-title-text__content' style={{
                background: backgroundColor,
                textAlign: position === 0 ? 'left' : 'center'
            }}
            >
                {
                    this.showMore()
                }

                <View className='cap-title-text__title' style={{
                    color: titleColor,
                    fontSize: titleFontSize,
                    fontWeight: titleFontWeight
                }}
                >
                    {title}
                </View>

                {
                    desc ?
                        <View className='cap-title-text__desc' style={{
                            color: descColor,
                            fontSize: descFontSize,
                            fontWeight: descFontWeight
                        }}
                        >{desc}</View>
                        :
                        null
                }
            </View>
        )

    }
}

Index.propTypes = {
    position: Number,
    title: String,
    titleFontSize: Number,
    titleFontWeight: Number,
    titleColor: String,
    desc: String,
    descColor: String,
    descFontSize: Number,
    descFontWeight: Number,
    backgroundColor: String,
    more: Number,
    moreText: String,
    link: String
}

Index.defaultProps = {
    position: 0,
    title: '',
    titleFontSize: 16,
    titleColor: '#323233',
    titleFontWeight: 1,
    desc: '',
    descColor: '#969799',
    descFontWeight: 0,
    descFontSize: 12,
    backgroundColor: '#fff',
    more: 0,
    moreText: '',
    link: ''
}


export default Index