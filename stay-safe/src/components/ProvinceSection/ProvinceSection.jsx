import { useState } from 'react';
import DownloadDataButton from '../DownloadDataButton/DownloadDataButton';
import styles from './ProvinceSection.module.css';
import { formatThousand } from '../../utils/utils';


export default function ProvinceSection({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const rowCount = 10;

    const provinces = data.regions || [];
    const slicedProvinces = provinces.slice(currentIndex, currentIndex + rowCount);

    const isFirstPage = !currentIndex > 0;
    const isLastPage = currentIndex + rowCount > provinces.length;
    function toNextPage() {
        if (!isLastPage) {
            setCurrentIndex(currentIndex + rowCount);
        }
    }
    function toPrevPage() {
        if (!isFirstPage) {
            setCurrentIndex(currentIndex - rowCount);
        }
        else {
            setCurrentIndex(0);
        }
    }

    return (
        <section id='ProvinceSection' className={`${styles.container} py-8 px-4 md:p-8`}>
            <header className={`text-center mb-8`}>
                <h2 className='mb-4 font-semibold text-4xl text-teal-400'>
                    Situation by Provinces
                </h2>
                <p className='text-emerald-400'>
                    Data covid berdasarkan provinsi di Indonesia
                </p>
            </header>

            <div className='m-auto w-fit max-w-full overflow-x-auto overflow-y-visible'>
                <DownloadDataButton data={data} />
                <p className='text-right mx-2 text-black/50'>Last Updated: {data.last_update}</p>
                <div className={`${styles.table_wrapper} rounded-md shadow-md mb-8 mx-2 border-2 border-white`}>
                    <table>
                        <thead className={`bg-teal-400 text-white`}>
                            <tr>
                                <th>No</th>
                                <th>Kota</th>
                                <th>Positif</th>
                                <th>Sembuh</th>
                                <th>Dirawat</th>
                                <th>Meninggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {slicedProvinces.map((province, index) => {
                                let { name, numbers: {confirmed, recovered, treatment, death} } = province;
                                const kasus = formatThousand(confirmed)
                                const sembuh = formatThousand(recovered)
                                const dirawat = formatThousand(treatment)
                                const meninggal = formatThousand(death)

                                return (
                                    < tr
                                        key={index}
                                        className={`border-b-2 last:border-none`
                                        }
                                    >
                                        <td className='text-right'>{index + 1 + currentIndex}</td>
                                        <td className='text-left'>{name}</td>
                                        <td className='text-right'>{kasus}</td>
                                        <td className='text-right'>{sembuh}</td>
                                        <td className='text-right'>{dirawat}</td>
                                        <td className='text-right'>{meninggal}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                <div className='flex justify-end'>
                    <div className='shadow-md m-2 rounded-md w-fit'>
                        <button disabled={isFirstPage} onClick={toPrevPage} className='border-gray-100 bg-white hover:bg-black/5 disabled:bg-gray-100 px-3 py-1 rounded-s-md disabled:text-gray-400'>Prev</button>
                        <button disabled={isLastPage} onClick={toNextPage} className='border-gray-100 border-s-2 bg-white hover:bg-black/5 disabled:bg-gray-100 px-3 py-1 rounded-e-md disabled:text-gray-400'>Next</button>
                    </div>
                </div>
            </div>
        </section >

    )
}

