import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Card, Navbar} from "react-bootstrap";
import CreateTestModal from "./CreateTestModal";
import TestPreviewList from "./TestPreviewList";
import TestManagerApi from "../api/TestManagerApi";
import TestDetail from "../models/TestDetail";
import {Menu, Row, Col, Layout, Divider} from "antd";

const { Header, Footer, Sider, Content } = Layout;

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
            <Menu mode="horizontal" theme="dark">
                <Menu.Item key="mainPage">
                    Test Manager
                </Menu.Item>
            </Menu>
            <Layout>
                <Content>
                    <Divider />
                    <Row>
                        <Col span={4} />
                        <Col>
                            <CreateTestModal onNewTestCreated={loadTestDetails}/>
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col span={4} />
                        <Col>
                            <h5>Tests</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4} />
                        <Col>
                            <TestPreviewList testDetails={allTests} onTestDataChange={loadTestDetails}/>
                        </Col>
                    </Row>
                    <Divider />
                </Content>
            </Layout>
        </>
    );
}

export default TestManager;