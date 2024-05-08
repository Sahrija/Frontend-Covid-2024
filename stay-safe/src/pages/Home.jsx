import { useState } from 'react';
import CovidFormSection from '../components/CovidFormSection/CovidFormSection';
import Hero from '../components/Hero/Hero';
import ProvinceSection from '../components/ProvinceSection/ProvinceSection';
import d from '../constants/provinces'


export default function Home() {

  const [province_data, setProvince] = useState(d);

  return (
    <>
      <main>
        <Hero />
        <ProvinceSection data={province_data} />
        <CovidFormSection province_state={[province_data, setProvince]} />
      </main>
    </>
  )
}
