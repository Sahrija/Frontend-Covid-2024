import Button from '../shared/Button/Button';
import styles from './Hero.module.css';


export default function Hero() {
    return (
        <div className={`${styles.container} max-sm:text-center px-4 py-16 min-w-96 md:flex md:px-16 max-w-screen-xl m-auto`}>
            <div className={`${styles.hero__left} mb-16 flex-1`}>
                <h1 className={`${styles.hero__title} text-5xl font-bold text-teal-400`}>
                    Stay&Safe
                </h1>
                <p className={`${styles.hero__subtitle} mt-1 font-medium text-xl text-teal-500/50`}>
                    Monitoring perkembangan covid</p>
                <p className={`${styles.hero__description} mt-4 text-black/70`}>
                    Pantau perkembangan tentang <span className='underline decoration-2 font-bold decoration-teal-400'>
                        COVID-19
                    </span> secara tepat dan akurat. Tetap aman di rumah dan selalu pakai masker ketika ke tempat ramai. 
                </p>
                    <p className='mb-8 underline decoration-2 font-bold text-teal-400 decoration-teal-400'>#jangankendorpakaimasker</p>
                <a href='#IndonesiaSection' className='btn btn-primary'>Pantau</a>
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
