import { Link } from "react-router-dom"
import '@styles/style.css'
import ProductCard from "./ProductCard"

type ProductListProps = {
  title: string,
  path: string,
}

const ProductList = ({ title, path }: ProductListProps) => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-8xl">
        <div className="flex items-center justify-between">
          <h2 className="px-3 py-2 product-slide-heading md:px-0">{title}</h2>
          <Link to={path} className="px-3 text-lg font-semibold underline md:px-0">Xem thêm</Link>
        </div>
        <div className="grid grid-cols-2 px-3 gap-[30px] md:grid-cols-4 lg:grid-cols-5">
          <ProductCard image="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1072681/2020/1/20/9de2d7dc-e239-4327-b7d0-096c80ac3a121579503443912-Roadster-Men-Charcoal-Melange-Printed-Round-Neck-T-shirt-364-1.jpg" />
          <ProductCard image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24014310/2023/7/14/e0d643e5-05bc-4249-833b-0ddf80440f851689274793057BULLMERMenBeigePrintedV-NeckPocketsT-shirt1.jpg" />
          <ProductCard image="https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg" />
          <ProductCard image="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1072681/2020/1/20/9de2d7dc-e239-4327-b7d0-096c80ac3a121579503443912-Roadster-Men-Charcoal-Melange-Printed-Round-Neck-T-shirt-364-1.jpg" />
          <ProductCard image="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24014310/2023/7/14/e0d643e5-05bc-4249-833b-0ddf80440f851689274793057BULLMERMenBeigePrintedV-NeckPocketsT-shirt1.jpg" />
          <ProductCard image="https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg" />
          <ProductCard image="https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg" />
          <ProductCard image="https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg" />
          <ProductCard image="https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg" />
          <ProductCard image="https://assets.myntassets.com/fl_progressive/h_960,q_80,w_720/v1/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg" />
        </div>
      </div >
    </section >
  )
}

export default ProductList