import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Card, Col, Navbar, Row} from "react-bootstrap";
import CreateTestModal from "./CreateTestModal";
import TestPreviewList from "./TestPreviewList";
import TestManagerApi from "../api/TestManagerApi";
import TestDetail from "../models/TestDetail";

const TestManager: React.FC = () => {
    const [allTests, setAllTests] = useState<TestDetail[]>([]);
    const testManagerApi = new TestManagerApi();

    const loadTestDetails = () => {
        testManagerApi.getAllTests().then(data => setAllTests(data));
    }

    useEffect(() => {
        loadTestDetails();
    }, []);

    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand>Test Manager</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <Card>
                    <Container className="p-3">
                        <Row>
                            <Col>
                                <CreateTestModal onNewTestCreated={loadTestDetails}/>
                            </Col>
                        </Row>
                    </Container>
                </Card>
                <Card>
                    <Container>
                        <h3>Tests</h3>
                        <Container className="p-3">
                            <Row>
                                <TestPreviewList testDetails={allTests} onTestDataChange={loadTestDetails}/>
                            </Row>
                        </Container>
                    </Container>
                </Card>
            </Container>
        </>
    );
}

export default TestManager;