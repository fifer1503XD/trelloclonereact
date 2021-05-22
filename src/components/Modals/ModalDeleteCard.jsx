import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faTrashRestore} from '@fortawesome/free-solid-svg-icons'
import { eraseCard, getCards } from '../../actions/cardActions';
import { useDispatch } from 'react-redux';
const ModalDeleteCard = (props) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)
      getCards(props.boardId)}
    const deleteClick = ()=>{
        dispatch(eraseCard(props.cardId, props.boardId))
        handleClose()
    }   
     return ( 
        <>
        <FontAwesomeIcon className="iconDelete" icon={faTrashRestore} onClick={handleShow} />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Borrar Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>Estas seguro de borrar la card {props.name}</Modal.Body>
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
 
export default ModalDeleteCard;