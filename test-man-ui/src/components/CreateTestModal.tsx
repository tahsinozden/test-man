import React, {useState} from "react";
import CreateTest from "./CreateTest";
import {Button, Modal} from "antd";

interface CreateTestModalProps {
    onNewTestCreated: () => void;
}

const CreateTestModal: React.FC<CreateTestModalProps> = ({onNewTestCreated}: CreateTestModalProps) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleTestCreated = () => {
        onNewTestCreated();
        setIsModalVisible(false);
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Create a new test
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <CreateTest onNewTestCreated={handleTestCreated}/>
            </Modal>
        </>
    );
}

export default CreateTestModal;