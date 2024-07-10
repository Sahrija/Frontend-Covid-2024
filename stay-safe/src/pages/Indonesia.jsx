import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero/Hero'
import IndonesiaSection from '../components/IndonesiaSection/IndonesiaSection'
import { fetchIndonesiaData } from '../services/covidApi'

const Indonesia = () => {
  const [indonesiaData, setGlobalData] = useState({})

  // Fetch data from API or local state
  useEffect(() => {
    fetchIndonesiaData()
      .then((data) => {
        console.log(data)
        setGlobalData(data);
      }).catch((error) =>
        console.log(error)
        // toast error
      )
  }, [])
  

  return (
    <>
      <Hero />
      <IndonesiaSection data={indonesiaData} />
    </>
  )
}

export default Indonesia
