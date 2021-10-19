import React, {useEffect, useState} from "react";
import TestDetail from "../models/TestDetail";
import TestPreview from "./TestPreview";
import testManagerApi from "../api/TestManagerApi";
import {Layout} from "antd";

interface TestPreviewListProps {
    testDetails: TestDetail[];
    onTestDataChange: () => void;
}

const TestPreviewList: React.FC<TestPreviewListProps> = ({testDetails, onTestDataChange}: TestPreviewListProps) => {
    const [details, setDetails] = useState<TestDetail[]>([]);

    useEffect(() => {
        setDetails(testDetails);
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
        <Layout>
            {
                details.map((detail, i) =>
                    <TestPreview key={i} testDetail={detail}
                                 onStatusSelect={updateTestStatus}/>)
            }
        </Layout>
    );
}

export default TestPreviewList;