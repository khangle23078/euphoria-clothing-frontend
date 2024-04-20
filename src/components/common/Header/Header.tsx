import Logo from '@assets/icons/Logo.svg'
import HeaderNav from './HeaderNav'
import HeaderAction from './HeaderAction'
import { Input } from 'antd'
import { Search, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='px-3 md:px-3 lg:mx-0'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='h-[108px] flex items-center justify-between'>
          <Link to={'/'}>
            <img src={Logo} loading='lazy' alt='logo' className='hidden md:block' />
          </Link>
          <Menu size={36} className="block md:hidden" />
          <HeaderNav />
          <Input className='max-w-[200px] md:max-w-[350px]' prefix={<Search />} />
          <HeaderAction />
        </div>
      </div>
    </header>
  )
}

export default Header