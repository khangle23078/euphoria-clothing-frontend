import { apiClient } from './apiClient'

const baseApi = import.meta.env.VITE_BACKEND_API

export const getCategories = () => {
  return apiClient.get(`${baseApi}/categories/`)
}
