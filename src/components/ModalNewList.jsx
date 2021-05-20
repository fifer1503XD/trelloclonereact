import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { getCards } from '../actions/cardActions';
import PostList from './postList'
const ModalNewList = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)
      getCards(props.boardId)}
    return ( 
        <>
        <FontAwesomeIcon icon={faPlusCircle} onClick={handleShow} />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar nueva Lits</Modal.Title>
          </Modal.Header>
          <Modal.Body><PostList listId={props.listId}/></Modal.Body>
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