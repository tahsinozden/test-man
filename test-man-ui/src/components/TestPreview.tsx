import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import TestDetail from "../models/TestDetail";

interface TestPreviewProps {
    testDetail: TestDetail,
    onStatusSelect: (testDetail: TestDetail, newStatus: string) => void
}

const TestPreview: React.FC<TestPreviewProps> = ({testDetail, onStatusSelect}: TestPreviewProps) => {

    const statuses = new Set(["Passed", "Failed"]);
    const buildStatusOptions = (status: string) => {
        const options = [];
        const statusOption = status ? status : "Undefined";
        options.push(<option>{statusOption}</option>)
        return (<option></option>);
    };

    return (
        <div>
            <Form>
                <Row>
                    <Col>{testDetail.name}</Col>
                    <Col>
                        {/*TODO: find default value in select*/}
                        <Form.Control
                            as="select"
                            value="new"
                            onChange={e => {
                                const newStatus = e.target.value;
                                onStatusSelect(testDetail, newStatus);
                            }}
                        >
                            <option>{testDetail.status}</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Control>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Form>
        </div>


    );
};

export default TestPreview;