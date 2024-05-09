import Button from '../shared/Button/Button';
import styles from './Hero.module.css';


export default function Hero() {
    return (
        <div className={`${styles.container} px-4 py-16 min-w-96 md:flex md:px-16 max-w-screen-xl m-auto`}>
            <div className={`${styles.hero__left} mb-16 flex-1`}>
                <h1 className={`${styles.hero__title} text-5xl font-bold text-teal-400`}>
                    Stay&Safe
                </h1>
                <p className={`${styles.hero__subtitle} mt-1 font-medium text-xl text-teal-500/50`}>
                    Monitoring perkembangan covid</p>
                <p className={`${styles.hero__description} mt-4 mb-8 text-black/70`}>
                    Kami secara aktif memantau perkembangan <span className='underline decoration-2 font-bold decoration-teal-400'>
                        COVID-19
                    </span> untuk memperoleh pemahaman yang mendalam tentang situasi saat ini. Data terbaru kami digunakan untuk mengidentifikasi tren dan mengambil tindakan proaktif guna menjaga kesehatan dan keamanan masyarakat.
                </p>
                <a href='#IndonesiaSection' className='btn btn-primary'> Mulai</a>
            </div>
            <div className={`${styles.hero__right} flex-[2] flex justify-end items-center`}>
                <img
                    className={`${styles.hero__image}`}
                    src="/assets/hero.png"
                    alt="hero image"
                    width='600'
                />
            </div>
        </div>
    )
}
