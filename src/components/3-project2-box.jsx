import { projectsweb } from '../data/data'
import { projectsdesign } from '../data/data'
import './3-project.css'


function ProjectBox() {

    function Activity() {
        return (alert("Great Shot!"));
    }
    function Activity2() {
        return (alert("Great Shot!"));
    }

    return (
        <div>
            {/* web dev project filter */}
            <p className="h4 project-title">Web Development</p>
            <div className="gradient-container project-filter">
                <a href="" onClick={Activity2}>All</a>
                <a href="">React</a>
                <a href="">Node.js</a>
                <a href="">PHP</a>
                <a href="">ASP.NET</a>
                <a href="">JavaScript</a>
            </div>
            <br></br>

            {/* box */}
            <div className="project-box-container">
                {
                    projectsweb.map((item) =>
                        <div className="gradient-container project-gradient">
                            <a href="">
                                <div className='crop-image'>
                                    <img src={"/project" + item.image} alt={item.title + " image"} />
                                </div>
                                <ul className="technology">
                                    {item.tags.map((mytag) => <li className='p color-tect'>{mytag}</li>)}
                                </ul>
                                <p className="h5 title-each">{item.title}</p>
                                <p className="p">{item.description}</p>
                            </a>
                        </div>)
                }
            </div>

            {/*web design project filter */}
            <p className="h4 project-title">Web Design</p>
            <div className="gradient-container project-filter">
                <a href="">All</a>
                <a href="">UI/UX design</a>
                <a href="">Vector</a>
                <a href="">Icon</a>
                <a href="">Logo</a>
                <a href="">Photo editing</a>
                <a href="">Infographic</a>
            </div>
            <br></br>

            {/* box */}
            <div className="project-box-container">
                {
                    projectsdesign.map((item) =>
                        <a href="">
                            <div className='image-style-box'>
                                <img src={"/project" + item.image} alt={item.title + " image"} />

                            </div>
                        </a>
                    )
                }
            </div>
        </div >
    );
}

export default ProjectBox;