import fetch from "node-fetch";

export class HttpClient {
    baseUrl = 'http://localhost:8000/api/v1/'
    constructor() {
    }
    
    fetchEntityList(path, queryParams = {}) {
        return fetch(this.baseUrl + path + '?' + new URLSearchParams(queryParams))
            .then(response => response.json());
    }
    
    createEntity(path, body) {
        return fetch(this.baseUrl + path, {
            method: 'post', 
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json());
    }
    
    addQueryParams(queryParams) {
        let queryString = '';
        for (let key in queryParams) {
            queryString += `${key}=${queryParams[key]}&`;
        }
        return queryString;
    }
}
