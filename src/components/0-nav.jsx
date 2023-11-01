import './0-nav.css'
import linkedInIcon from '/linkedin-in.svg'
import phoneIcon from '/phone-solid.svg'
import emailIcon from '/envelope-solid.svg'
import { Bio } from '../data/data'

function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="#" id="portLogo">Portfolio</a></li>
                <div className='link'>
                    <li><a href="#skill-section">Skills</a></li>
                    <li><a href="#project-section">Projects</a></li>
                    <li><a href="#experience-section">Experiences</a></li>
                    <li><a href="#education-section">Educations</a></li>
                    <li><a href="#contact-section">Contacts</a></li>
                    <div className="social">
                        <li>
                            <a href={Bio.linkedin} title="My LinkedIn" target='_blank'>
                                <img src={linkedInIcon} alt="LinkedIn Icon" className="logo" />
                            </a>
                        </li>
                        <li>
                            <a href={Bio.tel} title={Bio.tel}>
                                <img src={phoneIcon} alt="Phone Icon" className="logo" />
                            </a>
                        </li>
                        <li><a href={Bio.email} title='natsasion.sri@gmail.com'>
                            <img src={emailIcon} alt="Email Icon" className="logo" />
                        </a>
                        </li>
                    </div>
                    <li className='gradient-container github-container'>
                        <a href={Bio.github} className="gradient-text github-text" target='_blank'>GitHub Profile</a>
                    </li>

                </div>
            </ul>
            {/* hamberger */}
            <a href="#side-drawer" class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
            <aside id="side-drawer">
                <li><a href="#" id="port">Portfolio</a></li>
                <header>
                    <a href="#" class="hamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </a>
                </header>
                <ul id="mysideBar">
                    <li><a href="#skill-section">Skills</a></li>
                    <li><a href="#project-section">Projects</a></li>
                    <li><a href="#experience-section">Experiences</a></li>
                    <li><a href="#education-section">Educations</a></li>
                    <li><a href="#contact-section">Contact</a></li>
                    <div className="social">
                        <li>
                            <a href={Bio.linkedin} title={Bio.linkedin} target='_blank'>
                                <img src={linkedInIcon} alt="LinkedIn Icon" className="logo" />
                            </a>
                        </li>
                        <li>
                            <a href={Bio.tel} title={Bio.tel}>
                                <img src={phoneIcon} alt="Phone Icon" className="logo" />
                            </a>
                        </li>
                        <li><a href={Bio.email} title='natsasion.sri@gmail.com'>
                            <img src={emailIcon} alt="Email Icon" className="logo" />
                        </a>
                        </li>
                    </div>
                    <li className='gradient-container github-container'>
                        <a href={Bio.github} className="gradient-text github-text" target='_blank'>GitHub Profile</a>
                    </li>
                </ul>
            </aside>
        </nav>

    );
}

export default Nav;