import { Link } from "react-router-dom"
import { Category } from "src/interfaces/category"

interface CategorySlideProps {
  category?: Category,
  image: string
}

const CategorySlide = ({ category, image }: CategorySlideProps) => {
  return (
    <div className="max-w-[150px]">
      <Link to={`/category/${category?.slug}`}>
        <img src={image} alt={category?.name} loading="lazy" className="max-w-[150px] h-[150px] rounded-full" />
      </Link>
      <h3 className="py-2 text-sm text-center mg:text-base">{category?.name} Áo thun</h3>
    </div>
  )
}

export default CategorySlide