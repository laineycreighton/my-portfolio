//----- IMPORTS -----//

//CSS
import '../assets/css/Home.css';

//Images
import header from '../assets/images/header.png';

//Components
import Menu from '../components/Menu';
import Footer from '../components/Footer';

//----- EXPORTS -----//
export default function Home() {

    //Return
    return (
        //---------- BODY ----------//
        <div className='home'>

            {/* Menu */}
            <Menu />

            {/* Cards */}
            <div className='heading-container'>
                {/* <div>
                    <div>
                        <h1>HI, I'M LAINEY</h1>
                    </div>
                    <div>
                        <p>full stack developer</p>
                    </div>
                </div> */}
                <div className='heading'>
                    <img src={header} alt='heading placeholder' />
                </div>
            </div>

            {/* Footer */}
                <Footer />
        </div>
    )
}