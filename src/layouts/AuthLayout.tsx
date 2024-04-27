import HeaderAuth from "@components/common/Header/HeaderAuth"
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <div>
      <HeaderAuth />
      <Outlet />
    </div>
  )
}

export default AuthLayout