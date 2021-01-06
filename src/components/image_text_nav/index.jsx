import Taro, { Component} from '@tarojs/taro'
import { View, ScrollView, Image} from '@tarojs/components'
import PropTypes from 'prop-types';
import './index.scss'

class Index extends Component {
    static defaultProps = {
        data:{
            background_color:'black',
            border_width:1, // 右边框宽度
            color:'red',
            count:4,
            show_method:'1', // 展示图片导航还是文字导航
            slide_setting:'0', // 固定还是滑动
            sub_entry:[
                {
                    url:"2222",
                    image_height:66,
                    image_url:'https://img.yzcdn.cn/public_files/2017/07/11/f2a0a05d5a801cb51ecbc0710e6947fb.png!small.webp',
                    image_width:66,
                    title:'导航一',
                    type:'image_ad_selection'
                },
                {
                    url:"2222",
                    image_url:'https://img.yzcdn.cn/public_files/2017/07/11/f2a0a05d5a801cb51ecbc0710e6947fb.png!small.webp',
                    title:'导航二',
                    type:'image_ad_selection'
                },
                {
                    url:"2222",
                    image_url:'https://img.yzcdn.cn/public_files/2017/07/11/f2a0a05d5a801cb51ecbc0710e6947fb.png!small.webp',
                    title:'导航三',
                    type:'image_ad_selection'
                }
                ,
                {
                    url:"2222",
                    image_url:'https://img.yzcdn.cn/public_files/2017/07/11/f2a0a05d5a801cb51ecbc0710e6947fb.png!small.webp',
                    title:'导航三',
                    type:'image_ad_selection'
                }
            ]
        }
    }
    constructor (){
        super(...arguments)
    }
    
    // 点击事件
    click (url) {
        Taro.navigateTo({
            url: url
        })
    }

    render () {
        const data = this.props.data
        return (
            <View style={`height:${data.show_method === '0' ? 76 : 38}px;`} className='text-nav' >
                {data.show_method === '0' && <ScrollView style={`background-color: ${data.background_color}`} enableFlex={data.slide_setting === '0' ? true : false} scrollX={data.slide_setting === '0' ? false : true} className={`img-common ${data.slide_setting === '0' ? 'img-flex' : ''}`} >
                    {data.sub_entry.map((item,index)=>(
                        <View key={index} className='img-item' onClick={this.click.bind(this,item.url)} style={`color:${data.color};${data.slide_setting === '1' ? 'width:80px;' : ''}`}>
                            {true && <Image style={`width:${data.sub_entry[0].image_width}px;height:${data.sub_entry[0].image_height}px;`} src={item.image_url} />}
                            <View>{item.title}</View>
                        </View>
                    ))}
                    <View className='img-bg' style={`top:${data.sub_entry[0].image_height + 10}px;`}></View>
                </ScrollView>}
                {data.show_method !== '0' && <ScrollView style={`background:${data.background_color};`} enableFlex={data.slide_setting === '0' ? true : false} scrollX={data.slide_setting === '0' ? false : true} className={`common-text-nav ${data.slide_setting === '0' ? 'flex' : ''}`}>
                    {data.sub_entry.map((item,index)=>(
                        <View key={index} className='text-item' onClick={this.click.bind(this,item.url)} style={`color:${data.color}`}>
                            <View style={`width:${data.slide_setting === '0' && data.count <= 4 ? (375 / data.count) : ''}px`}>{item.title}</View>
                            <View className='border' style={`width:${data.border_width}px;`}></View>
                        </View>
                    ))}
                </ScrollView>}
            </View>
        )
    }
}

Index.propTypes = {
    background_color: PropTypes.string,
    border_width: PropTypes.number,
    color: PropTypes.string,
    count: PropTypes.number,
    show_method: PropTypes.string, 
    slide_setting: PropTypes.string,
    sub_entry:[
        {
            url: PropTypes.string,
            image_height: PropTypes.number,
            image_url:PropTypes.string,
            image_width: PropTypes.number,
            title: PropTypes.string,
            type:PropTypes.string,
        }
    ]
};

export default Index
