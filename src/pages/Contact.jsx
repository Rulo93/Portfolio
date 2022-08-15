import Formulario from '../components/Formulario'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div>
    <Header />
    <div className='contact-principal'>
        <div className='contact-data'>
            <h1>Contacto</h1>
            <p><span>Locacion:<br/></span>
               Playa del Carmen, Mexico</p>
            <p><span>Telefono:<br/></span>
               984-233-80-16</p>
            <p><span>Email:<br/></span>
               raul_cano_mendez@hotmail.com</p> 
         
        </div>
        <div className='contact-form'>
            <h1>Contact Form</h1>
            <Formulario />
        </div>
      
    </div>
    <Footer />
    </div>
  )
}

export default Contact
