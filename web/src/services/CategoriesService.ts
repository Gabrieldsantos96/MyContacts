/* v8 ignore next 3 */
import { API } from '@utils/config/api'
import { AxiosInstance } from 'axios'

class CategoriesService {
  main: AxiosInstance

  constructor(api) {
    const { axios } = api
    this.main = axios
  }

  async listCategories() {
    return await this.main.get('/categories')
  }
}

export default new CategoriesService(API)
