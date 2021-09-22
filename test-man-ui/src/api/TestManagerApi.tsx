import TestDetail from "../models/TestDetail";

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api/v1';

class TestManagerApi {

    getAllStatuses(): Promise<string[]> {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };
        return fetch(`${API_BASE_URL}/tests/statuses`, requestOptions)
            .then(response => response.json());
    }

    getAllTests(): Promise<TestDetail[]> {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        return fetch(`${API_BASE_URL}/tests`, requestOptions)
            .then(response => response.json());
    }

    createNewTest(testDetail: TestDetail): Promise<TestDetail> {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(testDetail)
        };
        return fetch(`${API_BASE_URL}/tests`, requestOptions)
            .then(response => response.json());
    }

    updateExistingTest(testDetail: TestDetail): Promise<TestDetail> {
        const requestOptions = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: testDetail.status})
        };
        return fetch(`${API_BASE_URL}/tests/${testDetail.id}`, requestOptions)
            .then(response => response.json())
    }
}

export default TestManagerApi;