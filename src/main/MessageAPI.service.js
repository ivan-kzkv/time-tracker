import {ipcMain} from 'electron';

export class MessageAPIService {
    // TODO add constructor parameter for class that work with service communication
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.handleCreateProjectEvent();
    }
    
    handleCreateProjectEvent() {
        ipcMain.handle('createProject', (event, projectData) => {
            return this.httpClient.createEntity('project/', projectData);
        })
    }
}
