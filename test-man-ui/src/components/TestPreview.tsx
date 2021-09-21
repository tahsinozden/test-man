import React from "react";
import {Col, Form, Row} from "react-bootstrap";
import TestDetail from "../models/TestDetail";
import StatusDropdown from "./StatusDropdown";
import TestStatus from "../models/TestStatus";

interface TestPreviewProps {
    testDetail: TestDetail;
    onStatusSelect: (testDetail: TestDetail, newStatus: string) => void;
}

const TestPreview: React.FC<TestPreviewProps> = ({testDetail, onStatusSelect}: TestPreviewProps) => {
    const handleStatusSelect = (testDetail: TestDetail, newStatus: string) => {
        onStatusSelect(testDetail, newStatus);
    }

    return (
        <>
            <Form>
                <Row>
                    <Col>{testDetail.name}</Col>
                    <Col>
                        <StatusDropdown currentStatus={testDetail.status || TestStatus.Undefined.toString()}
                                        onStatusSelect={(newStatus) => handleStatusSelect(testDetail, newStatus)}/>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Form>
        </>


    );
};

export default TestPreview;