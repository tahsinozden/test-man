// TODO: URL from configs
import TestDetail from "../models/TestDetail";

const baseApiUrl = "http://localhost:8080/api/v1";

class TestManagerApi {

    getAllStatuses(): Promise<string[]> {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };
        return fetch(`${baseApiUrl}/tests/statuses`, requestOptions)
            .then(response => response.json());
    }

    getAllTests(): Promise<TestDetail[]> {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        };
        return fetch(`${baseApiUrl}/tests`, requestOptions)
            .then(response => response.json());
    }

    createNewTest(testDetail: TestDetail): Promise<TestDetail> {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(testDetail)
        };
        return fetch(`${baseApiUrl}/tests`, requestOptions)
            .then(response => response.json());
    }

    updateExistingTest(testDetail: TestDetail): Promise<TestDetail> {
        const requestOptions = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({status: testDetail.status})
        };
        return fetch(`${baseApiUrl}/tests/${testDetail.id}`, requestOptions)
            .then(response => response.json())
    }
}

export default TestManagerApi;