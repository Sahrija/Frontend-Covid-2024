import { useState } from 'react';
import styles from './CovidFormSection.module.css';

import d from '../../constants/provinces';


export default function CovidFormSection() {
    const [data, updateData] = useState(d);

    function getInputsData() {
        const jumlah_input = document.getElementById('jumlah');
        const kota_input = document.getElementById('kota');
        const status_input = document.getElementById('status');

        return {
            jumlah: parseInt(jumlah_input.value),
            kota: kota_input.value,
            status: status_input.value,
        }
    }

    function updateStatusRecord(cityName, status, amount) {
        const provinceIndex = data.provinces.findIndex(
            (province) => province.kota == cityName
        );

        // duplicate the data
        const updatedData = { ...data }
        const updatedProvince = { ...data.provinces[provinceIndex] }

        updatedProvince[status] += amount;
        updatedData.provinces[provinceIndex] = updatedProvince;

        // update state with the updated duplicate data
        updateData(updatedData);
    }

    function handleSubmit() {
        event.preventDefault();

        // get form data
        const formData = getInputsData();

        // update data
        updateStatusRecord(formData.kota, formData.status, formData.jumlah);
  
        document.getElementById('form').reset();
        console.log('form submited');
    }

    return (
        <section className={styles.container}>
            <div className={`${styles.left}`}>

            </div>
            <div className={`${styles.right} p-4`}>

                {/* form */}
                <form id='form' onSubmit={handleSubmit}>
                    <input
                        className={`border-2`}
                        type="number"
                        name="jumlah"
                        id="jumlah"
                        required
                    />
                    <br />

                    <p>jakarta kasus {data.provinces[0].kasus}</p>

                    <select name="kota" id="kota" required>
                        <option value=''>Pilih Kota</option>
                        {data.provinces.map((province, index) => {
                            return (
                                <option
                                    key={index}
                                    value={province.kota}
                                >
                                    {province.kota}
                                </option>
                            )
                        })}
                    </select>

                    <br />
                    <select name="status" id="status" required>
                        <option value=''>Pilih Status</option>
                        <option value="dirawat">Dirawat</option>
                        <option value="kasus">Kasus</option>
                        <option value="meninggal">Meninggal</option>
                        <option value="sembuh">Sembuh</option>
                    </select>
                    <br />
                    <button className={`btn`} type='submit'>submit</button>
                </form>
            </div>
        </section>
    )
}
