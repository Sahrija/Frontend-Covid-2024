import { useEffect, useState } from 'react';
import CovidFormSection from '../components/CovidFormSection/CovidFormSection';
import Hero from '../components/Hero/Hero';
import ProvinceSection from '../components/ProvinceSection/ProvinceSection';
import IndonesiaSection from '../components/IndonesiaSection/IndonesiaSection';

import raw_province_data from '../constants/provinces'
import raw_indonesia_data from '../constants/indonesia'

import GlobalSection from '../components/GlobalSection/GlobalSection';
import RegionSection from '../components/RegionSection/RegionSection';

import { fetchGlobalData } from '../services/covidApi';


export default function Home() {

  const [province_data, setProvinceData] = useState(raw_province_data);
  const [indonesia_data, setIndonesiaData] = useState(raw_indonesia_data);
  const [global_data, setGlobalData] = useState({});

  useEffect(() => {
    fetchGlobalData()
      .then((data) => {
        setGlobalData(data);
      }).catch((error) =>
        console.log(error)
        // toast error
      )
  }, [])


  return (
    <>
      <main>
        <Hero />
        <GlobalSection data={global_data}/>
        <RegionSection data={global_data}/>
      </main>
    </>
  )
}
