const apiBase = import.meta.env.VITE_API_URL
import axios from 'axios'

export default {
  get: async (path: string) => {
    return await axios.get(`${apiBase}${path}`)
  },
  post: async (path: string, data: {}) => {
    return await axios.post(`${apiBase}${path}`, data)
  },
  patch: async (path: string, data: {}) => {
    return await axios.patch(`${apiBase}${path}`, data)
  },
}