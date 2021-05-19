import List from '../components/list';
import {useSelector} from 'react-redux'
import "../components/components.css";
import Navbar from '../components/navbar';
const ContainerList = () => {
    const Lists = useSelector(state => state.list.lists)
    return( 
        <div className="principal">
             <div className="nav-bar">
                <Navbar/>
            </div>
            <div className= "containerLists">
            {Lists.map((list)=>{   
                return(<List title={list.name}  id={list.id}/>)
            }
                     )

            }
        </div>
        </div>
        

    )}
export default ContainerList;