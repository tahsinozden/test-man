import React, {useEffect, useState} from "react";
import TestDetail from "../models/TestDetail";
import {Container} from "react-bootstrap";
import TestPreview from "./TestPreview";

interface TestPreviewListProps {
    testDetails: TestDetail[];
}

const TestPreviewList: React.FC<TestPreviewListProps> = ({testDetails}: TestPreviewListProps) => {
    const [details, setDetails] = useState<any>([]);
    let items: any[] = [];

    useEffect(() => {
        for (let i in testDetails) {
            items.push(
                <TestPreview key={i} testDetail={testDetails[i]}></TestPreview>
            )
            setDetails(items);
        }
    }, [testDetails]);

    return (
        <Container>
            {details}
        </Container>

    );
}

export default TestPreviewList;