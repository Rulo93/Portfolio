import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/Proyects.css'
import proyect1 from '../assets/cripto.png'
import proyect2 from '../assets/gastos.png'
import proyect3 from '../assets/veterinaria.png'
import proyect4 from '../assets/electroplaya.png'

const Proyects = () => {
  return (
    <div>
    <Header />
    <div className="proyect-container">
      <div className="proyect">
          <a href='https://cotizar-criptos-react.netlify.app/' target='_BLANK'><img src={proyect1} alt="Proyecto 1"/></a>
          <h2>Cotizador de Criptomonedas</h2>
          <p>Aplicacion web creada con React,Vite y Styled-Components.</p>
      </div>
      <div className="proyect">
      <a href='https://control-gastos-con-react.netlify.app/' target='_BLANK'><img src={proyect2} alt="Proyecto 2"/></a>
          <h2>Administrador de Gastos</h2>
          <p>Aplicacion web creada con React,Vite y Local-Storage.</p>
      </div>
      <div className="proyect">
      <a href='https://seguimiento-de-pacientes-con-react.netlify.app/' target='_BLANK'><img src={proyect3} alt="Proyecto 3"/></a>
          <h2>Administrador de Pacientes</h2>
          <p>Aplicacion web creada con React,Vite y TailwindCss.</p>
      </div>
      <div className="proyect">
      <a href='https://electroplayawebsite.netlify.app/' target='_BLANK'><img src={proyect4} alt="Proyecto 4"/></a>
          <h2>Pagina Web</h2>
          <p>Pagina web estatica con Formulario creada con React, Vite, Formik, CSS y JavaScript.</p>
      </div>
    </div>
    <Footer />
    </div>

  )
}

export default Proyects