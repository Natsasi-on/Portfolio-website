import { useState } from 'react';
import Projectxyz from './3-project3'
import './3-project.css'

function ProjectBox() {
    const [toggle, setToggle] = useState('all');
    return (
        <div>
            {/* web dev project filter */}
            <p className="h4 project-title">Web Development</p>
            <div className="gradient-container project-filter">
                <button onClick={() => setToggle("ALL")}>All</button>
                <button onClick={() => setToggle("PHP")}>PHP</button>
                <button onClick={() => setToggle("Node Js")}>Node</button>
                <button onClick={() => setToggle("React Js")}>React Js</button>
                <button onClick={() => setToggle("WordPress")}>WordPress</button>
                <button onClick={() => setToggle("ASP.NET")}>ASP.NET</button>
                <button onClick={() => setToggle("JavaScript")}>JavaScript</button>
            </div>
            <br></br>
            <div className="project-box-container">
                {toggle === 'PHP' ? <Projectxyz model="PHP" />
                    : toggle === 'Node Js' ? <Projectxyz model="Node Js" /> : toggle === 'React Js' ? <Projectxyz model="React Js" /> : toggle === 'WordPress' ? <Projectxyz model="WordPress" /> : toggle === 'ASP.NET' ? <Projectxyz model="ASP.NET" /> : toggle === 'JavaScript' ? <Projectxyz model="JavaScript" /> : <Projectxyz model="all" />}
            </div >
        </div >
    );
}

export default ProjectBox;