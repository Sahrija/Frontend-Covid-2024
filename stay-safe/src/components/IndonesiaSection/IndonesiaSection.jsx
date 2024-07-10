import styles from './IndonesiaSection.module.css';
import { formatThousand } from '../../utils/utils'
import DataCard from '../DataCard/DataCard';

export default function IndonesiaSection({ data }) {
    return (
        <section id='IndonesiaSection' className={`${styles.container} bg-slate-100`}>
            <div className='m-auto p-8 max-w-screen-xl'>
                <header className={`text-center mb-8`}>
                    <h2 className='mb-4 font-semibold text-4xl text-teal-400'>
                        Indonesia
                    </h2>
                    <p className='text-emerald-400'>
                        Data covid berdasarkan Indonesia
                    </p>
                </header>
                {/* card wrapper */}
                <div className='flex sm:flex-row flex-col flex-wrap gap-8 m-auto max-w-screen-lg'>
                    {data.indonesia.map((record, index) =>
                        <DataCard
                            key={index}
                            record={record}
                            index={index}
                        />
                    )}
                </div>
            </div>
        </section>
    )
}


