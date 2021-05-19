import List from '../components/list';
import {useSelector} from 'react-redux'
import "../components/components.css";
import Navbar from '../components/navbar';
import PostList from '../components/postList';
const ContainerList = () => {
    const Lists = useSelector(state => state.list.lists)
    return( 
    
        <div className="principal">
             <div className="nav-bar">
                <Navbar/>
            </div>
            <div className= "containerLists">
            {Lists.map((list)=>{   
                let {name,id,board_id} = list
                return(<List title={name}  id={id} boardId={board_id}/>)
            }
                     )

            }
        </div>
        </div>
        

    )}
export default ContainerList;