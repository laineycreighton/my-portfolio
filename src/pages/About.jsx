//----- IMPORTS -----//

//CSS
import '../assets/css/About.css';

//Components
import Menu from '../components/Menu';
import Footer from '../components/Footer';

//----- EXPORTS -----//
export default function About() {

    //Return
    return (
        <div className='about-page'>

            {/* Menu */}
            <Menu />

            <div className='about-main'>
                {/*-- Heading --*/}
                <header className='about-header'>
                    <h2>ABOUT</h2>
                </header>
                <div className='bio'>
                    <p>Hello, I'm Lainey Creighton, a passionate developer with a current focus in JavaScript and React, where I'm honing my skills to create engaging and interactive web experiences.</p>
                    <p>Beyond the screen, I thrive in the great outdoors. When I'm not coding, you can often find me paddle boarding, rafting, camping, hiking, and exploring the beauty of nature. I believe that just like in coding, the best adventures are the ones where you embrace the journey.</p>
                    <p className='thank-you'>Thank you for visiting my site, and feel free to connect with me for networking, collaboration, or to explore the exciting world of web development together!</p>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}