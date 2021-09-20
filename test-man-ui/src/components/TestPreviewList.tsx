import React, {useEffect, useState} from "react";
import TestDetail from "../models/TestDetail";
import {Container} from "react-bootstrap";
import TestPreview from "./TestPreview";

interface TestPreviewListProps {
    testDetails: TestDetail[];
    onTestDataChange: () => void;
}

const TestPreviewList: React.FC<TestPreviewListProps> = ({testDetails, onTestDataChange}: TestPreviewListProps) => {
    const [details, setDetails] = useState<any>([]);
    let items: any[] = [];

    useEffect(() => {
        for (let i in testDetails) {
            items.push(
                <TestPreview key={i} testDetail={testDetails[i]} onStatusSelect={updateTestStatus}></TestPreview>
            )
            setDetails(items);
        }
    }, [testDetails]);

    const updateTestStatus = (testDetail: TestDetail, newStatus: string) => {
        const newTestDetail = {...testDetail};
        newTestDetail.status = newStatus;
        submitStatus(testDetail);
    }

    const submitStatus = (testDetail: TestDetail) => {
        const requestOptions = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: testDetail.status})
        };
        // TODO: URL from configs
        fetch(`http://localhost:8080/api/v1/tests/${testDetail.id}`, requestOptions)
            .then(response => response.json())
            .then(data => onTestDataChange());
    }

    return (
        <Container>
            {details}
        </Container>
    );
}

export default TestPreviewList;