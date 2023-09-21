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
                    <div>
                        Hello, I'm Lainey Creighton, a passionate software developer with a strong foundation in hospitality and events management. With over eight years of experience in customer-centric environments, I have received a full stack we development certification to dive into the dynamic world of software development. I'm driven by curiosity, excited to merge creative problem-solving with precise programming, and dedicated to embracing challenges in this evolving industry.
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}