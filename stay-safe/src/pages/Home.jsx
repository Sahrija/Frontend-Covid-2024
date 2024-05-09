import { useState } from 'react';
import CovidFormSection from '../components/CovidFormSection/CovidFormSection';
import Hero from '../components/Hero/Hero';
import ProvinceSection from '../components/ProvinceSection/ProvinceSection';
import IndonesiaSection from '../components/IndonesiaSection/IndonesiaSection';

import raw_province_data from '../constants/provinces'
import raw_indonesia_data from '../constants/indonesia'


export default function Home() {

  const [province_data, setProvinceData] = useState(raw_province_data);
  const [indonesia_data, setIndonesiaData] = useState(raw_indonesia_data);

  return (
    <>
      <main>
        <Hero />
        <IndonesiaSection data={indonesia_data}/>
        <ProvinceSection data={province_data} />
        <CovidFormSection 
        province_state={[province_data, setProvinceData]}
        indonesia_state={[indonesia_data, setIndonesiaData]}
         />
      </main>
    </>
  )
}
