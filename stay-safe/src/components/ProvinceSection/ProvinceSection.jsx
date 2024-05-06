import styles from './ProvinceSection.module.css';
import data from '../../constants/provinces'

export default function ProvinceSection() {
    return (
        <section className={`${styles.container} px-4 md:p-8`}>
            <header className={``}>
                <h1>title</h1>
                <p>subtitle</p>
            </header>

            <div className={`${styles.table_wrapper}`}>
                <table >
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
                                    className={`even:bg-teal-200/50`}
                                >
                                    <td>{index + 1}</td>
                                    <td>{province.kota}</td>
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
        </section>
    )
}
