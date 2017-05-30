import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Saved_Modal = (props) => {

    const reset = () => {
            props.reset();
            props.closeModal();
    }

    return (
        <div>
            <Modal className='mainContent' show={props.showModal} onHide={props.closeModal}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <h2>Are you sure you want to reset?</h2>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick = {reset}>Yes</Button>
                <Button onClick = {props.closeModal}>No</Button>
            </Modal.Footer>
            </Modal>         
        </div>
    );
};

export default Saved_Modal;