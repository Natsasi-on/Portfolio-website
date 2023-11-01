import './4-ovelay.css'
import { projectsweb } from '../data/data'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Overlay(props) {

    let { id } = useParams();
    return (
        <>
            <Outlet />
            <div id="overlay">
                {open}
                <section className='overlay-box'>
                    {projectsweb.filter(item => item.id == id).map(filteredItem => <div className="gradient-container overlay-container">
                        <Link to="/" >
                            <button className='gradient-text'>&#x2716;</button>
                        </Link>
                        <div className='crop-image-big-web'>
                            <img src={"/project" + filteredItem.image} alt={filteredItem.title + " image"} />
                        </div>
                        <ul className="technology-big">
                            {filteredItem.tags.map((mytag) => <li className='p-big'>{mytag}</li>)}
                        </ul>
                        <p className="h5-big">{filteredItem.title}</p>
                        <p className="sum">{filteredItem.description}</p>
                        {(() => {
                            switch (filteredItem.id) {
                                case 3: case 7: case 8:
                                    return <div className="btn">
                                        <div className='gradient-container gradient-btn'>
                                            <a href={filteredItem.github} target="_blank" className='gradient-text' >View code</a>
                                        </div>
                                    </div>
                                case 4: case 5: case 6:
                                    return <div className="btn">
                                        <div id="live-btn">
                                            <a href={filteredItem.live} target="_blank">View live website</a>
                                        </div>
                                    </div>
                                default:
                                    return <div className="btn">
                                        <div className='gradient-container gradient-btn'>
                                            <a href={filteredItem.github} target="_blank" className='gradient-text' >View code</a>
                                        </div>

                                        <div id="live-btn">
                                            <a href={filteredItem.live} target="_blank">View live website</a>
                                        </div>

                                    </div>
                            }
                        })()}

                    </div>)}
                </section>
            </div>
        </>
    );
}

export default Overlay;