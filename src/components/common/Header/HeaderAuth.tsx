import { Link, NavLink } from "react-router-dom"
import Logo from '@assets/icons/Logo.svg'

interface AuthNav {
  key: string,
  name: string,
  path: string
}

const authNavs = [
  {
    key: 'login',
    name: 'Đăng nhập',
    path: '/auth/login'
  },
  {
    key: 'register',
    name: 'Đăng ký',
    path: '/auth/register'
  }
]

const HeaderAuth = () => {
  return (
    <header className="shadow-sm">
      <div className="max-w-[1240px] mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to={'/'}>
            <img src={Logo} loading="lazy" />
          </Link>
          <div className="flex items-center gap-10">
            {authNavs.map((authNav: AuthNav) => {
              return <NavLink
                to={authNav.path}
                key={authNav.key}
                className={({ isActive }) =>
                  isActive ? 'bg-primary py-3 px-8 rounded-lg text-white font-medium' : 'text-dark font-medium'
                }
              >
                {authNav.name}
              </NavLink>
            })}
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderAuth