import {Card, CardImg, CardImgOverlay, CardHeader, CardTitle} from 'reactstrap'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, TextArea } from 'reactstrap';

const PortfolioCard = ({project}, args) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    const {image, name, description, video } = project;
    return (
        <div>
        <Card onClick = {toggleModal} style = {{width: "9rem"}}>
            <CardHeader style={{fontSize:"1rem", color: "black"}}>
                {name}
            </CardHeader>
            <CardImg 
                
                src={image}
                alt={name}
            /> 
        </Card>
        <Modal isOpen={modal} toggleModal={toggleModal} {...args}>
         <ModalHeader>{name}</ModalHeader>               
        <ModalBody>
        
        <video src={video} autoplay controls width="250"></video>
        </ModalBody>
        <ModalFooter className='m-3'>
        {description}
        <Button color="secondary" onClick={toggleModal}>
            X
        </Button>
        </ModalFooter>
        </Modal>
    </div>
    );
}

export default PortfolioCard