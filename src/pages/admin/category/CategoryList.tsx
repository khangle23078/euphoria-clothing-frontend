import CategoryTable from '@components/ui/table/CategoryTable'
import { useDeleteCategory, useGetCategories } from '@hooks/useCategory'

const CategoryList = () => {
  const { data: categories, isLoading } = useGetCategories()
  const { mutate: deleteCategory } = useDeleteCategory()
  const handleDeleteCategory = (_id: string) => {
    try {
      deleteCategory(_id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main>
      <CategoryTable
        data={categories?.data}
        loading={isLoading}
        onDelete={handleDeleteCategory}
      />
    </main>
  )
}

export default CategoryList
