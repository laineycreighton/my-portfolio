//----- IMPORTS -----//
import { Link } from 'react-router-dom'

//CSS
import '../assets/css/Contact.css';

//Images
import github from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.svg';
import portfolio from '../assets/images/briefcase.svg';
import email from '../assets/images/email.svg';

//----- EXPORTS -----//
export default function Dev() {

    //Email
    const emailAddress = 'dev.lainey@gmail.com';

    //Return
    return (
        //---------- BODY ----------//
        <div className='dev-page'>

            {/*-- Nav --*/}
            <div className='back'>
                <Link className='back-link' to="/">Back</Link>
            </div>

            {/*-- Main --*/}
            <div className='dev'>

                {/* Header */}
                <header className='dev-header'>
                    <h3>Meet the Developer</h3>
                </header>

                {/* About */}
                <div className='about'>
                    <p>Hello, I'm Lainey Creighton, a passionate developer with a current focus in JavaScript and React, where I'm honing my skills to create engaging and interactive web experiences. I'm particularly drawn to the art of web design, using CSS to craft visually appealing and user-friendly websites.</p>
                    <p>Beyond the screen, I thrive in the great outdoors. When I'm not coding, you can often find me paddle boarding, rafting, camping, hiking, and exploring the beauty of nature. I believe that just like in coding, the best adventures are the ones where you embrace the journey.</p>
                    <p className='thank-you'>Thank you for visiting my site, and feel free to connect with me for networking, collaboration, or to explore the exciting world of web development together.</p>
                </div>

                {/* Contact */}
                <div className='contact'>
                    <a href='https://github.com/laineycreighton' target='_blank'><img src={github} alt='github logo' /></a>
                    <a href='https://www.linkedin.com/in/lainey-creighton/' target='_blank'><img src={linkedin} alt='linkedin logo' /></a>
                    <a href='https://laineycreighton.netlify.app/' target='_blank'><img src={portfolio} alt='briefcase logo' /></a>
                    <a href={`mailto:${emailAddress}`} target='_blank'><img src={email} alt='email logo' /></a>
                </div>
            </div>
        </div>
    )
}