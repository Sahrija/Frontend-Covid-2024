import React, { useState } from 'react'
import ProvinceSection from '../components/ProvinceSection/ProvinceSection'

import raw_province_data from '../constants/provinces'
import Hero from '../components/Hero/Hero';
import CovidFormSection from '../components/CovidFormSection/CovidFormSection';


const Province = () => {

  const [data, setData] = useState(raw_province_data);


  return (

    <>
      <Hero />
      <ProvinceSection data={data} />
      <CovidFormSection province_state={[data,setData]}/>
    </>
  )
}

export default Province
