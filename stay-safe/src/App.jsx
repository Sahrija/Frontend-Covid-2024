import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import Indonesia from './pages/Indonesia';
import Province from './pages/Province';
import About from './pages/About';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='indonesia' element={<Indonesia />}></Route>
          <Route path='province' element={<Province />}></Route>
          <Route path='about' element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
