import Taro from '@tarojs/taro'

const PAGE_WEBVIEW = '/pages/webview/index'

const app = Taro.getApp()
/**
 * event: 阿拉丁自定义事件的名字
 * eventData 阿拉丁自定义事件要传参
 */
export default function jump(options) {
  // event：自定义事件的名称， data：自定义事件的参数
  const { url, title = '', payload = {}, method = 'navigateTo', event = '', eventData = {} } = options
  try {
    if (event) {
      app.neststat.sendEvent(event, eventData)
    }
  } catch (error) {
    console.log(error)
  }
  if (/^https?:\/\//.test(url)) {
    Taro[method]({
      url: urlStringify(PAGE_WEBVIEW, { url, title })
    })
  } else if (/^\/pages\//.test(url)) {
    // TODO H5 不支持 switchTab，暂时 hack 下
    if (process.env.TARO_ENV === 'h5' && method === 'switchTab') {
      Taro.navigateBack({ delta: Taro.getCurrentPages().length - 1 })
      setTimeout(() => { Taro.redirectTo({ url }) }, 100)
      return
    }

    Taro[method]({
      url: urlStringify(url, payload)
    })
  }
}

function urlStringify(url, payload, encode = true) {
  const arr = Object.keys(payload).map(key =>
    `${key}=${encode ? encodeURIComponent(payload[key]) : payload[key]}`
  )

  // NOTE 注意支付宝小程序跳转链接如果没有参数，就不要带上 ?，否则可能无法跳转
  return arr.length ? `${url}?${arr.join('&')}` : url
}
