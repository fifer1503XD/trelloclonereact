import Comment from '../components/comment';
import {useSelector} from 'react-redux'
import Navbar from '../components/navbar'
import NewComment from '../components/NewComment';
const ContainerComments = () => {
    const comments = useSelector(state => state.comment.comments)
    return( 
        <div className= "principal">
             <div className="nav-bar">
                <Navbar/>
            </div>
            {comments.map((comment,i)=>{
                let{message,id,owner}=comment   
                return(<Comment  key ={i} message={message}  id={id} ownerid={owner}/>)
            }
                     )

            }
            <NewComment />
        </div>
    )}
export default ContainerComments;