import { List, Rate } from "antd"

const data = [
  {
    rating: 4,
    commtent: 'Ant Design commtent 1',
    email: 'khangle23@gmail.com'
  },
  {
    rating: 5,
    commtent: 'Ant Design commtent 2',
    email: 'khangle23@gmail.com'

  },
  {
    rating: 3,
    commtent: 'Ant Design commtent 3',
    email: 'khangle23@gmail.com'

  },
  {
    rating: 5,
    commtent: 'Ant Design commtent 4',
    email: 'khangle23@gmail.com'

  },
];

const ProductReviews = () => {
  return (
    <section className="py-[30px]">
      <h3 className="text-2xl font-bold mb-[30px]">Đánh giá sản phẩm</h3>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <div key={index}>
              <Rate disabled defaultValue={item.rating} />
              <h4>{item.email}</h4>
              <p>{item.commtent}</p>
            </div>
          </List.Item>
        )}
      />
    </section>
  )
}

export default ProductReviews