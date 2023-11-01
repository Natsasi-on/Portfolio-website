import './2-skills.css'
import { myskills } from '../data/data'

function Skillbox() {
    return (
        <div className="parent-skill">
            {
                myskills.map((item) =>
                    <div className="gradient-container skills">
                        <div className="skill-container">
                            <p className="h4 gradient-text title-skill">{item.title}</p>
                            <div className="box-skills-only">
                                {
                                    item.skills.map((itemeach) =>
                                        <div className="each-skill-box">
                                            <img src={"/skills" + itemeach.image} alt={itemeach.name + " logo"} />
                                            <p className='p'>{itemeach.name}</p>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Skillbox;