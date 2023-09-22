//----- IMPORTS -----//
import { Link } from 'react-router-dom'

//CSS
import '../assets/css/Contact.css';

//Images
import github from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.svg';
import email from '../assets/images/email.svg';
import star from '../assets/images/star.png';

//Components
import Menu from '../components/Menu';

//----- EXPORTS -----//
export default function Home() {

    const mygithub = 'https://github.com/laineycreighton';
    const mylinkedin = 'https://www.linkedin.com/in/lainey-creighton/';
    const myemail = 'dev.lainey@gmail.com';

    //Return
    return (
        <div className='contact-page'>

            {/* Menu */}
            <Menu />

            {/*-- Heading --*/}
            <div className='contact-header'>
                <h5>Let's work together</h5>
                <a className='hello' href={`mailto:${myemail}`} target='_blank' >
                    say hello
                </a>
            </div>

            {/* Contact */}
            <div className='contact-links'>
                <a href={mygithub} target='_blank' ><img src={github} alt='github' /></a>
                <a href={mylinkedin} target='_blank' ><img src={linkedin} alt='linkedin' /></a>
                <a href={myemail} target='_blank' ><img src={email} alt='email' /></a>
            </div>
        </div>
    )
}