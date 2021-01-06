import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types';
import './index.scss'

export default class Divider extends Component {

    static defaultProps = {
        params: {
            type: "white",
            height: 30,
            line_type: "solid",
            color: "#e5e5e5",
            has_padding: false,
            content: '',
            content_size: 16,
            content_position: 'center',
        }
    }
    config = {
        usingComponents: {
            'van-divider': '../vant-weapp/divider',
        },
    }

    onClickLink() {
        const { link } = this.props.params;
        Taro.navigateTo(link);
    }

    render() {
        const { type, height, line_type, color, has_padding, content, content_position, content_size } = this.props.params
        if (type === 'white') {
            return (
                <View className='cap-white' style={`height: ${height}px;`} />
            )
        }
        return (
            <View style={`padding: 0 ${has_padding ? '15' : ''}px`}>
                <van-divider
                  contentPosition={`${content.length === 0 ? '' : `${content_position}`}`}
                  hairline
                  fontSize={content_size}
                  custom-style={`color: ${color};border-color: ${color};border-style: ${line_type}`}
                >{content}</van-divider>
            </View >
        )
    }

}
Divider.propTypes = {
    type: PropTypes.string,
    height: PropTypes.number,
    line_type: PropTypes.string,
    color: PropTypes.string,
    has_padding: PropTypes.bool,
    content: PropTypes.string,
    content_position: PropTypes.string,
};