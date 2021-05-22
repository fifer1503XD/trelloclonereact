import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'
import PostComment from '../PostComment';
import { getComments } from '../../actions/commentActions';
const ModalNewComment = (props) => {
  const cardActive = useSelector(state => state.card.cardActive)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)
      getComments(cardActive)}
    return ( 
        <>
        <FontAwesomeIcon icon={faPlusCircle} onClick={handleShow} />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar nuevo commentario</Modal.Title>
          </Modal.Header>
          <Modal.Body><PostComment /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
     );
}
 
export default ModalNewComment;