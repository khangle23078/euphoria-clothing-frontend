import { addCategory, deleteCategory, getCategories } from '@services/category'
import { useMutation, useQuery } from '@tanstack/react-query'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Category } from 'src/interfaces/category'
import { queryClient } from './../main'

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })
}

export const useAddCategory = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: (data: Omit<Category, '_id'>) => {
      return addCategory(data)
    },
    onSuccess: () => {
      message.success('Tạo danh mục thành công!')
      navigate('/admin/category')
    },
  })
}

export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: (_id: string) => {
      return deleteCategory(_id)
    },
    onSuccess: () => {
      message.success('Xóa danh mục thành công!')
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
  })
}
