import './2-skills.css'
import Skillbox from './2-skills2-box'

function Skills() {
    return (
        <section>
            <p className="h2">Skills</p>
            <p className='p'>Here are some skills I've been honing over the past 2 years.</p>
            <Skillbox />

            <div id='project-section'></div>
        </section>
    );
}

export default Skills;