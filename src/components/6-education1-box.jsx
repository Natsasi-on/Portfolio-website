import './6-education.css'
import { education } from '../data/data'


function EducationLeft() {
    return (
        <div className="edu-box">
            {education.map((item, index) => {
                if (index % 2 === 0) {
                    return <div className="gradient-container experience-box edu-each float-left">
                        <div className="top-box-edu">
                            <div className="image-box">
                                <img src={item.image} alt="school logo" />
                            </div>
                            <div className="text-title group-text">
                                <p className="h4 title-ex"><a href={item.link} target='_blank'>{item.degree}</a></p>
                                <p className="p p-ex">{item.school}</p>
                                <p className="p p-ex">{item.date}</p>
                            </div>
                        </div>
                        <div className="sum-ex">
                            <div className="edu-desc">
                                <div>{item.grade}</div>
                            </div>
                            <div className="edu-desc">
                                <div>{item.area}</div>
                            </div>
                        </div>
                    </div>;
                } else {
                    return <div className="gradient-container experience-box edu-each float-right">
                        <div className="top-box-edu">
                            <div className="image-box">
                                <img src={item.image} alt="school logo" />
                            </div>
                            <div className="text-title group-text">
                                <p className="h4 title-ex"><a href={item.link} target='_blank'>{item.degree}</a></p>
                                <p className="p p-ex">{item.school}</p>
                                <p className="p p-ex">{item.date}</p>
                            </div>
                        </div>
                        <div className="sum-ex">
                            <div className="edu-desc">
                                <div>{item.grade}</div>
                            </div>
                            <div className="edu-desc">
                                <div>{item.area}</div>
                            </div>
                        </div>
                    </div>;
                }
            })}
        </div>
    );
}

export default EducationLeft;