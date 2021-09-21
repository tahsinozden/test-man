import {Button, Modal} from "react-bootstrap";
import React, {useState} from "react";
import CreateTest from "./CreateTest";

interface CreateTestModalProps {
    onNewTestCreated: () => void;
}

const CreateTestModal: React.FC<CreateTestModalProps> = ({onNewTestCreated}: CreateTestModalProps) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTestCreated = () => {
        onNewTestCreated();
        handleClose();
    }

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
                    <CreateTest onNewTestCreated={handleTestCreated}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CreateTestModal;