import { useState } from 'react';
import CovidFormSection from '../components/CovidFormSection/CovidFormSection';
import Hero from '../components/Hero/Hero';
import ProvinceSection from '../components/ProvinceSection/ProvinceSection';
import raw_province_data from '../constants/provinces'
import raw_indonesia_data from '../constants/indonesia'
import IndonesiaSection from '../components/IndonesiaSection/IndonesiaSection';


export default function Home() {

  const [province_data, setProvinceData] = useState(raw_province_data);
  const [indonesia_data, setIndonesiaData] = useState(raw_indonesia_data);

  const [confirmed, setConfirmed] = useState(0)
  const [death, setDeath] = useState(0)
  const [recovered, setRecovered] = useState(0)

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
