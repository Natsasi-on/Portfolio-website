import { projectsdesign } from '../data/data'
import { Link } from 'react-router-dom';
import './3-project.css'
import './4-ovelay.css'


function Projectxyz(props) {

    var aa = props.model;
    if (aa === "all" || aa == "") {
        return (
            projectsdesign.map((item) =>
                <div className="gradient-container project-gradient">
                    <button>
                        <Link to={"/design/" + item.id} >
                            <div className='crop-image design-img'>
                                <img src={"/project" + item.image} alt={item.title + " image"} />
                            </div>

                            <p className="h5 title-each">{item.title}</p>

                        </Link>
                    </button>
                </div>
            )
        )
    } else {
        return (
            projectsdesign.filter(item => item.category == props.model).map(filteredItem => <div className="gradient-container project-gradient">
                <button>
                    <Link to={"/design/" + filteredItem.id} >
                        <div className='crop-image design-img'>
                            <img src={"/project" + filteredItem.image} alt={filteredItem.title + " image"} />
                        </div>

                        <p className="h5 title-each">{filteredItem.title}</p>

                    </Link>
                </button>
            </div>)
        );
    }


}

export default Projectxyz;