import {ipcMain} from 'electron';

export class MessageAPIService {
    // TODO add constructor parameter for class that work with service communication
    constructor() {
        this.handleCreateProjectEvent();
    }
    
    handleCreateProjectEvent() {
        ipcMain.handle('createProject', (event, projectData) => {
            // TODO proceed with this data {name: 'some name'}
        })
    }
}
