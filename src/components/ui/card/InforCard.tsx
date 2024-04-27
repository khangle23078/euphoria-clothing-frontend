import { Card, Typography } from 'antd'

type InforCardProps = {
  title: string
  number: number
  icon: React.ReactNode
}

const InforCard = ({ title, number, icon }: InforCardProps) => {
  return (
    <Card>
      <div className='flex items-center gap-5'>
        {icon}
        <div>
          <p className='text-xl font-semibold'>{number}</p>
          <Typography.Title level={5}>{title}</Typography.Title>
        </div>
      </div>
    </Card>
  )
}

export default InforCard
