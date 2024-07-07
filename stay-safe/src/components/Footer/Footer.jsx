import { Link } from 'react-router-dom';
import styles from './Footer.module.css';


export default function Footer() {
  return (
    <footer
      className={`${styles.container} p-4 bg-emerald-400 bg-gradient-to-r from-teal-500 to-emerald-400 text-white sm:flex flex-row justify-between items-center`}>
      <div className={`${styles.footer__left} mb-8`}>
        <h2 className={`text-3xl`}>
          <Link to={'/'}>
            Stay&Safe
          </Link>
        </h2>
        <p className='whitespace-normal'>
          Developed by <a className='underline' href="https://github.com/sahrija">Morning Coffee
          </a> on github</p>
      </div>
      <div className={styles.footer__right}>
        <p>Pages</p>
        <nav>
          <ul className='sm:flex flex-row gap-8'>
            <li><a href={'#IndonesiaSection'}>Indonesia</a></li>
            <li><a href={'#ProvinceSection'}>Province</a></li>
            <li><a href={'#FormSection'}>Faorm</a></li>
            <li><a href={'#AboutSection'}>About</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
