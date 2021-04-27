import { AxiosRequestConfig } from './types'

export default function xhr(config: AxiosRequestConfig): void {
  // TODO
  const { url, data = null, method = 'GET' } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.send(data)
}
