import styles from './IndonesiaSection.module.css';
import {formatThousand} from '../../utils/utils'

export default function IndonesiaSection({ data }) {
    const s = ''
    return (
        <section id='IndonesiaSection' className={`${styles.container} bg-slate-100`}>
            <div className='max-w-screen-xl m-auto p-8'>
                <header className={`text-center mb-8`}>
                    <h2 className='text-teal-400 text-4xl font-semibold mb-4'>
                        Indonesia
                    </h2>
                    <p className='text-emerald-400'>
                        Data covid berdasarkan Indonesia
                    </p>
                </header>
                {/* card wrapper */}
                <div className='m-auto flex flex-col sm:flex-row flex-wrap gap-8 max-w-screen-lg'>
                    {data.indonesia.map((record, index) => {
                        return <Card
                            key={index}
                            record={record}
                            index={index}
                        />
                    })}
                </div>
            </div>
        </section>
    )
}

function Card({ record, index }) {
    
    const totalLabelColor = ['text-green-500', 'text-sky-500', 'text-red-500']

    const total = formatThousand(record.total);

    return <div className='bg-white p-10 flex flex-col sm:flex-1 text-center rounded shadow-md'>
        <span className='text-3xl'>
            {record.status}
        </span>
        <span className={`break-all text-5xl font-bold ${totalLabelColor[index]}`}>
            {total}
        </span>
    </div>;
}

