import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faTrashRestore} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { eraseComment, getComments } from '../../actions/commentActions';
const ModalDeleteComment = ({commentId}) => {
    const dispatch = useDispatch()
    const cardId = useSelector(state => state.card.cardActive.id)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)
      getComments(cardId)}
    const deleteClick = ()=>{
        dispatch(eraseComment(commentId,cardId))
        handleClose()
    }   
     return ( 
        <>
        <FontAwesomeIcon className="iconDelete" icon={faTrashRestore} onClick={handleShow} />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Borrar Comentario</Modal.Title>
          </Modal.Header>
          <Modal.Body>Estas seguro de borrar el comentario</Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={()=>{deleteClick()}}>
            Borrar
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
     );
}
 
export default ModalDeleteComment;