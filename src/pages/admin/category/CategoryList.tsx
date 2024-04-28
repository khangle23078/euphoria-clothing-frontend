import CategoryTable from '@components/ui/table/CategoryTable'
import { useGetCategories } from '@hooks/useCategory'

const CategoryList = () => {
  const { data: categories, isLoading } = useGetCategories()

  return (
    <main>
      <CategoryTable data={categories?.data} loading={isLoading} />
    </main>
  )
}

export default CategoryList
