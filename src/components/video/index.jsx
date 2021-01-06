import Taro, { Component } from '@tarojs/taro'
import { View, Video } from '@tarojs/components'

import './index.scss'


const Index = (props) => {
	const {url,poster} = props
	return (
		<View>
			<Video
				src={url}
				controls
				autoplay={false}
				poster={poster}
				initialTime='0'
				id='video'
				loop={false}
				muted={false}
			/>
		</View>
	)
}

Index.defaultProps = {
	url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
	poster: 'http://misc.aotu.io/booxood/mobile-video/cover_900x500.jpg'
}

Index.propTypes = {
	url: String,
	poster: String
}

export default Index