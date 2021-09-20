import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';


const App: React.FC = () => {
    return (
        <Container className="p-5">
            <h2>Buttons</h2>
            <div className="p-1">
                <Button variant="primary" className="mr-1">
                    Primary
                </Button>
            </div>
        </Container>
    );
};

export default App;
