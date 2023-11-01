import { useState } from 'react';
import Projectxyz from './3-project4'
import './3-project.css'

function ProjectBox() {
    const [toggle, setToggle] = useState('all');
    return (
        <div>
            {/* web dev project filter */}
            <p className="h4 project-title">Design</p>
            <div className="gradient-container project-filter">
                <button onClick={() => setToggle("ALL")}>All</button>
                <button onClick={() => setToggle("UI/UX design")}>UI/UX design</button>
                <button onClick={() => setToggle("Vector")}>Vector</button>
                <button onClick={() => setToggle("Logo")}>Logo</button>
                <button onClick={() => setToggle("Icon")}>Icon</button>
                <button onClick={() => setToggle("Photo editing")}>Photo editing</button>
                <button onClick={() => setToggle("Infographic")}>Infographic</button>
            </div>
            <br></br>
            <div className="project-box-container">
                {toggle === 'UI/UX design' ? <Projectxyz model="UI/UX design" />
                    : toggle === 'Vector' ? <Projectxyz model="Vector" /> : toggle === 'Logo' ? <Projectxyz model="Logo" /> : toggle === 'Icon' ? <Projectxyz model="Icon" /> : toggle === 'Photo editing' ? <Projectxyz model="Photo editing" /> : toggle === 'Infographic' ? <Projectxyz model="Infographic" /> : <Projectxyz model="all" />}
            </div >
        </div >
    );
}

export default ProjectBox;