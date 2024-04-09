import style from'./App.module.css';
// import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Projects } from './components/projects/Projects';
import {Skills}  from './components/skills/Skills';
import { Footer } from './components/footer/Footer';
// import {Experience} from './components/experience/Experience';
import {ContactForm} from './components/form/ContactForm';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className={style.App}>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <About/>
      <ContactForm/>

      <Contact/>
      <Footer/>
      <ToastContainer/>
      
      
      
      {/* i want to show below all these pages simultaneously at single page ,that's why we have NOT use routes  */}
      {/* <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/skills' element={<Skills/>} />

      </Routes> */}
      
    </div> 
  );
}

export default App;
