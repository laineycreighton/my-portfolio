//----- IMPORTS -----//
import { Link } from 'react-router-dom';

//CSS
import '../assets/css/Footer.css';

//Images
import separator from '../assets/images/separator.svg';
import github from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.svg';
import email from '../assets/images/email.svg';

//----- EXPORTS -----//
export default function Footer() {

    //Return
    return (
        //---------- FOOTER ----------//
        <footer>
            <div>
                <p className='tag'>MADE WITH <span className='passion'>Passion</span> BY <Link className='my-name' to="/dev">LAINEY CREIGHTON</Link></p>
            </div>
            <div className='separator'>
                {/* <img src={separator} alt='separator' /> */}
            </div>
            <div className='contact-icons'>
                <a><img src={github} alt='github' /></a>
                <a><img src={linkedin} alt='linkedin' /></a>
                <a><img src={email} alt='email' /></a>
            </div>
        </footer>
    )
}