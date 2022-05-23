import React from 'react';
import { Modal } from 'react-bootstrap';
import successIamge from './../../images/success.png';

const SuccessModal = ({isOpen, toggle}) => {
    return (
        <Modal show={isOpen} onHide={toggle} centered closebutton={1}>
            <Modal.Body className='d-flex'>
                <img 
                    src={successIamge} 
                    className='img-fluid'  
                    alt='sucsess-message' 
                    />
            </Modal.Body>     
        </Modal>
    );
}
 
export default SuccessModal;
