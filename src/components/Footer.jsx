import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faInstagram, faHtml5, faCss3Alt, faJs, faReact, faGitAlt, faWordpress, faGithub } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
        <div className="sociales">
           <a href='https://www.linkedin.com/in/ra%C3%BAl-arturo-cano-m%C3%A9ndez-16739a230/' target='_BLANK'><FontAwesomeIcon 
           className='social-icon'
           icon={faLinkedin}
           color='white' /></a>
           <a href='https://www.instagram.com/raulcanomendez/' target='_BLANK'><FontAwesomeIcon 
           className='social-icon'
           icon={faInstagram}
           color='white' /></a>
           <a href='https://twitter.com/raul_cano_mend?t=vs5yt5oazZjA_kHs5Xzrdg&s=09' target='_BLANK'><FontAwesomeIcon
           className='social-icon' 
           icon={faTwitter}
           color='white' /></a>
           <a href='https://github.com/Rulo93' target='_BLANK'><FontAwesomeIcon
           className='social-icon' 
           icon={faGithub}
           color='white' /></a>
          

           
                      
        </div>
        <div className="skills">
        <FontAwesomeIcon 
           className='html'
           icon={faHtml5} 
           size='1x'/>
           <FontAwesomeIcon 
           className='css'
           icon={faCss3Alt} 
           size='1x'/>
           <FontAwesomeIcon 
           className='js'
           icon={faJs} 
           size='1x'/>
           <FontAwesomeIcon 
           className='react'
           icon={faReact} 
           size='1x'/>
           <FontAwesomeIcon 
           className='git'
           icon={faGitAlt} 
           size='1x'/>
           <FontAwesomeIcon 
           className='wordpress'
           icon={faWordpress}
           size= '1x'
           />
        </div>
        </div>
    </footer>
  )
}

export default Footer