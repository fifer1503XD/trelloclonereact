import Board from "../components/board"
import {useDispatch,useSelector} from "react-redux";
import { useEffect,useState} from 'react'
import getBoards, {getUsers} from'../actions/boardActions'
import PostUser from "../components/postUser";
import NewBoard from "../components/NewBoard"
import Navbar from "../components/navbar";
import "../components/components.css";
import 'animate.css/animate.css'

const ContainerBoad = () => {
    const dispatch = useDispatch();
    let [postShow, setPostShow] = useState('False');
    const post =() =>{
      setPostShow(!postShow);
      dispatch(getUsers())
    }
    let boards = useSelector(state => state.board.boards)
    let idActive = useSelector(state => state.auth.activeId)
    
    useEffect( ()=> {
        dispatch(getBoards())
        dispatch(getUsers())
      },[dispatch]);
    return (
    <div className="principal"> 
      <div className="nav-bar">
        <Navbar/>
      </div>
      <div className="containerBoard">
        <div className="profile">
        <div>
        <button className="btnNewBoard" onClick={post}>
          New Board
        </button>
        <div>{postShow ? null: <PostUser/>}</div>
        
      </div>
        </div>
        <div className="espaciodetrabajo">
          <div className="tittle 2 rem tittleEspacioTrabajo animate__animated animate__swing animate__delay-0.5s ">Tus espacios de trabajo</div>
          <div className="containerBoards">
          {boards.filter((board=>board.owner ===idActive)).map((board,i)=>{
              return(<Board key={i} title={board.name} description={board.description} id={board.id}/>)
          })} 
          <NewBoard/>
          </div>
        
        </div>
    
    </div>
      
    </div>  );
}
 
export default ContainerBoad;