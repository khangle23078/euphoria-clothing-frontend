import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-8xl">
        <div className="flex justify-around text-white py-[50px]">
          <ul>
            <li className="py-1">
              <Link to="">Chính sách</Link>
            </li>
            <li className="py-1">
              <Link to="">Chính sách khuyến mãi</Link>
            </li>
            <li className="py-1">
              <Link to="">Chính sách bảo mật</Link>
            </li>
          </ul>
          <ul>
            <li className="py-1">
              <Link to="">Về Euphoria</Link>
            </li>
            <li className="py-1">
              <Link to="">Giới thiệu</Link>
            </li>
            <li className="py-1">
              <Link to="">Liên hệ</Link>
            </li>
          </ul>
          <ul>
            <li className="py-1">
              <Link to="">Tin tức</Link>
            </li>
            <li className="py-1">
              <Link to="">Tuyển dụng</Link>
            </li>
            <li className="py-1">
              <Link to="">Hệ thống cửa hàng</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer