import React, { useState } from 'react';
import {Modal,Button} from 'react-bootstrap'
import {FontAwesomeIcon} from'@fortawesome/react-fontawesome'
import {faTrashRestore} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import getLists, { eraseList } from '../../actions/listActions';
const ModalDeleteList = (props) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)
      getLists(props.boardId)}
    const deleteClick = ()=>{
        dispatch(eraseList(props.listId, props.boardId))
        handleClose()
    }   
     return ( 
        <>
        <FontAwesomeIcon className="iconDelete" icon={faTrashRestore} onClick={handleShow} />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Eliminar lista</Modal.Title>
          </Modal.Header>
          <Modal.Body>Estas seguro de eliminar la lista {props.name}</Modal.Body>
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
 
export default ModalDeleteList;