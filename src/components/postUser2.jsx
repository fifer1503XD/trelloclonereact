import React, {useRef,useState}from 'react';
import { newBoard } from '../actions/boardActions';
import {useDispatch,useSelector} from "react-redux";
class PostUser2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const dispatch = useDispatch();
  const refDateCreation = useRef();
  const refName = useRef('');
  const refDescription = useRef();
  const refVisibility = useRef();
  const refMembers = useRef();
  const [listMembers, setListMembers] = useState();
  const changeList =()=>{
    alert(listMembers)
  }
    let users = useSelector(state => state.board.users)
    const mysubmit=(event)=>{
      event.preventDefault();
    }  
        return ( 
            <div>

            <form noValidate onSubmit={mysubmit}>
          
            <div class="form-group">
                <label for="Name">Name</label>
                <input ref={refName} type="text" class="form-control" id="name" placeholder="BOARD NAME"/>
            </div>
            <div class="form-group">
                <label for="Description">Description</label>
                <input ref={refDescription} type="text" class="form-control" id="description" placeholder="DESCRIPTION"/>
            </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Visibility</label>
            <select  Ref={refVisibility} class="form-control" id="visibility">
              <option value='PRIVATE'>PRIVATE</option>
              <option value='PUBLIC'>PUBLIC</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">Members</label>
            <select   Ref={refMembers} multiple class="form-control" id="members">
                  {users.map((user)=>{
                      return(<option value={user.id}>{user.id} {user.first_name} {user.last_name}</option>)
                                      }
                          )
                  }
            </select>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form></div>
         );
    }
}
 
export default PostUser2;