import { useState } from 'react';
import styles from './CovidFormSection.module.css';

function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.getFullYear() + '-' +
        currentDate.getMonth() + '-' +
        currentDate.getDate() + ' ' +
        currentDate.getHours() + ':' +
        currentDate.getMinutes() + ':' +
        currentDate.getSeconds();
}

export default function CovidFormSection({ province_state, indonesia_state }) {
    const [province_data, setProvinceData] = province_state;
    const [indonesia_data, setIndonesiaData] = indonesia_state;

    const [jumlah, setJumlah] = useState(0)
    const [provinsi, setProvinsi] = useState('')
    const [status, setStatus] = useState('')

    function updateStatusRecord(province_id, status, amount) {
        // duplicate the province_data
        const newProvinceData = { ...province_data };

        newProvinceData.provinces[province_id][status] += amount;
        newProvinceData.last_update = getCurrentDate();

        // update state with the updated duplicate province_data
        setProvinceData(newProvinceData);

        // TODO: handle set indonesia data
    }

    function handleSubmit() {
        // prevent page refresh
        event.preventDefault();

        // update province_data
        updateStatusRecord(provinsi, status, jumlah);

        // reset form
        setStatus('')
        setProvinsi('')
        setJumlah(0)
    }

    return (
        <section className={`${styles.container} p-8 md:px-16 bg-slate-100`}>
            <div className='max-w-screen-xl flex flex-col md:flex-row-reverse md:items-center gap-16 m-auto '>
                <div className={`${styles.right} flex-1`}>
                    <header>
                        <h2 className='text-teal-400 text-4xl font-semibold mb-4'>Covid Case Form</h2>
                    </header>
                    {/* form */}
                    <form className='flex flex-col'
                        id='form'
                        onSubmit={handleSubmit}
                    >

                        <label htmlFor="jumlah">Jumlah</label>
                        <input
                            className={styles.form__input}
                            type="number"
                            name="jumlah"
                            id="jumlah"
                            required
                            placeholder='0'
                            value={jumlah || ''}
                            onChange={(e) => {
                                setJumlah(parseInt(e.target.value || 0))
                            }}
                        />

                        <label htmlFor="kota">Kota</label>
                        <select
                            className={styles.form__input}
                            name="kota"
                            id="kota"
                            required
                            value={provinsi}
                            onChange={(e) => { setProvinsi(e.target.value) }}

                        >
                            <option value=''>Pilih Kota</option>
                            {province_data.provinces.map((province, index) => {
                                return (
                                    <option
                                        key={index}
                                        value={index}
                                    >
                                        {province.kota}
                                    </option>
                                )
                            })}
                        </select>

                        <label htmlFor="status">Status</label>
                        <select
                            className={styles.form__input}
                            name="status"
                            id="status"
                            required
                            value={status}
                            onChange={(e) => { setStatus(e.target.value) }}
                        >
                            <option value=''>Pilih Status</option>
                            <option value="dirawat">Dirawat</option>
                            <option value="kasus">Kasus</option>
                            <option value="meninggal">Meninggal</option>
                            <option value="sembuh">Sembuh</option>
                        </select>
                        <br />
                        <button className={`btn btn-primary`} type='submit'>submit</button>
                    </form>
                </div>
                <div className={`${styles.left} flex-1`}>
                    <img className='w-full' src="/assets/hero.png" alt="" />
                </div>
            </div>
        </section>
    )
}
