import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CreateTestModal from "./CreateTestModal";
import TestPreviewList from "./TestPreviewList";

const TestManager: React.FC = () => {
    const [allTests, setAllTests] = useState([]);

    const loadTestDetails = () => {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        // TODO: get URL from configs
        fetch(`http://localhost:8080/api/v1/tests`, requestOptions)
            .then(response => response.json())
            .then(data => setAllTests(data));
    }

    useEffect(() => {
        loadTestDetails()
    }, []);

    return (
        <>
            <Container className="p-3">
                <Row>
                    <Col>
                        <CreateTestModal/>
                    </Col>
                </Row>
            </Container>
            <Container className="p-3">
                <Row>
                    <TestPreviewList testDetails={allTests} onTestDataChange={loadTestDetails}/>
                </Row>
            </Container>
        </>
    );
}

export default TestManager;