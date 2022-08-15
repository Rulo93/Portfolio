import {Outlet, Link} from 'react-router-dom' 
import '../styles/header.css'

const Header = () => {
  return (
    <header>
     <div className="container">
      <div className='logo-container'>
        <Link className='home' to='/'>
         <p>R</p>
            <p>&nbsp;&nbsp;&nbsp;C</p>
        </Link>  
      </div>
      <nav className='menu-container'>  
        <Link className='link' to='/AboutMe'>About Me</Link>
        <Link className='link' to='/Proyects'>Proyects</Link>
        <Link className='link' to='/Contact'>Contact</Link>   
      </nav>
     </div>
        

        <Outlet />
      
    </header>
  )
}

export default Header
