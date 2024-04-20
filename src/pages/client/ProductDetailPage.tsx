import HelmetHeader from "@components/common/HelmetHeader";
import { ProductSlides } from "@components/ui/Product/ProductSlide";
import ProductImageSlides from "@components/ui/Slide/ProductImageSlides";
import { Breadcrumb, Button, InputNumber, Rate } from "antd";
import { ShoppingCart } from "lucide-react";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";

const ProductReviews = lazy(() => import('@components/ui/Product/ProductReviews'))

const ProductDetailPage = () => {
  return (
    <>
      <HelmetHeader title="Áo thun nam dài tay" desc="Áo thun nam dài tay" />
      <main>
        <div className="max-w-6xl mx-auto">
          <Breadcrumb
            className="py-3 text-base"
            items={[
              {
                title: <Link to={"/"}>Trang chủ</Link>,
              },

              {
                title: <Link to={"/category/"}>Áo thun</Link>,
              },
            ]}
          />
          <div className="flex">
            <ProductImageSlides />
            <section className="flex-1">
              <h4 className="text-3xl font-bold">Áo thun nam dài tay</h4>
              <div className="py-3">
                <Rate disabled defaultValue={5} /> <span>(10)</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Giá : </span>
                <p className="py-3 font-bold font-base text-m">150.000 VNĐ</p>
              </div>
              <div className="flex items-center gap-3">
                <span>Số lượng : </span>
                <InputNumber min={1} />
              </div>
              <Button type="primary" icon={<ShoppingCart size={14} />} className="w-full my-3">Thêm vào giỏ hàng</Button>
              <Button className="w-full">Mua ngay</Button>
            </section>
          </div>
          <section className="py-[80px]">
            <h3 className="text-2xl font-semibold pb-[30px]">Mô tả sản phẩm</h3>
            <p>
              Thêm một Bộ sưu tập tiếp tục được ra mắt với những thiết kế ấn tượng và đầy tươi mới, không chỉ đem lại cho khách hàng những sản phẩm đẹp mắt và chất lượng, mà hơn thế nữa là hành trình đóng góp cho cộng đồng của chương trình Care & Share.

              Nếu bạn là một dân văn phòng "chính hiệu" thì không thể bỏ qua chiếc áo thun Cotton Compact in Care&Share phiên bản Văn Phòng với thiết kế là những vật dụng rất "dính" với dân văn phòng, công sở. Cùng xem chi tiết hơn thiết kế của mẫu áo này và ý nghĩa mà chương trình Care & Share đem lại nhé!



              "Một công ty không cần phải lớn mới làm điều ý nghĩa" - Coolmate đã nghĩ và tin như thế khi khởi xướng chương trình Care & Share này. Sức nhỏ làm việc nhỏ, có ít đóng góp ít, có nhiều đóng góp nhiều. Ít nhất chúng ta đã bắt tay vào làm và lan toả điều tích cực.



              Hiểu một cách đơn giản, "Care & Share: For A Better Childhood" là một chương trình được xây dựng và duy trì bởi Coolmate nhằm góp sức mình giúp đỡ những trẻ em kém may mắn, giúp các em đến trường và có cuộc sống tốt hơn. Coolmate cam kết sẽ dành 10% doanh thu từ tất cả những sản phẩm trong danh mục "Care & Share" để đóng góp vào quỹ dành cho trẻ em có hoàn cảnh khó khăn. Coolmate mong muốn là một cầu nối để viết tiếp những ước mơ con trẻ còn dang dở, hướng tới một tương lai tốt đẹp hơn.


              Trẻ con thì vô tư lắm, chỉ cần kẹo và đồ chơi là vui cả ngày - như chúng ta ngày bé vậy đó. Các em cũng cần được yêu thương và bảo vệ nữa. Coolmate hy vọng mỗi chiếc áo, chiếc mũ hay khẩu trang không chỉ là một món đồ trong tủ đồ của bạn, mà còn là công cụ lan toả và truyền cảm hứng đến nhiều người hơn nữa.



              Với những sản phẩm in logo Care & Share, không chỉ là việc ủng hộ, mà Coolmate mong muốn đó sẽ là món đồ bạn muốn sỡ hữu và bận mỗi ngày. Do đó Coolmate gởi đến bạn những mẫu thiết kế mới trong Care & Share Collection, giới hạn số lượng bán để bạn có thêm nhiều sự lựa chọn theo cá tính và sở thích của mình.



              Sản phẩm Care & Share được rất nhiều khách hàng tin tưởng và sử dụng

              Đánh giá và phản hồi tích cực của khách hàng dành cho các sản phẩm Care & Share


              KOLs cùng Coolmate lan toả Care & Share
              Coolmate cảm ơn các Youtuber đã chọn mặc Care & Share như một sản phẩm hàng ngày và là nơi tin tưởng để dành yêu thương đến trẻ em có hoàn cảnh khó khăn!


              Youtuber Nguyễn Hữu Trí	Youtuber Vũ Lê Trang Anh


              Cùng Coolmate lan toả điều tử tế này nhé!

              * Lưu ý: Chi tiết số tiền ủng hộ sẽ được Coolmate công bố trên website & fanpage vào ngày 5 hàng tháng
            </p>
          </section>
          <Suspense fallback={<p>Loading...</p>}>
            <ProductReviews />
          </Suspense>
          <ProductSlides />
        </div>
      </main>
    </>
  );
};

export default ProductDetailPage;
