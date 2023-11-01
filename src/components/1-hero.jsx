import './1-hero.css'
import person from '/hero-img.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../data/data'

function Hero() {
    return (
        <div className="hero-frame">
            <div className='hero'>
                <div className="left">
                    <p className='h3' >Hello, there!</p>
                    <p className='h1'>I'm {Bio.name}</p>
                    <p className='h3'>
                        I'm a &nbsp;
                        <span className='h3' id="style-text">
                            <Typewriter
                                options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>

                    </p>
                    <p className='p'>{Bio.description}</p>
                    <div className='gradient-container' id="resume">
                        <a href={Bio.resume} className='gradient-text' title={Object.keys(Bio)[4]} target='_blank' id="skill-section">Check Resume</a>
                    </div>
                </div>
                <div className="right">
                    <img src={person} alt="hero image" />
                </div>
            </div>
        </div>
    );
}

export default Hero;