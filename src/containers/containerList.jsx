import List from '../components/list';
import {useSelector} from 'react-redux'
const ContainerList = () => {
    const Lists = useSelector(state => state.list.lists)
    return( 
        <div className= "containerLists">
            {Lists.map((list)=>{   
                return(<List title={list.name}  id={list.id}/>)
            }
                     )

            }
        </div>

    )}
export default ContainerList;