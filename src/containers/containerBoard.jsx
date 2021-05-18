import Board from "../components/board"
import {useDispatch,useSelector} from "react-redux";
import { useEffect,useState} from 'react'
import {setBoards,setUsers,getUsers} from'../actions/boardActions'
import axios from 'axios';
import PostUser from "../components/postUser";
import Login from "../components/login";
import Navbar from "../components/navbar";
import "../components/components.css";

const ContainerBoad = () => {
    const dispatch = useDispatch();
    let [postShow, setPostShow] = useState('False');
    const post =() =>{
      setPostShow(!postShow);
      dispatch(getUsers())
      console.log(postShow)
    }
    let boards = useSelector(state => state.board.boards)
    let idActive = useSelector(state => state.auth.activeId)
    
    useEffect( ()=> {
        try{axios.get(`https://trelloclonefelipe.herokuapp.com/boards/`)
        .then(res => {
          const results = res.data;
          dispatch(setBoards(results))
          dispatch(getUsers())
        })
        }catch(error){
          alert(error.message);
        }
        try{axios.get(`https://trelloclonefelipe.herokuapp.com/Users/`)
        .then(res => {
          const results = res.data;
          dispatch(setUsers(results))
        })
        }catch(error){
          alert(error.message);
        }
      },[setBoards]);
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
          <div class="tittle 2 rem">Tus espacios de trabajo</div>
          <div className="containerBoards">
          {boards.map((board)=>{
          console.log('idactivo',idActive)
           if (board.owner ===idActive){
              return(<Board title={board.name} description={board.description} id={board.id}/>)
             }
          })}
          </div>
        
        </div>
    
    </div>
      
    </div>  );
}
 
export default ContainerBoad;