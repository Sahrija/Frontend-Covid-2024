import { useEffect, useState } from 'react';
import CovidFormSection from '../components/CovidFormSection/CovidFormSection';
import Hero from '../components/Hero/Hero';
import ProvinceSection from '../components/ProvinceSection/ProvinceSection';
import IndonesiaSection from '../components/IndonesiaSection/IndonesiaSection';

import raw_province_data from '../constants/provinces'
import raw_indonesia_data from '../constants/indonesia'
import Section from '../components/shared/Section/Section';
import GlobalSection from '../components/GlobalSection/GlobalSection';
import axios from 'axios';


export default function Home() {

  const [province_data, setProvinceData] = useState(raw_province_data);
  const [indonesia_data, setIndonesiaData] = useState(raw_indonesia_data);
  const [global_data, setGlobalData] = useState({});

  useEffect(()=>{
    async function fetchGlobalData(){
      const response = await axios('https://covid-fe-2023.vercel.app/api/global.json');
      setGlobalData(response.data);
      console.log(response.data);
    }

    fetchGlobalData();
  }, [])


  return (
    <>
      <main>
        <Hero />
        <IndonesiaSection data={indonesia_data} />
        <ProvinceSection data={province_data} />
        <GlobalSection data={global_data}></GlobalSection>
      </main>
    </>
  )
}
