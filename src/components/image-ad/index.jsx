import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, Image, Text } from '@tarojs/components'
import PropTypes from 'prop-types';
import jump from '../../utils/jump'
import './index.scss'

export default class ImageAd extends Component {

    static defaultProps = {
        params: {
            image_style: '1',
            corner_type: '1',
            has_shadow: false,
            image_fill_style: '1',
            indicator: '1',
            page_margin: 0,
            image_margin: 0,
            size: '0',
            sub_entry: [],
        }
    }
    state = {
        current: 0
    }
    config = {
        // usingComponents: {
        //     'image': '../vant-weapp/image',
        // },
    }
    imageChange(e) {
        let { current } = e.detail
        this.setState({
            current: current
        })
    }

    onTapImage(item) {
        let { url } = item
        jump({
            url
        })
    }

    hotAreaClick(hotArea) {
        let { url } = hotArea
        jump({
            url
        })
    }

    render() {
        const { image_style, corner_type, has_shadow, image_fill_style,
            indicator, page_margin, image_margin, size, sub_entry } = this.props.params
        let { current } = this.state
        if (image_style === '1' || image_style === '6') {
            return (
                <View className={`cap-image-ad ${has_shadow ? 'cap-image-ad--img-shadow' : ''} cap-image-ad__no-border-width ${corner_type === '2' ? 'cap-image-ad--fillet' : ''}`}>
                    {sub_entry.length != 0 && sub_entry.map((item) => {
                        return (
                            <View
                              key={item.id}
                              onClick={this.onTapImage.bind(this, item)}
                              className='image-ad__swipe__image-container'
                              style={`height:250px;width:calc(100% - ${page_margin * 2}px);margin: 0px ${page_margin}px ${image_margin}px;`}
                            >
                                {image_style === '6' && item.hot_area && item.hot_area.length != 0 && item.hot_area.map((hotArea) => {
                                    return (
                                        <View
                                          key={hotArea.url}
                                          onClick={this.hotAreaClick.bind(this, hotArea)}
                                          style={`background-color: cyan;position: absolute; width: ${hotArea.width}px; height: ${hotArea.height}px; top: ${hotArea.top}px; left: ${hotArea.left}px;`}
                                        />
                                    )
                                })}
                                {(image_style === '1' && item.title.length > 0) && <View className='cap-image-ad__title' style={`text-align:${image_style === '1' ? 'center' : ''}`}>{item.title}</View>}
                                <Image src={item.image_url} mode={`${image_fill_style === '1' ? 'aspectFill' : 'aspectFit'}`} />
                            </View>
                        )
                    })}
                </View >
            )
        }
        let displayMultipleItems = 1;
        let height = 250;
        switch (image_style) {
            case '3':
                displayMultipleItems = 1.07
                height = 186
                break;
            case '4':
                displayMultipleItems = 2.5
                height = 86
                break;
            case '5':
                {
                    if (size === '0') {
                        displayMultipleItems = 3.2
                        height = 64
                    } else if (size === '1') {
                        displayMultipleItems = 4.2
                        height = 48
                    } else if (size === '2') {
                        displayMultipleItems = 5.2
                        height = 39
                    }
                }
                break;

            default:
                break;
        }
        return (
            <View style={`margin: 0px ${page_margin}px;`} className={`cap-image-ad ${has_shadow ? 'cap-image-ad--img-shadow' : ''} cap-image-ad__no-border-width ${corner_type === '2' ? 'cap-image-ad--fillet' : ''}`}>
                <Swiper
                  autoplay={image_style === '2' ? true : false}
                  style={`height:${height}px;`}
                  onChange={this.imageChange.bind(this)}
                  indicatorDots={indicator === '1' ? true : false}
                  indicatorActiveColor='#f44'
                  indicatorColor='#c4877e'
                  displayMultipleItems={displayMultipleItems}
                >
                    {sub_entry.length != 0 && sub_entry.map((item) => {
                        return (
                            <Swiper-item key={item.id}>
                                <View
                                  onClick={this.onTapImage.bind(this, item)}
                                  className='image-ad__swipe__image-container'
                                  style={`width:calc(100% - ${image_style === '2' ? 0 : image_margin}px);margin: 0 ${image_margin}px 0 0;`}
                                >
                                    {item.title.length > 0 && <View className='cap-image-ad__title'>{item.title}</View>}
                                    <Image src={item.image_url} mode={`${image_fill_style === '1' ? 'aspectFill' : 'aspectFit'}`} />
                                </View>
                            </Swiper-item>
                        )
                    })}
                </Swiper>

                {image_style === '2' && <View className={`cap-indicator cap-indicator--${indicator}`}>
                    {(indicator === '2' && sub_entry.length != 0) && sub_entry.map((item, index) => {
                        return (
                            <View
                              key={item.id}
                              className={`cap-indicator__dot ${index == current ? 'active' : ''}`}
                            />
                        )
                    })}
                    {(indicator === '3' || indicator === '4') &&
                        <Text
                          className='cap-indicator__dot active'
                        >{current + 1}
                        </Text>}
                    {(indicator === '3' || indicator === '4') ? ('/' + (sub_entry.length + 1)) : ''}
                </View>}
            </View >
        )
    }
}
ImageAd.propTypes = {
    image_style: PropTypes.string,
    corner_type: PropTypes.string,
    has_shadow: PropTypes.bool,
    image_fill_style: PropTypes.string,
    indicator: PropTypes.string,
    page_margin: PropTypes.number,
    image_margin: PropTypes.number,
    size: PropTypes.string,
    sub_entry: PropTypes.array,
};