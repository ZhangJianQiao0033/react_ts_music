import type {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'

export interface HYRequestInterceptors {
  requestSuccessFn?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (
    res: AxiosResponse
  ) => AxiosResponse | Promise<AxiosResponse>
  responseFailureFn?: (err: any) => any
}

export interface HYRequestConfig<T = any> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors
  showLoading?: boolean
}
