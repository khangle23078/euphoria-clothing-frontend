import { addCategory, getCategories } from '@services/category'
import { useMutation, useQuery } from '@tanstack/react-query'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Category } from 'src/interfaces/category'

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
