import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Slider } from '@tarojs/components'
import PropTypes from 'prop-types';
import TimeFormat from './time-format'
import './index.scss'

export default class AudioZc extends Component {

    static defaultProps = {
        params: {
            audio: '',
            avatar: '',
            bubble: 'left',
            loop: '0',
            style: '0',
            title: '',
            type: '',
            reload: ''
        }
    }
    state = {
        duration: '',
        isPlay: false,
        currentTime: '00:00',
        sliderValue: 0
    }
    componentDidMount() {
        this.zcAudio = Taro.createInnerAudioContext();
        let { audio, loop } = this.props.params
        this.zcAudio.onCanplay(() => {
            this.zcAudio.duration
            setTimeout(() => {
                this.setState({
                    duration: TimeFormat(this.zcAudio.duration)
                })
            }, 1000);
        })
        this.zcAudio.src = audio
        this.zcAudio.loop = loop === '1' ? true : false

        this.zcAudio.onPlay(() => {
            this.setState({
                isPlay: true
            })
        })
        this.zcAudio.onStop(() => {
            this.setState({
                isPlay: false
            })
        })
        this.zcAudio.onEnded(() => {
            this.setState({
                isPlay: false
            })
        })
        this.zcAudio.onTimeUpdate(() => {
            this.setState({
                currentTime: TimeFormat(this.zcAudio.currentTime),
                sliderValue: this.zcAudio.currentTime * 100 / this.zcAudio.duration
            })
        })
    }

    componentWillUnmount() {
        this.zcAudio.destroy()
    }
    config = {
        usingComponents: {
            'van-icon': '../vant-weapp/icon/index'
        },
    }
    // 音频开始播放
    audioDidClick() {
        let { isPlay } = this.state

        if (!isPlay) {
            this.zcAudio.play()
        } else {
            let { reload } = this.props.params
            if (reload === '1') {
                this.zcAudio.stop()
                this.setState({
                    sliderValue: 0,
                    currentTime: '00:00',
                    isPlay: false
                })
            } else {
                this.zcAudio.pause()
                this.setState({
                    isPlay: false
                })
            }
        }
    }

    // slider 拖动改变音频的播放位置
    sliderChange(e) {
        console.log(e)
        let { value } = e.detail

        this.zcAudio.seek(parseInt(value) * this.zcAudio.duration / 100)
        this.zcAudio.play()
    }
    render() {
        const { avatar, bubble, style, title } = this.props.params
        let { duration, isPlay, currentTime, sliderValue } = this.state
        return (
            <View className='cap-audio cap-audio-status-stop' style=''>
                {/* 微信对话框样式 */}
                {style === '1' && <View className={`cap-audio-weixin ${bubble === 'left' ? '' : 'cap-audio-weixin--right'}`}>
                    <View className='cap-audio-logo'>
                        <Image src={avatar} mode='aspectFill' />
                    </View>
                    <View className='cap-audio-bar' onClick={this.audioDidClick.bind(this)}>
                        <Image
                          src={`${bubble === 'left' ? 'https://img.yzcdn.cn/v2/image/wap/audio/player.gif' : 'https://img.yzcdn.cn/v2/image/wap/audio/green_player.gif'}`}
                          className='cap-audio-animation'
                          style={`display: ${isPlay ? '' : 'none'} ;`}
                          mode='aspectFill'
                        />
                        <View className='cap-audio-animation-static'></View>
                        <Image mode='aspectFill' src='https://img.yzcdn.cn/v2/image/wap/common/loading.gif'  className='cap-audio-loading' style='display: none;' />
                    </View>
                    <View className='cap-audio-time'>{duration}</View>
                </View>}
                {/* 播放器 */}
                {style === '2' && <View className='cap-audio--music'>
                    <View className='cap-audio-btn' onClick={this.audioDidClick.bind(this)}>
                        <van-icon name={`${isPlay ? 'pause' : 'play'}`} color='#4b0' size={44} />
                    </View>
                    <View className='cap-audio-info'>
                        <View className='cap-audio-title'>{title}</View>
                        <Image
                          src='https://img.yzcdn.cn/v2/image/wap/common/loading.gif'
                          className='cap-audio-loading'
                          style='display: none;'
                          mode='aspectFill'
                        />
                        <View className='cap-slider'>
                            <Slider
                              value={sliderValue}
                              blockSize={12}
                              onChange={this.sliderChange.bind(this)}
                            />
                            <Text className='cap-audio-time'>{currentTime}</Text>
                            <Text className='cap-audio-duration'>{duration}</Text>
                        </View>
                    </View>
                </View>
                }
                {/* 简易播放器 */}
                {style === '3' && <View className='cap-audio--simple'>
                    <View className='cap-audio--simple-box' onClick={this.audioDidClick.bind(this)}>
                        <View className='cap-audio--simple-btn'>
                            <van-icon name={`${isPlay ? 'pause-circle' : 'play-circle'}`} color='black' size={26} />
                        </View>
                        {/* <View className='cap-audio--simple-btn' style='background-image: url(https://img.yzcdn.cn/public_files/2018/06/15/1899db36c1d9105273942b4db3f113f1.png);' /> */}
                    </View>
                    <View className='cap-audio--simple-title-wrapper'>
                        <View className='cap-audio--simple-title'>{title}</View>
                    </View>
                </View>
                }
            </View>
        )
    }

}
AudioZc.propTypes = {
    audio: PropTypes.string,
    avatar: PropTypes.string,
    bubble: PropTypes.string,
    loop: PropTypes.string,
    style: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    reload: PropTypes.string,
};