import { Heart, ShoppingCart, User } from "lucide-react"
import { NavLink } from "react-router-dom"

interface UserAction {
  id: number,
  icon: React.ReactNode,
  path: string
}

const user_actions = [
  {
    id: 1,
    icon: <Heart />,
    path: '/white-list'
  },
  {
    id: 2,
    icon: <ShoppingCart />,
    path: '/cart'
  },
  {
    id: 3,
    icon: <User />,
    path: '/user'
  }
]

const HeaderAction = () => {
  return (
    <div className="flex items-center gap-3">
      {user_actions.map(({ id, icon, path }: UserAction) => {
        return (
          <NavLink key={id} to={path} className="bg-[#F6F6F6] w-[44px] h-[44px] rounded-lg flex items-center p-3">
            {icon}
          </NavLink>
        )
      })}
    </div>
  )
}

export default HeaderAction