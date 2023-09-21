//----- IMPORTS -----//
import { Link } from 'react-router-dom'

//CSS
import '../assets/css/Contact.css';

//Images
import github from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.svg';
import email from '../assets/images/email.svg';

//Components
import Menu from '../components/Menu';
import Footer from '../components/Footer';

//----- EXPORTS -----//
export default function Home() {

    const emailAddress = 'dev.lainey@gmail.com';

    //Return
    return (
        <div className='contact-page'>

            {/* Menu */}
            <Menu />

            {/*-- Heading --*/}
            <div className='contact-header'>
                <h5>Let's work together</h5>
                <a className='hello' href={emailAddress} target='_blank' >
                    say hello
                </a>
            </div>

            {/* Contact */}
            <div className='contact-links'>
                <img src={github} />
                <img src={linkedin} />
                <img src={email} />
            </div>
        </div>
    )
}