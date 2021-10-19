import React, {useState} from "react";
import TestDetail from "../models/TestDetail";
import StatusDropdown from "./status/StatusDropdown";
import TestStatus from "../models/TestStatus";
import testManagerApi from "../api/TestManagerApi";
import {Alert, Button, Form, Input} from "antd";

interface CreateTestProps {
    onNewTestCreated: () => void;
}

const CreateTest: React.FC<CreateTestProps> = ({onNewTestCreated}: CreateTestProps) => {
    const [selectedStatus, setSelectedStatus] = useState(TestStatus.Undefined.toString());
    const [testDetail, setTestDetail] = useState(new TestDetail());
    const [hasErrors, setHasErrors] = useState(false);
    const formRef: any = React.createRef();

    const handleStatusChange = (newStatus: string) => {
        setSelectedStatus(newStatus);
        testDetail.status = newStatus;
        setTestDetail(testDetail);
    };

    const createNewTest = (testDetail: TestDetail, e: any) => {
        e.preventDefault();
        const showError = !isFormValid(testDetail);
        if (showError) {
            setHasErrors(showError);
            return;
        }
        testManagerApi.createNewTest(testDetail).then(data => onNewTestCreated());
        resetForm();
    }

    const resetForm = () => {
        formRef.current.resetFields();
        setTestDetail(new TestDetail());
        setHasErrors(false);
    }

    // TODO: handle form validations in form level
    const isFormValid = (testDetail: TestDetail) => {
        if (!testDetail) {
            return false;
        }
        if (!testDetail.name) {
            return false;
        }
        return true;
    }

    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            autoComplete="off"
            ref={formRef}
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{required: true, message: 'Please input a name!'}]}
            >
                <Input onChange={e => {
                    testDetail.name = e.target.value;
                    setTestDetail(testDetail);
                }}/>
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{required: false, message: 'Please input a description!'}]}
            >
                <Input.TextArea onChange={e => {
                    testDetail.description = e.target.value;
                    setTestDetail(testDetail);
                }}/>
            </Form.Item>
            <Form.Item
                label="Status"
                name="status"
            >
                <StatusDropdown currentStatus={TestStatus.Undefined.toString()}
                                onStatusSelect={handleStatusChange}/>
            </Form.Item>
            {
                hasErrors &&
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Alert message="Please input mandatory fields!" type="error"/>
                </Form.Item>
            }
            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" htmlType="submit"
                        onClick={(e) => createNewTest(testDetail, e)}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default CreateTest;