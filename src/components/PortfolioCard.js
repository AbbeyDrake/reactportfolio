import {Card, CardImg, CardImgOverlay, CardHeader, CardTitle} from 'reactstrap'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, TextArea } from 'reactstrap';

const PortfolioCard = ({project}, args) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    const {image, name, description } = project;
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
        {description}
        </ModalBody>
        <ModalFooter>
        <Button color="secondary" onClick={toggleModal}>
            X
        </Button>
        </ModalFooter>
        </Modal>
    </div>
    );
}

export default PortfolioCard