import { useState } from 'react';
import DownloadDataButton from '../DownloadDataButton/DownloadDataButton';
import styles from './ProvinceSection.module.css';
import { formatThousand } from '../../utils/utils';


export default function ProvinceSection({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const rowCount = 10;

    const provinces = data.provinces;
    const slicedProvinces = data.provinces.slice(currentIndex, currentIndex + rowCount);

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
                <h2 className='text-teal-400 text-4xl font-semibold mb-4'>
                    Provinsi
                </h2>
                <p className='text-emerald-400'>
                    Data covid berdasarkan provinsi di Indonesia
                </p>
            </header>

            <div className='w-fit m-auto max-w-full overflow-x-auto overflow-y-visible'>
                <DownloadDataButton data={data.provinces} />
                <p className='text-right text-black/50  mx-2'>Last Updated: {data.last_update}</p>
                <div className={`${styles.table_wrapper} rounded-md shadow-md mb-8 mx-2`}>
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
                                let { kota, kasus, sembuh, dirawat, meninggal } = province;
                                kasus = formatThousand(kasus)
                                sembuh = formatThousand(sembuh)
                                dirawat = formatThousand(dirawat)
                                meninggal = formatThousand(meninggal)

                                return (
                                    < tr
                                        key={index}
                                        className={`border-b-2 last:border-none`
                                        }
                                    >
                                        <td className='text-right'>{index + 1 + currentIndex}</td>
                                        <td className='text-left'>{kota}</td>
                                        <td className='text-right'>{kasus}</td>
                                        <td className='text-right'>{sembuh}</td>
                                        <td className='text-right'>{dirawat}</td>
                                        <td className='text-right'>{meninggal}</td>
                                    </tr>
                                )
                            })}

                            {/* <EmptyRow showedCount={slicedProvinces} rowCount={rowCount} idx={currentIndex} /> */}

                        </tbody>
                    </table>
                </div>
                <div className='flex justify-end'>
                    <div className='shadow-md m-2 w-fit rounded-md '>
                        <button disabled={isFirstPage} onClick={toPrevPage} className='bg-white px-3 py-1 rounded-s-md disabled:text-gray-400 disabled:bg-gray-100 hover:bg-black/5 border-gray-100'>Prev</button>
                        <button disabled={isLastPage} onClick={toNextPage} className='bg-white px-3 py-1 rounded-e-md disabled:text-gray-400 disabled:bg-gray-100 hover:bg-black/5 border-gray-100 border-s-2'>Next</button>
                    </div>
                </div>
            </div>
        </section >

    )
}


function EmptyRow({ showedCount, rowCount , idx}) {
    const numLeft = rowCount - showedCount

    const left = [...Array(numLeft ? numLeft : 1).keys()];

    return (
        <>{left.map(e =>
            <tr tr
                key={1}
                className={`border-b-2 last:border-none h-[33.970px]`
                }
            ></tr>
        )}</>

    )
}
