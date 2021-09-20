import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import TestDetail from "../models/TestDetail";

interface TestPreviewProps {
    testDetail: TestDetail
}

const TestPreview: React.FC<TestPreviewProps> = ({testDetail}:  TestPreviewProps) => {

    const statuses = new Set(["Passed", "Failed"]);
    const buildStatusOptions = (status: string) => {
        const options = [];
        const statusOption = status ? status : "Undefined";
        options.push(<option>{statusOption}</option>)
        return (<option></option>);
    };

    return (
        <Form>
            <Row>
                <Col>{testDetail.name}</Col>
                <Col>
                    {/*TODO: find default value in select*/}
                    <Form.Select aria-label="Default select example" default-value="sada">
                        <option>{testDetail.status}</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </Form>
    );
};

export default TestPreview;