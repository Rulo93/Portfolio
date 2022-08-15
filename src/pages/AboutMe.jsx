import Header from "../components/Header"
import Footer from "../components/Footer"
import '../styles/AboutMe.css'
import Photo from '../assets/IMG_20220811_175114-removebg-preview.png'

const AboutMe = () => {
  return (
    <div>
      <>
      <Header />
      <div className="container-me">
        <div className="photo">
          <img src={Photo} alt="Me"/>
        </div>
        <div className="data">
          <h2>Datos Presonales:</h2>
          <p><span>Nombre:</span> Raul Arturo Cano Mendez</p>
          <p><span>Edad:</span> 29 años</p>
          <p><span>Lugar de Nacimiento:</span> Cancun, Mexico</p>
          <p><span>Residencia:</span> Playa del Carmen, Quintana Roo, Mexico</p>
          <h2>Habilidades profesionales:</h2>
          <p><span>Lenguajes de programacion:</span> Javascript, HTML, CSS y React </p>  
          <p><span> Idiomas:</span> Español nativo, Ingles nivel medio.</p>
          <p><span>Extras:</span> Dominio de Strapi, MongoDb, Vite, TailwindCss, Formik, Next.js, Wordpress, Git, Github, GIMP.</p> 
          <h2>Experiencia:</h2>
          <p><span>Certificacion en Diseño Web Responsivo con HTML5, CSS3 Y JavaScript :</span><a href='https://www.freecodecamp.org/certification/fcc68d98781-7156-4dee-a3d3-f6a2e5c6ed5b/responsive-web-design' target="_BLANK"> FreeCodeCamp</a></p> 
          <p>1 año como programador web Freelancer. </p>
          <p>Desarrollo de Paginas Web y Aplicaciones. </p>  
          <p>Uso y analisis de base de datos. </p>

        </div>

      </div>

      <Footer />
      </>
    </div>
  )
}

export default AboutMe
