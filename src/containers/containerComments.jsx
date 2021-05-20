import Comment from '../components/comment';
import {useSelector} from 'react-redux'
const ContainerComments = () => {
    const comments = useSelector(state => state.card.comments)
    return( 
        <div className= "containerLists">
            {comments.map((comment)=>{
                let{message,id,owner}=comment   
                return(<Comment message={message}  id={id} owner={owner}/>)
            }
                     )

            }
        </div>

    )}
export default ContainerComments;