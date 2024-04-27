import { Breadcrumb, InputNumber } from "antd"
import { Link } from "react-router-dom"
import ProductImage from '@assets/images/Rectangle 734.png'
import { Trash } from "lucide-react"
import '@styles/style.css'

const CartPage = () => {
  return (
    <main>
      <div className="max-w-[1440px] mx-auto">
        <Breadcrumb
          className="py-3 text-base"
          items={[
            {
              title: <Link to={"/"}>Trang chủ</Link>,
            },

            {
              title: <Link to={"/cart"}>Giỏ hàng</Link>,
            },
          ]}
        />
      </div>
      <table>
        <thead className="bg-dark">
          <tr className="mx-auto max-w-8xl">
            <th className="text-lg font-semibold text-white uppercase">Sản phẩm</th>
            <th className="text-lg font-semibold text-white uppercase">Giá</th>
            <th className="text-lg font-semibold text-white uppercase">Số lượng</th>
            <th className="text-lg font-semibold text-white uppercase">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex items-center">
              <img src={ProductImage} loading="lazy" />
              <p>Áo thun nam tay</p>
            </td>
            <td>
              <p>120.000 VNĐ</p>
            </td>
            <td>
              <InputNumber />
            </td>
            <td>
              <Trash />
            </td>
          </tr>
        </tbody>
      </table>
    </main >
  )
}

export default CartPage