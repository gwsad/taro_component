import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import jump from '@utils/jump';
import './index.scss'

export default class Cube extends Component {
    // 应用全局样式类
    static options = {
        addGlobalClass: true
    }

    static defaultProps = {
        data: {
            layout_width: 2,
            layout_height: 1,
            show_method: 0,
            page_margin: 10,
            border_width: 10,
            sub_entry: [
                {
                    width: 1,
                    height: 1,
                    x: 0,
                    y: 0,
                    image_url: "",
                    link_title: "",
                    link_type: "",
                    link_url: "",
                }
            ],
        },
    }



    componentWillMount() {
        // 获取设备宽度
        const cubeWidth = Taro.getSystemInfoSync().screenWidth
        console.log(cubeWidth)
        this.setState({
            cubeWidth
        })
    }

    navigatorTo(data) {
        console.log(data)
        if (data.link_url) {
            jump({
                url: data.link_url,
                payload: {
                    data
                }
            })
        }
    }

    render() {
        const { data } = this.props
        const { cubeWidth } = this.state
        // 计算容器大小
        let count = data.show_method + 2
        let cubeWidthReal = cubeWidth - data.page_margin * 2 + data.border_width
        let cubeHeightReal
        let margin = -data.border_width / 2
        let space = data.page_margin * 2 - data.border_width
        // 图片宽高
        let itemWidth = 0
        let itemHeight = 0
        if (data.show_method === 0) {
            // 一行二个
            itemWidth = (cubeWidthReal - data.border_width * 2) / count
            itemHeight = itemWidth / 1.77
        } else if (data.show_method === 1) {
            // 一行三个
            itemWidth = (cubeWidthReal - data.border_width * 2 - data.border_width) / count
            itemHeight = itemWidth / 1.77
        } else if (data.show_method === 2) {
            // 一行四个
            itemWidth = (cubeWidthReal - data.border_width * 3 - data.page_margin * 15 / 18) / count
            itemHeight = itemWidth / 1.77
        } else if (data.show_method === 3 || data.show_method === 4 || data.show_method === 5 || data.show_method === 6) {
            // 3两左两右
            // 4一左二右
            // 5一上两下
            // 6一左三右
            cubeHeightReal = cubeWidthReal
            itemWidth = (cubeWidthReal - data.border_width * 2) / 2
            itemHeight = itemWidth
        } else if (data.show_method === 7) {
            //自定义模式
            cubeHeightReal = cubeWidthReal
        }

        return <View className='com-item active com-item--cube_v3 com-item-deletable'>
            <View className="cap-cube-wrap">
                {/* 一行二个, 三个， 四个 */}
                {
                    (data.show_method === 0 || data.show_method === 1 || data.show_method === 2) &&
                    <View className="cap-cube" style={`margin: ${margin}px; width: ${cubeWidthReal}px; height: ${itemHeight + space}px;`}>
                        {
                            data.sub_entry.slice(0, count).map((item, index) => {
                                return <View className="cap-cube__item" style={`left: ${(itemWidth + data.border_width) * index + data.page_margin}px; top: 0px; height: ${itemHeight}px; width: ${itemWidth}px; margin: ${data.border_width / 2}px; background-image: url(${item.image_url});`} key={item} onClick={this.navigatorTo.bind(this, item)}></View>
                            })
                        }
                    </View>
                }

                {/* 两左两右 */}
                {
                    (data.show_method === 3) &&
                    <View className="cap-cube" style={`margin: ${margin}px; width: ${cubeWidthReal}px; height: ${cubeHeightReal}px;`}>
                        {
                            data.sub_entry.slice(0, 4).map((item, index) => {
                                return <View className="cap-cube__item" style={`left: ${(index % 2 === 0) ? data.page_margin : (cubeWidthReal / 2 + data.page_margin)}px; top: ${Math.floor(index / 2) * (itemHeight + data.border_width)}px; height: ${itemHeight}px; width: ${itemWidth}px; margin: ${-margin}px; background-image: url(${item.image_url});`} key={item} onClick={this.navigatorTo.bind(this, item)}></View>
                            })
                        }
                    </View>
                }
                {/* 一左两右 */}
                {
                    (data.show_method === 4) &&
                    <View className="cap-cube" style={`margin: ${margin}px; width: ${cubeWidthReal}px; height: ${cubeHeightReal}px;`}>
                        {
                            data.sub_entry.slice(0, 3).map((item, index) => {
                                return <View className="cap-cube__item" style={`left: ${(index === 0) ? data.page_margin : (cubeWidthReal / 2 + data.page_margin)}px; top: ${Math.floor(index / 2) * (itemHeight + data.border_width)}px; height: ${index === 0 ? (itemHeight * 2 + data.border_width) : itemHeight}px; width: ${itemWidth}px; margin: ${-margin}px; background-image: url(${item.image_url});`} key={item} onClick={this.navigatorTo.bind(this, item)}></View>
                            })
                        }
                    </View>
                }
                {/* 一上两下 */}
                {
                    (data.show_method === 5) &&
                    <View className="cap-cube" style={`margin: ${margin}px; width: ${cubeWidthReal}px; height: ${cubeHeightReal}px;`}>
                        {
                            data.sub_entry.slice(0, 3).map((item, index) => {
                                return <View className="cap-cube__item" style={`left: ${(index % 2 === 0) ? data.page_margin : (cubeWidthReal / 2 + data.page_margin)}px; top: ${index === 0 ? 0 : (itemHeight + data.border_width)}px; height: ${itemHeight}px; width: ${index === 0 ? (itemWidth * 2 + data.border_width) : itemWidth}px; margin: ${-margin}px; background-image: url(${item.image_url});`} key={item} onClick={this.navigatorTo.bind(this, item)}></View>
                            })
                        }
                    </View>

                }
                {/* 一左三右 */}
                {
                    (data.show_method === 6) &&
                    <View className="cap-cube" style={`margin: ${margin}px; width: ${cubeWidthReal}px; height: ${cubeHeightReal}px;`}>
                        {
                            data.sub_entry.slice(0, 4).map((item, index) => {
                                return <View className="cap-cube__item" style={`left: ${index === 0 ? data.page_margin : (index === 3 ? (cubeWidthReal / 2 + data.page_margin + itemWidth / 2 + data.border_width / 2) : (cubeWidthReal / 2 + data.page_margin))}px; top: ${Math.floor(index / 2) * (itemHeight + data.border_width)}px; height: ${index === 0 ? (itemHeight * 2 + data.border_width) : itemHeight}px; width: ${index > 1 ? ((itemWidth - data.border_width) / 2) : itemWidth}px; margin: ${-margin}px; background-image: url(${item.image_url});`} key={item} onClick={this.navigatorTo.bind(this, item)}></View>
                            })
                        }
                    </View>
                }
                {/* 自定义 */}
                {
                    (data.show_method === 7) &&
                    <View className="cap-cube-wrap">
                        <View class="cap-cube" style={`margin: ${-data.border_width}rpx; width: ${cubeWidthReal}px; height: ${cubeHeightReal}px;`}>
                            {
                                data.sub_entry.map((item) => {
                                    return <View class="cap-cube__item" style={`left: ${item.x * 2}rpx; top: ${item.y * 2}rpx; height: ${item.height * 2}rpx; width: ${item.width * 2}rpx; margin: ${data.border_width}rpx; background-image: url(${item.image_url});`} key={item} onClick={this.navigatorTo.bind(this, item)}></View>
                                })
                            }
                        </View>
                    </View>
                }
            </View>
        </View>
    }
}
Cube.PropTypes = {
    data: {
        sub_entry: {
            width: PropTypes.number,
            height: PropTypes.number,
            x: PropTypes.number,
            y: PropTypes.number,
            image_url: PropTypes.string,
            link_title: PropTypes.string,
            link_type: PropTypes.string,
            link_url: PropTypes.string,
        },
        layout_width: PropTypes.number,
        layout_height: PropTypes.number,
        show_method: PropTypes.number,
        page_margin: PropTypes.number,
        border_width: PropTypes.number
    },
}