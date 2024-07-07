import { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const navbarClickHandler = () => {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <header className={`${styles.container} bg-primary-gradient text-white p-4 flex justify-between items-center`}>
      <Link to={'/'} className={`text-3xl font-bold`}>Stay&Safe</Link>

      <button onClick={navbarClickHandler} className={`flex sm:hidden aspect-square rounded-md p-0.5 h-8 | active:outline outline-white/50 outline-3 `}>
        <img className='w-full' src="/assets/hamburger-menu.svg" alt="" />
      </button>

      <nav className='hidden sm:block'>
        <NavLinks />
      </nav>

      <nav id='mobile-navbar'
        className={`bg-teal-400 sm:hidden w-full absolute top-16 right-0 bg-primary-gradient
                    overflow-hidden origin-top transition-[height] ${isNavbarOpen ? 'h-56' : 'h-0'} |`}>
        <NavLinks />
      </nav>
      
    </header>
  )
}

function NavLinks() {
  return (
    <ul className={`flex flex-col items-stretch sm:gap-2 sm:items-center sm:flex-row`}>
      <li><a className={`block link-item max-sm:py-4`} href={'#IndonesiaSection'}>Indonesia</a></li>
      <li><a className={`block link-item max-sm:py-4`} href={'#ProvinceSection'}>Province</a></li>
      <li><a className={`block link-item max-sm:py-4`} href={'#FormSection'}>Form</a></li>
      <li><a className={`block link-item max-sm:py-4`} href={'#AboutSection'}>About</a></li>
    </ul>
  )
}
