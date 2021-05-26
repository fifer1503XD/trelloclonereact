import {useSelector} from 'react-redux'
import {sortableHandle,
  } from 'react-sortable-hoc';
import { getCards } from './cardActions';


export const BoardActive = (i) =>{
    let board = useSelector(state => state.board.boardActive)
    return(board)

}
export const DragHandle = sortableHandle((id) => 
<span onClick={()=>{console.log({id})}}>::</span>);

// export const patchCard = (id,newPosition)=>{
//     return async (dispatch)=>{
//     try {
//         console.log('ingreso',id,newPosition)
//         console.log(typeof(id))
//     let response = await fetch(`https://trelloclonefelipe.herokuapp.com/cards/${id}/position/`, {
//         method: "PATCH",
//         headers: {
//           "Content-type": "application/json"
//         },
//         body: JSON.stringify(
//          { "new_position": newPosition}
//         )
//       });
//       let results = await response.json();
//       console.log(results)
//       dispatch(getCards(BoardActive()))
//       return results;
      
//     } catch (error) {
//         console.log(error.message);
//       } 
//     }

// }
// export function patchCard (id,newIndex){
  
//     let response = fetch(`https://trelloclonefelipe.herokuapp.com/cards/${id}/position/`, {
//         method: "PATCH",
//         headers: {"Content-type": "application/json"},
//         body: JSON.stringify(
//             { "new_position": newIndex})
//       });
//       let results =  response.json();
//       let board = (BoardActive())
//      (getCards(board))
//       return results;
//     }
    
    export function  PatchCard (id,newIndex,board){
        
        return async (dispatch)=>{
        try {
            let response = await fetch(`https://trelloclonefelipe.herokuapp.com/cards/${id}/position/`, {
                method: "PATCH",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(
                    { "new_position": newIndex})
          });
          console.log(board)
          dispatch(getCards(board))
          
          return response;
        } catch (error) {
            console.log(error.message);
          } 
        }
        }