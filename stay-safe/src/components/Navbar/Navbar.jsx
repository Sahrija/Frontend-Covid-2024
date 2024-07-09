import { useState } from 'react';
import styles from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';

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

      <nav className='sm:block hidden'>
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

  const navLinks = [
    { label: 'Home', href: '/', },
    { label: 'Indonesia', href: '/indonesia', },
    { label: 'Province', href: '/province', },
    { label: 'About', href: '/about', },
  ]

  return (
    <ul className={`flex flex-col items-stretch sm:gap-2 sm:items-center sm:flex-row`}>
      {navLinks.map(
        ({ label, href }) =>
          <NavLink key={label} label={label} href={href} />
      )}
    </ul>
  )
}

function NavLink({ label, href }) {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <li>
      <Link className={`block link-item max-sm:py-4 font-bold ${isActive ? 'text-white' : 'text-emerald-100'}`} to={href}>{label}</Link>
    </li>
  )
}
