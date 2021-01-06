import Taro, { Component} from '@tarojs/taro'
import { View, Image, Text} from '@tarojs/components'
import PropTypes from 'prop-types';
import './index.scss'


class Index extends Component {
    static defaultProps = {
        data:{
            shop_name:'意大利陶瓷-苏州店',
            shop_desc:'在线支付满150减30，满100减20',
            shop_label:['全部商品999','上新30','上新30'],
            background_image:'https://img.yzcdn.cn/upload_files/2020/03/05/FoYmxWvzb3k6hjrj_zwA2rbHQnU-.jpg',
            logo_style:'0',
            logo_url:'https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png',
        }
    }
    constructor (){
        super(...arguments)
    }
    

    render () {
        const data = this.props.data
        return (
            <View className='shop-banner'>
                {data.store_info_style === '0' && <View className={`shop-${data.store_info_style}`}>
                    <Image className='img-bg' src={data.background_image} />
                    <View className='cap-shop-banner__inner'>
                        <View className='cap-shop-banner__content'>
                            <View style={`border-radius:${data.logo_style === '1' ? '50%' : ''}`} className='cap-shop-banner__logo'>
                                <Image src={data.logo_url} />
                            </View>
                            <View className='cap-shop-banner__right-content'>
                                <View className='h3'>{data.shop_name}</View>
                                <View className='cap-shop-banner__reduce-content'>
                                    <Text className='cap-shop-banner__reduce-content-tag'>满减</Text>
                                    <Text className='cap-shop-banner__reduce-content-text'>{data.shop_desc}</Text>
                                    <Text className='icon'>></Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>}
                {data.store_info_style === '1' && <View className={`shop-${data.store_info_style}`}>
                    <View className='cap-shop-banner__cover'>
                        <Image className='img-bg' src={data.background_image} />
                    </View>
                    <View className='cap-shop-banner__inner'>
                        <View className='cap-shop-banner__content'>
                            <View style={`border-radius:${data.logo_style === '1' ? '50%' : ''}`} className='cap-shop-banner__logo'>
                                <Image src={data.logo_url} />
                            </View>
                            <View className='cap-shop-banner__right-content'>  
                                <View className='cap-shop-banner__right-content-title--middle'>{data.shop_name}</View>
                                <View className='cap-shop-banner__sum-content'>
                                    {data.shop_label.map((item,index)=>(
                                        <Text key={index}>{item}</Text>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>}
                {data.store_info_style === '2' && <View className={`shop-${data.store_info_style}`}>
                    <View className='cap-shop-banner__cover'>
                        <Image className='img-bg' src={data.background_image} />
                    </View>
                    <View className='cap-shop-banner__inner'>
                        <View className='cap-shop-banner__content'>
                            <View style={`border-radius:${data.logo_style === '1' ? '50%' : ''}`} className='cap-shop-banner__logo'>
                                <Image src={data.logo_url} />
                            </View>
                            <View className='cap-shop-banner__right-content'>
                                <View className='h3'>{data.shop_name}</View>
                                <View className='cap-shop-banner__sum-content'>
                                    {data.shop_label.map((item,index)=>(
                                        <Text key={index}>{item}</Text>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>}
                {data.store_info_style === '3' && <View className={`shop-${data.store_info_style}`}>
                    <View className='cap-shop-banner__cover'>
                        <Image className='img-bg' src={data.background_image} />
                    </View>
                    <View className='cap-shop-banner__inner'>
                        <View className='cap-shop-banner__content'>
                            <View style={`border-radius:${data.logo_style === '1' ? '50%' : ''}`} className='cap-shop-banner__logo'>
                                <Image src={data.logo_url} />
                            </View>
                            <View className='cap-shop-banner__right-content'>
                                <View className='h3'>{data.shop_name}</View>
                                <View className='cap-shop-banner__sum-content'>
                                    {data.shop_label.map((item,index)=>(
                                        <Text key={index}>{item}</Text>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>}
                {data.store_info_style === '4' && <View className={`shop-${data.store_info_style}`}>
                    <View className='cap-shop-banner__cover'>
                        <Image className='img-bg' src={data.background_image} />
                    </View>
                    <View className='cap-shop-banner__inner'>
                        <View className='cap-shop-banner__content'>
                            <View style={`border-radius:${data.logo_style === '1' ? '50%' : ''}`} className='cap-shop-banner__logo'>
                                <Image src={data.logo_url} />
                            </View>
                            <View className='cap-shop-banner__right-content'>
                                <View className='h3'>{data.shop_name}</View>
                                <View className='cap-shop-banner__sum-content'>
                                    {data.shop_label.map((item,index)=>(
                                        <Text key={index}>{item}</Text>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>}
            </View>
        )
    }
}

Index.propTypes = {
    shop_name: PropTypes.string,
    shop_desc: PropTypes.string,
    shop_label: PropTypes.string,
    background_image: PropTypes.string,
    logo_style: PropTypes.string,
    logo_url: PropTypes.string,
    store_info_style: PropTypes.string
};
  

export default Index
