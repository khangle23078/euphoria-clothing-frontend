import HelmetHeader from "@components/common/HelmetHeader"
import CategorySlides from "@components/ui/CategorySlide/CategorySlides"
import ProductList from "@components/ui/Product/ProductList"
import Slide from "@components/ui/Slide"

const HomePage = () => {
  return (
    <>
      <HelmetHeader
        title="Euphoria - Thời trang nam giới"
        desc="Thời trang giành cho nam gi"
      />
      <main>
        <Slide />
        <CategorySlides />
        <ProductList title="Áo thun" path="/category/ao-thun" />
        <ProductList title="Quần âu" path="/category/ao-thun" />
        <ProductList title="Áo polo" path="/category/ao-thun" />
      </main>
    </>
  )
}

export default HomePage