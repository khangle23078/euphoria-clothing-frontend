import HelmetHeader from "@components/common/HelmetHeader"
import CategorySlides from "@components/ui/category/CategorySlides"
import ProductList from "@components/ui/Product/ProductList"
import BannerSlides from "@components/ui/Slide/BannerSlide"

const HomePage = () => {
  return (
    <>
      <HelmetHeader
        title="Euphoria - Thời trang nam giới"
        desc="Thời trang giành cho nam gi"
      />
      <main>
        <BannerSlides />
        <CategorySlides />
        <ProductList title="Áo thun" path="/category/ao-thun" />
        <ProductList title="Quần âu" path="/category/ao-thun" />
        <ProductList title="Áo polo" path="/category/ao-thun" />
      </main>
    </>
  )
}

export default HomePage