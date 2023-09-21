//----- IMPORTS -----//

//CSS
import '../assets/css/Projects.css';

//Components
import Menu from '../components/Menu';
import Footer from '../components/Footer';

//----- EXPORTS -----//
export default function Projects() {

    const projects = [
        {
            title: 'Sasquest',
            repo: 'https://github.com/laineycreighton/sasquest',
            website: 'https://sasquest-52c8b076a68a.herokuapp.com/'
        },
        {
            title: 'Know CSS',
            repo: 'https://github.com/laineycreighton/know-css',
            website: 'https://knowcss.netlify.app/'
        },
        {
            title: 'enDEVors',
            repo: 'https://github.com/ssherp/EnDEVor',
            website: 'https://endevor-3d604fa0490c.herokuapp.com/'
        },
        {
            title: 'Upstream Travel',
            repo: 'https://github.com/elenagurchinskaia/upstream-travel',
            website: 'https://elenagurchinskaia.github.io/upstream-travel/'
        },
        {
            title: 'Lake Tahoe Landing Page',
            repo: 'https://github.com/laineycreighton/landing-page',
            website: 'https://laineycreighton.github.io/landing-page/'
        },
        {
            title: 'Bear Safety Quiz',
            repo: 'https://github.com/laineycreighton/code-quiz',
            website: 'https://laineycreighton.github.io/code-quiz/'
        },
    ];

    //Return
    return (
        <div className='projects-page'>

            {/* Menu */}
            <Menu />

            <div className='projects-main'>
                {/*-- Heading --*/}
                <header className='projects-header'>
                    <h2>PROJECTS</h2>
                </header>

                <div className='all-projects'>
                    <div className="project-grid">
                        {projects.map((project) => (
                            <div className="project-card">
                                <h3>{project.title}</h3>
                                <div className='project-links-container'>
                                    <div className='project-links'>
                                    <a href={project.website} >website</a>
                                    <a href={project.repo} >repo</a>
                                    </ div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {/* Footer */}
            < Footer />
        </div>
    );
}