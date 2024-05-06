import CovidFormSection from '../components/CovidFormSection/CovidFormSection';
import Hero from '../components/Hero/Hero';
import ProvinceSection from '../components/ProvinceSection/ProvinceSection';



export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProvinceSection />
        <CovidFormSection />
      </main>
    </>
  )
}
