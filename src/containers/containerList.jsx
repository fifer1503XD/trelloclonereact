import List from '../components/list';
import {useSelector} from 'react-redux'
import "../components/components.css";
import Navbar from '../components/navbar';
import NewList from '../components/NewList';
const ContainerList = () => {
    const Lists = useSelector(state => state.list.lists)
    return( 
    
        <div className="principal">
             <div className="nav-bar">
                <Navbar/>
            </div>
            <div className= "containerLists">
            {Lists.map((list,i)=>{   
                let {name,id,board_id} = list
                return(<List key ={i} title={name}  id={id} boardId={board_id}/>)
            }
                     )

            }
            <NewList />
        </div>
        
        </div>
        

    )}
export default ContainerList;