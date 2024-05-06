import { Button, Card, Form, FormProps, Input, Typography } from 'antd'
import { Category } from '@interfaces/category'
import { useAddCategory } from '@hooks/useCategory'
import UploadFile from '@components/common/UploadFile'

const CategoryAdd = () => {
  const { mutate: addCategory, isPending } = useAddCategory()
  const handleCategoryAdd: FormProps['onFinish'] = (
    data: Omit<Category, 'id'>,
  ) => {
    try {
      const response = addCategory(data)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card className='my-3'>
      <Typography.Title level={4}>Thêm mới danh mục</Typography.Title>
      <Form name='categoryAdd' layout='vertical' onFinish={handleCategoryAdd}>
        <Form.Item
          label='Tên danh mục'
          name='name'
          rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
        >
          <Input autoComplete='off' />
        </Form.Item>
        <Form.Item
          label='Slug'
          name='slug'
          rules={[{ required: true, message: 'Vui lòng nhập slug' }]}
        >
          <Input />
        </Form.Item>
        <UploadFile name='image' />
        <Button type='primary' htmlType='submit' loading={isPending}>
          Thêm mới
        </Button>
      </Form>
    </Card>
  )
}

export default CategoryAdd
