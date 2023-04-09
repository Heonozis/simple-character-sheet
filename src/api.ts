import { API_URL } from './constants'
import axios from 'axios'

export default {
  get: async (path: string) => {
    return await axios.get(`${API_URL}${path}`)
  },
  post: async (path: string, data: {}) => {
    return await axios.post(`${API_URL}${path}`, data)
  },
  patch: async (path: string, data: {}) => {
    return await axios.patch(`${API_URL}${path}`, data)
  },
}