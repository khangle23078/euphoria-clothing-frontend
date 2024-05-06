import { Category } from '@interfaces/category'
import { Link } from 'react-router-dom'

interface CategorySlideProps {
  category?: Category
  image: string
}

const CategorySlide = ({ category, image }: CategorySlideProps) => {
  return (
    <div className='max-w-[150px]'>
      <Link to={`/category/${category?.slug}`}>
        <img
          src={image}
          alt={category?.name}
          loading='lazy'
          className='h-[150px] max-w-[150px] rounded-full'
        />
      </Link>
      <h3 className='mg:text-base py-2 text-center text-sm'>
        {category?.name} Áo thun
      </h3>
    </div>
  )
}

export default CategorySlide
