import { Category } from '@interfaces/category'
import { apiClient } from './apiClient'
import { Response } from '@interfaces/response'

const baseApi = import.meta.env.VITE_BACKEND_API

export const getCategories = () => {
  return apiClient.get(`${baseApi}/categories/`)
}

export const addCategory = (data: Omit<Category, '_id'>) => {
  return apiClient.post<Response<null>>(`${baseApi}/categories/`, data)
}

export const deleteCategory = (_id: string) => {
  return apiClient.delete(`${baseApi}/categories/${_id}`)
}
