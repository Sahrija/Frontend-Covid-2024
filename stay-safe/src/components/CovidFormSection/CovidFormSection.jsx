import styles from './CovidFormSection.module.css';


export default function CovidFormSection({ province_state }) {
    const [data, setData] = province_state;

    function getFormData() {
        const jumlah_input = document.getElementById('jumlah');
        const kota_input = document.getElementById('kota');
        const status_input = document.getElementById('status');

        return {
            jumlah: parseInt(jumlah_input.value),
            kota_id: parseInt(kota_input.value),
            status: status_input.value,
        }
    }

    function updateStatusRecord(province_id, status, amount) {
        // duplicate the data
        const newData = { ...data };
        newData.provinces[province_id][status] += amount;

        // update state with the updated duplicate data
        setData(newData);
    }

    function handleSubmit() {
        // prevent page refresh
        event.preventDefault();

        // get form data
        const formData = getFormData();

        // update data
        updateStatusRecord(formData.kota_id, formData.status, formData.jumlah);

        // reset form
        document.getElementById('form').reset();


    }

    return (
        <section className={`${styles.container} p-8 bg-slate-100`}>
            <div className='max-w-screen-xl flex flex-col md:flex-row-reverse md:items-center gap-16 m-auto '>
                <div className={`${styles.right} flex-1`}>
                    <header>
                        <h2 className='text-teal-400 text-3xl font-semibold mb-4'>Covid Case Form</h2>
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
                        />

                        <label htmlFor="kota">Kota</label>
                        <select className={styles.form__input} name="kota" id="kota" required>
                            <option value=''>Pilih Kota</option>
                            {data.provinces.map((province, index) => {
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
                        <select className={styles.form__input} name="status" id="status" required>
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
                <div className={`${styles.left} flex-1`}>
                    <img className='w-full' src="/assets/hero.png" alt="" />
                </div>
            </div>
        </section>
    )
}
