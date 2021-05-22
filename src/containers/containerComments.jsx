import Comment from '../components/comment';
import {useSelector} from 'react-redux'
import Navbar from '../components/navbar'
const ContainerComments = () => {
    const comments = useSelector(state => state.card.comments)
    return( 
        <div className= "principal">
             <div className="nav-bar">
                <Navbar/>
            </div>
            {comments.map((comment)=>{
                let{message,id,owner}=comment   
                return(<Comment message={message}  id={id} owner={owner}/>)
            }
                     )

            }
        </div>

    )}
export default ContainerComments;