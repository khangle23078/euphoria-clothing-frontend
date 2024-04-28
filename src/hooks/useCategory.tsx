import { getCategories } from '@services/category'
import { useQuery } from '@tanstack/react-query'

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })
}
