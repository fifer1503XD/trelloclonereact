import List from '../components/list';
import {useDispatch, useSelector} from 'react-redux'
import "../components/components.css";
import Navbar from '../components/navbar';
import NewList from '../components/NewList';
import {PatchCard} from '../actions/sorteableActions';
const ContainerList = () => {
    const dispatch=useDispatch()
    let board = useSelector(state => state.board.boardActive)
const onSortEnd = ({nodes,oldIndex,newIndex}) =>{
        const id= nodes[oldIndex-1].node.id
            console.log('y')
        dispatch(PatchCard(id,newIndex,board))
        
    }
    const Lists = useSelector(state => state.list.lists)
    return( 
    
        <div className="principal">
             <div className="nav-bar">
                <Navbar/>
            </div>
            <div className= "containerLists">
            {Lists.map((list,i)=>{   
                let {name,id,board_id} = list
                
                return(<List key ={i} title={name}  id={id} boardId={board_id} onSortEnd={onSortEnd} useDragHandle/>)
            }
                     )

            }
            <NewList />
        </div>
        
        </div>
        

    )}
export default ContainerList;