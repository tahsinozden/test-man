import React, {useEffect, useState} from "react";
import {Col, Form, Row} from "react-bootstrap";
import TestDetail from "../models/TestDetail";
import StatusDropdown from "./StatusDropdown";
import TestStatus from "../models/TestStatus";

interface TestPreviewProps {
    testDetail: TestDetail;
    onStatusSelect: (testDetail: TestDetail, newStatus: string) => void;
}

const TestPreview: React.FC<TestPreviewProps> = ({testDetail, onStatusSelect}: TestPreviewProps) => {

    const [detail, setDetail] = useState<TestDetail>();
    const handleStatusSelect = (testDetail: TestDetail, newStatus: string) => {
        onStatusSelect(testDetail, newStatus);
    }

    useEffect(() => {
        setDetail(testDetail);
    }, [testDetail]);

    return (
        <>
            <Form>
                {
                    detail &&
                    <Row>
                        <Col>{testDetail.name}</Col>
                        <Col>
                            <StatusDropdown currentStatus={detail.status || TestStatus.Undefined.toString()}
                                            onStatusSelect={(newStatus) => handleStatusSelect(detail, newStatus)}/>
                        </Col>
                        <Col/>
                        <Col/>
                        <Col/>
                    </Row>
                }
            </Form>
        </>


    );
};

export default TestPreview;