import './4-ovelay.css'
import { projectsdesign } from '../data/data'
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
                    {projectsdesign.filter(item => item.id == id).map(filteredItem => <div className="gradient-container overlay-container">
                        <Link to="/" >
                            <button className='gradient-text'>&#x2716;</button>
                        </Link>
                        <div className='crop-image-big design-big'>
                            <img src={"/project" + filteredItem.image} alt={filteredItem.title + " image"} />
                        </div>
                        <ul className="technology-big">
                            {filteredItem.tags.map((mytag) => <li className='p-big'>{mytag}</li>)}
                        </ul>
                        <p className="h5-big">{filteredItem.title}</p>
                        <p className="sum">{filteredItem.description}</p>
                        {/* <div className="btn">
                            <div className='gradient-container gradient-btn'>
                                <a href={filteredItem.deck} target="_blank" className='gradient-text' >View Deck</a>
                            </div>
                            <div id="live-btn">
                                <a href={filteredItem.demo} target="_blank">Demo</a>
                            </div>
                        </div> */}
                        {(() => {
                            switch (filteredItem.id) {
                                case 0: case 3:
                                    return <>
                                        <div className="btn">
                                            <div className='gradient-container gradient-btn'>
                                                <a href={filteredItem.deck} target="_blank" className='gradient-text' >View Deck</a>
                                            </div>
                                        </div>
                                        <div className="btn btn-link">
                                            <div className='gradient-container gradient-btn'>
                                                <a href={filteredItem.wireframeMobile} target="_blank" className='gradient-text' >Mobile Wireframe</a>
                                            </div>
                                            <div className='gradient-container gradient-btn'>
                                                <a href={filteredItem.wireframeDesktop} target="_blank" className='gradient-text' >Desktop Wireframe</a>
                                            </div>
                                            <div id="live-btn">
                                                <a href={filteredItem.mockupMobile} target="_blank">Mobile Prototype</a>
                                            </div>
                                            <div id="live-btn">
                                                <a href={filteredItem.mockupDesktop} target="_blank">Desktop Prototype</a>
                                            </div>
                                        </div>
                                    </>
                                case 4:
                                    return <>
                                        <div className="btn">
                                            <div className='gradient-container gradient-btn'>
                                                <a href={filteredItem.deck} target="_blank" className='gradient-text' >View Deck</a>
                                            </div>
                                            <div id="live-btn">
                                                <a href={filteredItem.demo} target="_blank">Demo</a>
                                            </div>
                                        </div>
                                        <div className="btn btn-link">
                                            <div className='gradient-container gradient-btn'>
                                                <a href={filteredItem.wireframeMobile} target="_blank" className='gradient-text' >Mobile Wireframe</a>
                                            </div>
                                            <div className='gradient-container gradient-btn'>
                                                <a href={filteredItem.wireframeDesktop} target="_blank" className='gradient-text' >Desktop Wireframe</a>
                                            </div>
                                            <div id="live-btn">
                                                <a href={filteredItem.mockupMobile} target="_blank">Mobile Prototype</a>
                                            </div>
                                        </div>
                                    </>
                                case 1:
                                    return <><div className="btn">
                                        <div className='gradient-container gradient-btn'>
                                            <a href={filteredItem.deck} target="_blank" className='gradient-text' >View Deck</a>
                                        </div>
                                    </div> <div className="btn btn-link">
                                            <div className='gradient-container gradient-btn'>
                                                <a href={filteredItem.wireframeMobile} target="_blank" className='gradient-text' >Mobile Wireframe</a>
                                            </div>
                                            <div id="live-btn">
                                                <a href={filteredItem.mockupMobile} target="_blank">Mobile Prototype</a>
                                            </div>
                                        </div>
                                    </>
                                case 5:
                                    return <>
                                        <div className="btn btn-link">
                                            <div id="live-btn">
                                                <a href={filteredItem.mockupDesktop} target="_blank">Desktop Prototype</a>
                                            </div>
                                        </div>
                                    </>
                                case 17:
                                    return <>
                                        <div className="btn">
                                            <div className='gradient-container gradient-btn'>
                                                <a href={filteredItem.deck} target="_blank" className='gradient-text' >View code + demo</a>
                                            </div>
                                        </div>
                                    </>
                                default:
                                    return null
                            }
                        })()}
                        {/* <div className="btn btn-link">
                            <div className='gradient-container gradient-btn'>
                                <a href={filteredItem.wireframeMobile} target="_blank" className='gradient-text' >Mobile Wireframe</a>
                            </div>
                            <div id="live-btn">
                                <a href={filteredItem.mockupMobile} target="_blank">Mobile Prototype</a>
                            </div>
                            <div className='gradient-container gradient-btn'>
                                <a href={filteredItem.wireframeDesktop} target="_blank" className='gradient-text' >Desktop Wireframe</a>
                            </div>
                            <div id="live-btn">
                                <a href={filteredItem.mockupDesktop} target="_blank">Desktop Prototype</a>
                            </div>
                        </div> */}
                    </div >)}
                </section>
            </div>
        </>
    );
}

export default Overlay;