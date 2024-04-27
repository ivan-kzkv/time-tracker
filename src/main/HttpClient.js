import fetch from "node-fetch";

export class HttpClient {
    baseUrl = 'http://localhost:8000/api/v1/'
    constructor() {
    }
    
    fetchEntityList(path) {
        return fetch(this.baseUrl + path);
    }
    
    createEntity(path, body) {
        return fetch(this.baseUrl + path, {
            method: 'post', 
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json());
    }
}
