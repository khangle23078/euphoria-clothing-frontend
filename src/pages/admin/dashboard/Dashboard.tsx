import InforCard from '@components/ui/card/InforCard'
import { ListOrderedIcon, ShoppingBag, User2Icon } from 'lucide-react'
import { Card, Table, Typography } from 'antd'
import SaleChart from '@components/ui/chart/SaleChart'

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]

const columns = [
  {
    title: 'Sản phẩm',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Mã đơn hàng',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Giá',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'address',
    key: 'address',
  },
]

const DashboardPage = () => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-3 my-3 md:grid-cols-2 lg:grid-cols-4'>
        <InforCard
          title='Tổng số sản phẩm'
          number={23}
          icon={<ShoppingBag />}
        />
        <InforCard
          title='Tổng số khách hàng'
          number={23}
          icon={<User2Icon />}
        />
        <InforCard
          title='Tổng số đơn hàng'
          number={23}
          icon={<ListOrderedIcon />}
        />
        <InforCard
          title='Tổng số doanh thu'
          number={23}
          icon={<ShoppingBag />}
        />
      </div>
      <Card style={{ height: 300 }}>
        <SaleChart />
      </Card>
      <Card className='mt-3'>
        <Typography.Title level={4}>Danh sách đơn hàng</Typography.Title>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </Card>
    </div>
  )
}

export default DashboardPage
