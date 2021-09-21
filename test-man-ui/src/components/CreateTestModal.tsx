import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import CreateTest from "./CreateTest";

const CreateTestModal: React.FC = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create a new test
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create a new test</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateTest/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CreateTestModal;