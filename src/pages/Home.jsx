//----- IMPORTS -----//

//CSS
import '../assets/css/Home.css';

//Images
import star from '../assets/images/star.png';
import header from '../assets/images/header.png';

//Components
import Menu from '../components/Menu';
import Footer from '../components/Footer';

//----- EXPORTS -----//
export default function Home() {

    //Return
    return (
        <div className='home'>

            {/* Menu */}
            <Menu />

            {/* Heading */}
            <div className='heading-container'>
                <div className='intro'>
                    <h1>HI, I'M LAINEY</h1>
                    <p>full stack developer</p>
                </div>
                <div className='rotating-star'>
                    <img src={star} alt='star' />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}