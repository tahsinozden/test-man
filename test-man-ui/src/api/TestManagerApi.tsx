// TODO: URL from configs
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
}

export default TestManagerApi;