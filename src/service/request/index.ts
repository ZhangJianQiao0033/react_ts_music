import axios, { AxiosResponse } from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import type { HYRequestConfig, HYRequestInterceptors } from './type'

class HYRequest {
  instance: AxiosInstance

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return Promise.reject(err) // 这里用reject来传递错误
      }
    )

    // 针对特定的hyRequest实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  // 封装网络请求的方法
  request<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<T, any>(config)
        .then((res) => {
          resolve(res.data as T)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(
    url: string,
    params?: any,
    config?: HYRequestConfig<T>
  ): Promise<T> {
    return this.request({ ...config, method: 'GET', url, params })
  }
  post<T = any>(
    url: string,
    data?: any,
    config?: HYRequestConfig<T>
  ): Promise<T> {
    return this.request({ ...config, method: 'POST', url, data })
  }
  delete<T = any>(
    url: string,
    params?: any,
    config?: HYRequestConfig<T>
  ): Promise<T> {
    return this.request({ ...config, method: 'DELETE', url, params })
  }
  patch<T = any>(
    url: string,
    data?: any,
    config?: HYRequestConfig<T>
  ): Promise<T> {
    return this.request({ ...config, method: 'PATCH', url, data })
  }
}

export default HYRequest
