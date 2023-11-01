import './3-project.css'
import project1 from '/project/Slide1.png'
import ProjectBox from './3-project2-box'
import ProjectBox2 from './3-project2-box2'
import ProjectDesign from './3-project2-design'


function Project() {
    // function off() {
    //     document.getElementById("overlay").style.display = "none";
    // }

    return (
        <section id="myProject">
            <p className="h2">Projects</p>
            <p className='p'>I've had the opportunity to work on a diverse array of projects, spanning both design and web development. <br />Let me share a few examples of my work</p>
            {/* <ProjectBox /> */}
            <ProjectBox2 />
            <ProjectDesign />
            <div id='experience-section'></div>
        </section >
    );
}

export default Project;