import { NavLink } from "react-router-dom"

interface navItem {
  id: number,
  name: string,
  path: string
}

const navItems = [
  {
    id: 1,
    name: 'Trang chủ',
    path: '/'
  },
  {
    id: 2,
    name: 'Quần',
    path: '/category/ao'
  },
  {
    id: 3,
    name: 'Áo',
    path: '/category/quan'
  },
  {
    id: 4,
    name: 'Bộ sưu tập',
    path: '/collections/quan'
  }
]

const HeaderNav = () => {
  return (
    <>
      <nav className="hidden gap-6 md:flex">
        {navItems.map(({ id, name, path }: navItem) => {
          return (
            <li key={id}>
              <NavLink to={path} className={({ isActive }) => {
                return isActive
                  ? 'bg-primary p-2 rounded-lg text-white font-semibold'
                  : 'text-dark font-normal text-lg'
              }}>{name}</NavLink>
            </li>
          )
        })}
      </nav>
    </>

  )
}

export default HeaderNav