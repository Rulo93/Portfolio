import Footer from '../components/Footer'
import '../styles/principal.css'


const principal = () => {
  return (
    <>
    <div className='principal-container'>
      <div className='container-first'>
        <p>I 'am </p>
      </div>
      <div className='container-second'>
        <h2><span>R</span>aul</h2>
        <h2>&nbsp;&nbsp;<span>C</span>ano</h2>
      </div>
      <div className='container-third'>
        <p>A junior</p>
        <p>Frontend developer</p>
      </div>



    </div>  
    <Footer />
    </>
    
  )
}

export default principal
