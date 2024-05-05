import Button from '../shared/Button/Button';
import styles from './Hero.module.css';


export default function Hero() {
    return (
        <div className={`${styles.container} p-4`}>
            <div className={`${styles.hero__left} mb-16`}>
                <h1 className={`${styles.hero__title} text-5xl font-bold text-teal-400`}>
                    Covid id
                </h1>
                <p className={`${styles.hero__subtitle} font-medium mt-1 text-teal-500/50`}>
                    Monitoring perkembangan covid</p>
                <p className={`${styles.hero__description} mt-4 mb-8`}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, eveniet quod ratione, at repellat suscipit quisquam dolorem veritatis voluptas doloremque totam necessitatibus sed dolor vel omnis repellendus placeat molestiae iste.</p>
                <Button>dafadf</Button>
            </div>
            <div className={styles.hero__right}>
                <img src="/assets/hero.png" alt="hero image" />
            </div>
        </div>
    )
}
