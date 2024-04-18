import { Link } from "react-router-dom"

interface ProductCardProps {
  image: string
}

const ProductCard = ({ image }: ProductCardProps) => {
  return (
    <>
      <div>
        <Link to={`/product/`}>
          <img src={image} alt="quần áo" width={270.36} height={393.26} className="rounded-lg" />
        </Link>
        <h4 className="py-1 text-sm font-normal">Áo thun dài tay</h4>
        <p>120.000 VNĐ</p>
      </div>
    </>
  )
}

export default ProductCard