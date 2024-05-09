import { useState } from 'react';
import styles from './CovidFormSection.module.css';

import * as utils from '../../utils/utils';

export default function CovidFormSection({ province_state, indonesia_state }) {
    const [province_data, setProvinceData] = province_state;
    const [indonesia_data, setIndonesiaData] = indonesia_state;

    const [jumlah, setJumlah] = useState(0)
    const [provinsi, setProvinsi] = useState('')
    const [status, setStatus] = useState('')

    function updateStatusRecord(province_idx, status, amount) {
        // duplicate the province_data
        const newProvinceData = { ...province_data };

        newProvinceData.provinces[province_idx][status] += amount;
        newProvinceData.last_update = utils.getCurrentDate();

        // update state with the updated duplicate province_data
        setProvinceData(newProvinceData);


        const newIndonesiaData = { ...indonesia_data }

        const getIndonesiaStatus = {
            kasus: 0,       // "Positif"
            dirawat: 0,      // "Positif"
            sembuh: 1,   // "Sembuh"
            meninggal: 2      // "Meninggal"
        }

        newIndonesiaData.indonesia[getIndonesiaStatus[status]].total += jumlah;

        setIndonesiaData(newIndonesiaData);
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
        <section id='FormSection' className={`${styles.container} p-8 md:px-16 bg-slate-100`}>
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

                        <label htmlFor="kota">Provinsi</label>
                        <select
                            className={styles.form__input}
                            name="provinsi"
                            id="provinsi"
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
                            <option value="kasus">Kasus</option>
                            <option value="sembuh">Sembuh</option>
                            <option value="dirawat">Dirawat</option>
                            <option value="meninggal">Meninggal</option>
                        </select>

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
                        
                        <br />
                        <button className={`btn btn-primary`} type='submit'>Submit</button>
                    </form>
                </div>
                <div className={`${styles.left} flex-1 flex justify-center`}>
                    <img className='max-w-full w-9/12' src="/assets/form.svg" alt="" />
                </div>
            </div>
        </section>
    )
}
