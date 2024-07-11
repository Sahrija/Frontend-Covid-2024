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
import { GlobalDataProvider } from '../context/GlobalDataContext';


export default function Home() {
  return (
    <>
      <main>
        <GlobalDataProvider>
          <Hero />
          <GlobalSection/>
          <RegionSection/>
        </GlobalDataProvider>
      </main>
    </>
  )
}
