import React, {useEffect, useState} from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import TestPreviewList from "./components/TestPreviewList";
import CreateTest from "./components/CreateTest";


const App: React.FC = () => {
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
        <Container className="p-5">
            <CreateTest></CreateTest>
            <TestPreviewList testDetails={allTests} onTestDataChange={loadTestDetails}></TestPreviewList>
        </Container>
    );
};

export default App;
