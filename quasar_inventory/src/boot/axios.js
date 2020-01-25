import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://172.32.1.247:5000'
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}
export { axiosInstance }
