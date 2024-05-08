import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const navbarClickHandler = () => {
  const mobileNavbar = document.getElementById('mobile-navbar');
  if (mobileNavbar) {
    mobileNavbar.classList.toggle('h-0');
    mobileNavbar.classList.toggle('h-40');
  }
}

export default function Navbar() {
  return (
    <header className={`${styles.container} bg-teal-400 text-white p-4 flex justify-between items-center`}>
      <Link to={'/'} className={`text-3xl font-bold`}>Covid id</Link>

      <button onClick={navbarClickHandler} className={`flex sm:hidden aspect-square rounded-md p-0.5 h-8 | active:outline outline-white/50 outline-2 `}>
        <img className='w-full' src="/assets/hamburger-menu.svg" alt="" />
      </button>
      <nav className='hidden sm:block'>
        <NavLinks />
      </nav>
      <nav id='mobile-navbar' className='bg-teal-400 h-40 sm:hidden w-screen absolute top-16 right-0 overflow-hidden origin-top transition-[height]'>
        <NavLinks />
      </nav>
    </header>
  )
}

function NavLinks() {
  return (
    <ul className={`flex px-4 flex-col items-stretch sm:px-0 sm:gap-2 sm:items-center sm:flex-row`}>
      <li><Link className={`inline-block py-2 link-item`} to={'/test'}>Link</Link></li>
      <li><Link className={`inline-block py-2 link-item`} to={'/test'}>Link</Link></li>
      <li><Link className={`inline-block py-2 link-item`} to={'/test'}>Link</Link></li>
      <li><Link className={`inline-block py-2 link-item`} to={'/test'}>Link</Link></li>
    </ul>
  )
}
