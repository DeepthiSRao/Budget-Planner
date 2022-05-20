import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalImage = ({data}) => {
    return (
        <Modal show={data.isOpen} onHide={data.toggle} centered closebutton={true}>

        </Modal>
    );
}
 
export default ModalImage;
