import axios from 'axios'

const ENV = 'http://localhost:3001'

export default function createAxios() {
  const Api = axios.create({
    baseURL: ENV
  })

  return Api
}
