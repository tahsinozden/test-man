import React, {useEffect, useState} from "react";
import TestDetail from "../models/TestDetail";
import StatusDropdown from "./StatusDropdown";
import TestStatus from "../models/TestStatus";
import {Content} from "antd/lib/layout/layout";
import {Col, Row} from "antd";

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
            <Content>
                {
                    detail &&
                    <Row>
                        <Col span={18}>{testDetail.name}</Col>
                        <Col span={6}>
                            <StatusDropdown currentStatus={detail.status || TestStatus.Undefined.toString()}
                                            onStatusSelect={(newStatus) => handleStatusSelect(detail, newStatus)}/>
                        </Col>
                    </Row>
                }
            </Content>
        </>


    );
};

export default TestPreview;