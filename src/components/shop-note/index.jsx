import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

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

    renderContent() {
        const { style, data } = this.props

        if (style === 0 || style === 1 || style === 2) {
            return <View className={`cap-showcase-${style}`}>
                {
                    data.map(item => {
                        return this.renderCard(item)
                    })
                }
            </View>
        }else if (style === 3) {
            return <View className={'cap-showcase-3'}>
                <View className='wsc-img-list'>
                    <Image className='wsc-img-list__img' src={data[0].url}></Image>
                    <View className='wsc-img-list__cover'>
                        <View className='wsc-img-list__cover-top'>
                            <View className='wsc-img-list__label noAbsolute'>{data[0].noteTag}</View>

                            <View className='shopnote-thumb-view'>
                                <View className='shopnote-thumb-view__browse'>{data[0].read} 阅读</View>
                                <View className='shopnote-thumb-view__praise'>
                                    <van-icon name="good-job" />{data[0].like}
                                </View>
                            </View>
                        </View>

                        <View className='wsc-img-list__cover-bottom'>
                            {data[0].title}
                        </View>

                    </View>
                </View>
                {
                    data.map((item, index) => {
                        let back 
                        if (index > 0) {
                            back = this.renderDetailCard(item)
                        }
                        return back
                    })
                }
            </View>
        }else if (style === 4) {
            return <View className={'cap-showcase-4'}>
                {
                    data.map(item => {
                        return this.renderDetailCard(item)
                    })
                }
            </View>
        }

    }

    renderDetailCard(value) {
        const { style, cardRadius, cardStyle, showLike, showRead, cardFontWeight } = this.props

        return <View className={`cap-shopnote-layout__wrapper${style} withRadius-${cardRadius} border-style-${cardStyle}`}>
            <View className='shopnote-detail-list__wrapper-left'>
                <View className={`shopnote-detail-list__wrapper-left-title ${cardFontWeight ? 'withBold' : ''}`}>{value.title}</View>
                {
                    style===4?<View className={'shopnote-detail-list__wrapper-left-title-desc'}>{value.des}</View>: null
                }
                
                <View className='detail-bottom'>

                    <View className='shopnote-thumb-gray'>
                        <View className='shopnote-thumb-view__browse'>
                            {value.read}
                            阅读
                        </View>
                        <View className='shopnote-thumb-view__praise'>
                            <van-icon name="good-job" />
                            <Text className='like-number'>{value.like}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View className={`shopnote-detail-list__wrapper-right__${style} `}>
                <Image className='img' src={value.url} />
                <View className='wsc-img-list__label'>#{value.noteTag}</View>
            </View>

        </View>

    }

    renderCard(value) {
        const { style, cardRadius, cardStyle, showLike, showRead, cardFontWeight } = this.props

        return <View
            className={`cap-shopnote-layout__wrapper${style} withRadius-${cardRadius} border-style-${cardStyle}`}
        >
            <View className='img-block'>
                <Image className='img' url={value.url}></Image>

                <View className='wsc-img-list__label'>#{value.noteTag}</View>
            </View>
            <View className='shopnote-common-layout__summary'>

                <View className={`shopnote-common-layout__summary-title ${cardFontWeight ? 'withBold' : ''}`}>{value.title}</View>

                {
                    showLike || showRead ?
                        <View className='shopnote-thumb-gray'>

                            <View className='shopnote-thumb-view__browse'>{value.read} 阅读</View>
                            <View className='shopnote-thumb-view__praise'>
                                <van-icon name="good-job" />
                                <Text className='like-number'>{value.like}</Text>
                            </View>

                        </View> :
                        null
                }

            </View>
        </View>


    }

    render() {
        const {
            topic,
            showTitle,
            showBottom
        } = this.props

        return (
            <View className='shopNote'>
                {
                    topic || showTitle ? <View className='top'>
                        <View className='topic'>{topic}</View>
                        {
                            showTitle ? <View className='title-more'>
                                查看更多
                            <van-icon name="arrow" />
                            </View> : null
                        }
                    </View> : null
                }

                {
                    this.renderContent()
                }

                {
                    showBottom ? <View className='shopnote-common-bottom'>
                        查看更多
                        <van-icon name="arrow" />
                    </View>
                        :
                        null
                }

            </View>

        )
    }

}

Index.propTypes = {
    topic: String,
    topicPosition: Number,
    showTitle: Boolean,
    style: Number,
    cardStyle: Number,
    cardRadius: Number,
    cardFontWeight: Number,
    showNote: Boolean,
    showRead: Boolean,
    showLike: Boolean,
    showBottom: Boolean,
    data: Array,
}

Index.defaultProps = {
    topic: 'this is topic',
    topicPosition: 1,
    showTitle: true,
    style: 1,
    cardStyle: 0,
    cardRadius: 0,
    cardFontWeight: 1,
    showNote: true,
    showRead: true,
    showLike: true,
    showBottom: true,
    data: [
        {
            title: '123',
            read: 999,
            like: 888,
            noteTag: 'what aaa',
            des: 'aaa',
            url: ''
        },
        {
            title: '321',
            read: 999,
            like: 888,
            noteTag: 'what aaa',
            des: 'aaa',
            url: ''
        }, {
            title: '444',
            read: 999,
            like: 888,
            noteTag: 'what aaa',
            des: 'aaa',
            url: ''
        }, {
            title: '555',
            read: 999,
            like: 888,
            noteTag: 'what aaa',
            des: 'aaa',
            url: ''
        }
    ]
}

export default Index