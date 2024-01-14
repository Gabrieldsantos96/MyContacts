import { AxiosInstance } from 'axios'
import createAxios from '@lib/axios'

export class BaseAPI {
  axios: AxiosInstance

  constructor() {
    this.axios = createAxios()
  }

  setHeaders(token: string) {
    this.axios.defaults.headers.Authorization = `Bearer ${token}`
  }

  removeHeaders() {
    this.axios.defaults.headers.Authorization = ''
  }
}

const API = new BaseAPI()

export { API }
