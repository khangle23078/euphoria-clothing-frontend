import { Category } from '@interfaces/category'
import { Response } from '@interfaces/response'
import { Card, Image, Popconfirm, Table, Typography } from 'antd'
import { EditIcon, TrashIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

type CategoryTableProps = {
  loading: boolean
  data: Response<Category[]>
  onDelete: (_id: string) => void
}

const CategoryTable = ({ data, loading, onDelete }: CategoryTableProps) => {
  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => {
        return <Image src={image} width={50} height={50} />
      },
    },
    {
      title: 'Thao tác',
      dataIndex: '_id',
      key: '_id',
      render: (_id: string) => {
        return (
          <div className='flex cursor-pointer gap-4'>
            <Link to={`/category/edit/${_id}`}>
              <EditIcon />
            </Link>
            <Popconfirm
              title='Xóa danh mục'
              description='Bạn có muốn xóa không?'
              onConfirm={() => onDelete(_id)}
              okText='Yes'
              cancelText='No'
            >
              <TrashIcon className='text-red-400' />
            </Popconfirm>
          </div>
        )
      },
    },
  ]

  const dataSource = data?.data.map((category: Category, index: number) => {
    return {
      index: index + 1,
      _id: category._id,
      image: category.image.url,
      name: category.name,
    }
  })

  return (
    <Card className='my-3'>
      <Typography.Title level={4}>Danh sách danh mục</Typography.Title>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={'_id'}
      />
    </Card>
  )
}

export default CategoryTable
