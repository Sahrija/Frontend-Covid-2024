import styles from './ProvinceSection.module.css';

export default function ProvinceSection({ data }) {
    return (
        <section className={`${styles.container} py-8 px-4 md:p-8`}>
            <header className={`text-center mb-8`}>
                <h2 className='text-teal-400 text-4xl font-semibold mb-4'>
                    Provinsi
                </h2>
                <p className='text-emerald-400'>
                    Data covid berdasarkan provinsi di Indonesia
                </p>
            </header>

            <div className='w-fit m-auto max-w-full overflow-x-auto overflow-y-visible'>
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
                            {data.provinces.map((province, index) => {
                                return (
                                    <tr
                                        key={index}
                                        className={`border-b-2 last:border-none`}
                                    >
                                        <td className='text-right'>{index + 1}</td>
                                        <td className='text-left'>{province.kota}</td>
                                        <td className='text-right'>{province.kasus}</td>
                                        <td className='text-right'>{province.sembuh}</td>
                                        <td className='text-right'>{province.dirawat}</td>
                                        <td className='text-right'>{province.meninggal}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

    )
}
