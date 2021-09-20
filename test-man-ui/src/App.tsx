import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import TestPreviewList from "./components/TestPreviewList";
import TestDetail from "./models/TestDetail";


const App: React.FC = () => {
    const testDetails = [
        new TestDetail(1, "New test name 1", "Passed", ""),
        new TestDetail(2, "New test name 2", "Passed", ""),
        new TestDetail(3, "New test name 3", "Passed", ""),
    ];
    return (
        <Container className="p-5">
            <TestPreviewList testDetails={testDetails}></TestPreviewList>
        </Container>
    );
};

export default App;
