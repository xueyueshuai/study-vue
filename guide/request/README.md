# 网络请求

## axios


`/src/utils/request.js`

``` js
import axios from 'axios'
import {getToken, logoutSuccess, showErrorMsg as noti} from '@/utils/func'
import config from '@/config'
import i18n from "@/components/lang";

// ------- start -------------
let getBaseUrl = () => {
  return config.apiHost
}

let showErrorMsg = (data) => {
  noti(data.message, data.description)
}
// ------- end -------------

const myAxiosInstance = axios.create({
  // timeout: 6000,
})

myAxiosInstance.interceptors.request.use(
  requestConfig => {
    requestConfig.baseURL = getBaseUrl()

    let token = getToken()
    if (token) {
      requestConfig.headers['Xzd-Token'] = token;
    }

    //数据导出
    if (requestConfig.data && requestConfig.data.exportExcel == true) {
      requestConfig.responseType = 'blob'
    }

    // return requestConfig; 或 return Promise.resolve(requestConfig);
    return Promise.resolve(requestConfig);
  },
  err => {
    showErrorMsg({
      message: i18n.t('message.title'),
      description: i18n.t('message.requestError')
    })
    return Promise.reject(err);
  }
)

myAxiosInstance.interceptors.response.use(
  response => {

    if (response.status < 500) {
      let res = response.data;

      let code = response.headers['xzd-code'] * 1
      let msg = decodeURIComponent(response.headers['xzd-msg'] || '')
      let fileName = response.headers['xzd-file-name'] || ''

      switch (code) {
        case 200:
          if (response.config.data && fileName && response.config.data.includes('"exportExcel":true')) {
            return response
          } else {
            return response.data
          }
          break;

        case 201:
          showErrorMsg({
            message: i18n.t('message.title'),
            description: msg || i18n.t('message.systemError'),
            style: {
              whiteSpace: "pre-wrap"
            }
          })
          return Promise.reject(res)
          break;

        case 202:
          showErrorMsg({
            message: i18n.t('message.title'),
            description: i18n.t('message.invalidToken')
          })
          logoutSuccess()
          return Promise.reject(res)
          break;

        default:
          showErrorMsg({
            message: i18n.t('message.title'),
            description: i18n.t('message.codeNotExists')
          })
          return Promise.reject(i18n.t('message.serverError'))
          break;
      }

    } else {
      showErrorMsg({
        message: i18n.t('message.title'),
        description: i18n.t('message.serverResponseError')
      })
    }
  },
  error => {
    showErrorMsg({
      message: i18n.t('message.title'),
      description: i18n.t('message.serverResponseError')
    })
    return Promise.reject(error)
  }
)

export default myAxiosInstance

```