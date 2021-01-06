import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

export default class Search extends Component {
    // 应用全局样式类
    static options = {
        addGlobalClass: true
    }

    static defaultProps = {
        data: {
            color: "#f9f9f9", //背景颜色
            hot_search_keys: [],
            hot_search_keys_new: [],
            position_type: "0", //显示位置：0: "正常模式", 1: "滚动至顶部固定"
            position_show_method: "0", //展示模式： 0: "常驻模式", 1: "上滑消失下滑出现"
            border_style_height: 40,
            border_style_method: "0", //框体样式：0: "方形", 1: "圆形"
            border_style_color: "#fff", //框体颜色
            text_align_method: "0" //文本位置：0: "居左", 1: "居中"
        },
        border_style_method_map: {
            // 框体样式
            0: "square",
            1: "round"
        },
        text_align_method_map: {
            // 文本位置
            0: "left",
            1: "center"
        },
        disappear: false,
    }

    config = {
        usingComponents: {
            "van-search": "../vant-weapp/search/index"
        }
    }
    
    onSearch(e){
        this.props.onCSearch(e)
    }

    render() {
        const { data, border_style_method_map, text_align_method_map, disappear } = this.props

        return (
            !disappear&&<View className={`com-item active com-item--notice com-item-deletable search-wrap ${data.position_type === '1' ? 'fixed':''}`}>
                <van-search
                    value={data.hot_search_keys[0]}
                    maxlength='15'
                    placeholder="请输入搜索关键词"
                    background={data.color}
                    shape={border_style_method_map[data.border_style_method]}
                    input-align={text_align_method_map[data.text_align_method]}
                    custom-style={`background: ${data.border_style_color}; width:100%;padding: ${(data.border_style_height - 28) / 2}px 10px`}
                    onSearch={(e)=>{
                        this.onSearch(e)
                    }}
                />
                {
                    data.hot_search_keys_new.length > 0 && <View className='tag-list'>
                        <View className='hot-title'>热门搜索</View>
                        {
                            data.hot_search_keys_new.map((item) => {
                                return <Text className='tag-item' key={item} onClick={
                                    ()=>{
                                        this.onSearch(item)
                                        this.props.data.hot_search_keys.splice(0, 1, item)
                                        this.setState({
                                            data
                                        })
                                    }
                                }>{item}</Text>
                            })
                        }
                    </View>
                }
            </View>
        );
    }    
}

Search.PropTypes = {
    data: {
        color: PropTypes.string,
        hot_search_keys: PropTypes.array,
        hot_search_keys_new: PropTypes.array,
        position_type: PropTypes.string, //显示位置：0: "正常模式", 1: "滚动至顶部固定"
        position_show_method: PropTypes.string, //展示模式： 0: "常驻模式", 1: "上滑消失下滑出现"
        border_style_height: PropTypes.number,
        border_style_method: PropTypes.string, //框体样式：0: "方形", 1: "圆形"
        border_style_color: PropTypes.string, //框体颜色
        text_align_method: PropTypes.string
    }
}