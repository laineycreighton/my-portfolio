//----- IMPORTS -----//

//CSS
import '../assets/css/Skills.css';

//Images
import javascript from '../assets/images/javascript.png';
import react from '../assets/images/react.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import git from '../assets/images/git.png';
import graphql from '../assets/images/graphql.png';
import heroku from '../assets/images/heroku.png';
import jquery from '../assets/images/jquery.png';
import jwt from '../assets/images/jwt.png';
import mongodb from '../assets/images/mongodb.png';
import mysql from '../assets/images/mysql.png';
import netlify from '../assets/images/netlify.png';
import postman from '../assets/images/postman.png';
import sequelize from '../assets/images/sequelize.png';

//Files
import resume from '../assets/files/lainey-creighton-resume.pdf'

//Components
import Menu from '../components/Menu';
import Footer from '../components/Footer';

//----- EXPORTS -----//
export default function About() {

    //Return
    return (
        <div className='skills-page'>

            {/* Menu */}
            <Menu />

            {/*-- Heading --*/}
            <header className='skills-header'>
                <h2>SKILLS</h2>
            </header>

            {/*-- Skills --*/}
            <div className='skills'>
                <button className='resume'>
                    <a href={resume} download="lainey-creighton-resume.pdf">
                        resume
                    </a>
                </button>
                <div className='list'>
                    <div className='skill-type'>
                        <h4>FRONT END</h4>
                        <div>
                            <img src={react} />
                            <img src={javascript} />
                            <img src={jquery} />
                            <img src={html} />
                            <img src={css} />
                        </div>
                    </div>
                    <div className='skill-type'>
                        <h4>BACK END</h4>
                        <div>
                            <img src={mysql} />
                            <img src={sequelize} />
                            <img src={mongodb} />
                            <img src={graphql} />
                        </div>
                    </div>
                    <div className='skill-type'>
                        <h4>OTHER</h4>
                        <div>
                            <img src={jwt} />
                            <img src={postman} />
                        </div>
                    </div>
                    <div className='skill-type'>
                        <h4>DEPLOYMENT</h4>
                        <div>
                            <img src={git} />
                            <img src={heroku} />
                            <img src={netlify} />
                        </div>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <Footer />
        </div>
    );
}