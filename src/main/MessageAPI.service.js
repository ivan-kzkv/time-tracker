import {ipcMain} from 'electron';

export class MessageAPIService {
    // TODO add constructor parameter for class that work with service communication
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.handleCreateProjectEvent();
        this.handleFetchTaskList();
        this.handleCreateTaskEvent();
    }
    
    handleCreateProjectEvent() {
        ipcMain.handle('createProject', (event, projectData) => {
            return this.httpClient.createEntity('project/', projectData);
        });
    }

    handleFetchTaskList() {
        ipcMain.handle('loadTasks', (event, data) => {
            return this.httpClient.fetchEntityList('task/all/', data.queryParams)
        });
    }
    
    handleCreateTaskEvent() {
        ipcMain.handle('createTask', (_, body) => {
            return this.httpClient.createEntity('task/', body);
        });
    }
}
