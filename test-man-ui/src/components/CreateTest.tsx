import React, {useState} from "react";
import TestDetail from "../models/TestDetail";
import {Button, Form} from "react-bootstrap";
import StatusDropdown from "./StatusDropdown";
import TestStatus from "../models/TestStatus";

const CreateTest: React.FC = () => {
    const [selectedStatus, setSelectedStatus] = useState(TestStatus.Undefined.toString());
    const testDetail: TestDetail = new TestDetail();
    const createNewTest = (testDetail: TestDetail, e: any) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(testDetail)
        };
        // TODO: URL from configs
        fetch(`http://localhost:8080/api/v1/tests`, requestOptions)
            .then(response => response.json());
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="testCreate.ControlInput1">
                <Form.Label>Test Name</Form.Label>
                <Form.Control type="text" placeholder="New test name" onChange={e => {
                    testDetail.name = e.target.value
                }}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="testCreate.ControlTextarea1">
                <Form.Label>Test Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={e => {
                    testDetail.description = e.target.value
                }}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="testCreate.ControlInput3">
                <Form.Label>Test Status</Form.Label>
                <StatusDropdown currentStatus={TestStatus.Undefined.toString()}
                                onStatusSelect={(newStatus) => setSelectedStatus(newStatus)}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => createNewTest(testDetail, e)}>
                Submit
            </Button>
        </Form>
    );
}

export default CreateTest;