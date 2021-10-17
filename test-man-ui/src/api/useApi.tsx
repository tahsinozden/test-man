import {API_BASE_URL} from "./TestManagerApi";

const testManagerApi = {

    getAllStatuses(): Promise<string[]> {
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        };
        return fetch(`${API_BASE_URL}/tests/statuses`, requestOptions)
            .then(response => response.json());
    }
}

export default testManagerApi;