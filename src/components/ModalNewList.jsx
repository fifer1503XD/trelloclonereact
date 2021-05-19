
import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import PostCard from './PostCard';
import { getCards } from '../actions/cardActions';
const ModalNewList = (props) => {
  console.log(props.boardId)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)
      getCards(props.boardId)}
    return ( 
        <>
        <FontAwesomeIcon icon={faPlusCircle} onClick={handleShow} />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar nueva Card</Modal.Title>
          </Modal.Header>
          <Modal.Body><PostCard listId={props.listId} boardId={props.boardId}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
     );
}
 
export default ModalNewList;