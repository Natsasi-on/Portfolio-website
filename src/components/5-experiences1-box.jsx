import './5-experiences.css'
import { experience } from '../data/data'


function ExperienceBox() {
    return (
        <div>
            {
                experience.map((item) => <div className="gradient-container experience-box">
                    <div className="top-box-edu">
                        <div className='image-box'>
                            <img src={item.image} alt="work logo" />
                        </div>
                        <div className="text-title">
                            <p className="h4 title-ex">{item.position} </p>
                            <p className="p p-ex">{item.location} </p>
                            <p className="p p-ex">{item.date}</p>
                        </div>

                    </div>
                    <div className="sum-ex">
                        <ul className="p p-ex ">Responsibilities:
                            {item.responsibilities.map((myitem) => <li>{myitem}</li>)}
                        </ul>
                        <br />
                        <div className="skill-ex">
                            <div><p className='h5 title'>Skills:</p></div>
                            <ul>
                                {item.skills.map((myitem) => <li>{myitem}</li>)}
                            </ul>
                        </div>
                        <br />
                        <div className="skill-ex">
                            <div><p className='h5 title'>Tools:</p></div>
                            <ul>
                                <li>{item.tools}</li>
                            </ul>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default ExperienceBox;