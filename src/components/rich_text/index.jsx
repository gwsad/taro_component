import Taro from '@tarojs/taro'
import { View,RichText } from '@tarojs/components'
import PropTypes from 'prop-types';
import WxParse from '../wxParse/wxParse'
import '../wxParse/wxParse.scss'
import './index.scss'

export default class ParseComponent extends Taro.Component {
    defaultProps = {
        mark: ""
    }
    componentDidMount() { }
    render() {
        //在这里进行转化
        if (this.props.data) {
            let domText = this.props.data;
            WxParse.wxParse('domText', 'html', domText, this.$scope, 5);
        }
        return (
            <View>
                <RichText nodes={this.props.data}></RichText>
            </View>
        )
    }
}
ParseComponent.propTypes = {
    mark: PropTypes.string
};