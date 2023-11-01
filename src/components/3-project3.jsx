import { projectsweb } from '../data/data'
import { Link } from 'react-router-dom';
import './3-project.css'
import './4-ovelay.css'


function Projectxyz(props) {

    var aa = props.model;
    if (aa === "all" || aa == "") {
        return (
            projectsweb.map((item) =>
                <div className="gradient-container project-gradient">
                    <button>
                        <Link to={"/over/" + item.id} >
                            <div className='crop-image web-image'>
                                <img src={"/project" + item.image} alt={item.title + " image"} />
                            </div>
                            <ul className="technology">
                                {item.tags.map((mytag) => <li className='p color-tect'>{mytag}</li>)}
                            </ul>
                            <p className="h5 title-each">{item.title}</p>
                            <p className="p">{item.description}</p>
                        </Link>
                    </button>
                </div>
            )
        )
    } else {
        return (
            projectsweb.filter(item => item.category == props.model).map(filteredItem => <div className="gradient-container project-gradient">
                <button>
                    <Link to={"/over/" + filteredItem.id} >
                        <div className='crop-image web-image'>
                            <img src={"/project" + filteredItem.image} alt={filteredItem.title + " image"} />
                        </div>
                        <ul className="technology">
                            {filteredItem.tags.map((mytag) => <li className='p color-tect'>{mytag}</li>)}
                        </ul>
                        <p className="h5 title-each">{filteredItem.title}</p>
                        <p className="p">{filteredItem.description}</p>
                    </Link>
                </button>
            </div>)
        );
    }


}

export default Projectxyz;