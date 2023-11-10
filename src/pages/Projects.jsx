//----- IMPORTS -----//

//CSS
import '../assets/css/Projects.css';

//Images
import star from '../assets/images/star.png';

//Components
import Menu from '../components/Menu';
import Footer from '../components/Footer';

//----- EXPORTS -----//
export default function Projects() {

    const projects = [
        {
            title: 'Know CSS',
            repo: 'https://github.com/laineycreighton/know-css',
            website: 'https://knowcss.netlify.app/'
        },
        {
            title: 'Secureon',
            repo: 'https://github.com/laineycreighton/secureon',
            website: 'https://secureon.netlify.app/'
        },
        {
            title: 'Note Taker',
            repo: 'https://github.com/laineycreighton/note-taker',
            website: 'https://note-taker-lc-f3a7a9f96b3c.herokuapp.com/'
        },
        {
            title: 'Upstream Travel',
            repo: 'https://github.com/elenagurchinskaia/upstream-travel',
            website: 'https://elenagurchinskaia.github.io/upstream-travel/'
        },
        {
            title: 'Lake Tahoe',
            repo: 'https://github.com/laineycreighton/landing-page',
            website: 'https://laineycreighton.github.io/landing-page/'
        },
        {
            title: 'Bear Safety Quiz',
            repo: 'https://github.com/laineycreighton/code-quiz',
            website: 'https://laineycreighton.github.io/code-quiz/'
        },
        {
            title: 'Work Day Scheduler',
            repo: 'https://github.com/laineycreighton/work-schedule',
            website: 'https://laineycreighton.github.io/work-schedule/'
        },
    ];

    //Return
    return (
        <div className='projects-page'>

            {/* Menu */}
            <Menu />

            {/*-- Heading --*/}
            <header className='projects-header'>
                <img src={star} alt='star' />
                <h2>PROJECTS</h2>
            </header>

            <div className='projects-main'>
                <div className='all-projects'>
                    <div className="project-grid">
                        {projects.map((project) => (
                            <div className="project-card">
                                <h3>{project.title}</h3>
                                <div className='project-links-container'>
                                    <div className='project-links'>
                                        <a href={project.website} target='blank' >website</a>
                                        <a href={project.repo} target='blank' >repo</a>
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