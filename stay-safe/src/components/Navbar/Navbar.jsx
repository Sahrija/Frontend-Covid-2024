import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className={`${styles.container} bg-teal-400 text-white p-4 flex justify-between items-center`}>
      <Link to={'/'} className={`text-3xl font-bold`}>Covid id</Link>

      <nav>
        <ul className={`flex gap-2`}>
          <li><Link className={`link-item`} to={'/test'}>Link</Link></li>
          <li><Link className={`link-item`} to={'/test'}>Link</Link></li>
          <li><Link className={`link-item`} to={'/test'}>Link</Link></li>
          <li><Link className={`link-item`} to={'/test'}>Link</Link></li>
        </ul>
      </nav>
    </header>
  )
}
