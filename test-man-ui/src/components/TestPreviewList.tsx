import React, {useEffect, useState} from "react";
import TestDetail from "../models/TestDetail";
import {Container} from "react-bootstrap";
import TestPreview from "./TestPreview";
import TestManagerApi from "../api/TestManagerApi";

interface TestPreviewListProps {
    testDetails: TestDetail[];
    onTestDataChange: () => void;
}

const TestPreviewList: React.FC<TestPreviewListProps> = ({testDetails, onTestDataChange}: TestPreviewListProps) => {
    const [details, setDetails] = useState<any>([]);
    let items: any[] = [];
    const testManagerApi = new TestManagerApi();

    useEffect(() => {
        for (let i in testDetails) {
            items.push(
                <TestPreview key={i} testDetail={testDetails[i]} onStatusSelect={updateTestStatus}/>
            )
            setDetails(items);
        }
    }, [testDetails]);

    const updateTestStatus = (testDetail: TestDetail, newStatus: string) => {
        const newTestDetail = {...testDetail};
        newTestDetail.status = newStatus;
        submitStatus(newTestDetail);
    }

    const submitStatus = (testDetail: TestDetail) => {
        testManagerApi.updateExistingTest(testDetail).then(data => onTestDataChange());
    }

    return (
        <Container>
            {details}
        </Container>
    );
}

export default TestPreviewList;