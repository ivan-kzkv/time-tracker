import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('MessagesAPI', {
      openModal: callback => ipcRenderer.on('open-create-project-modal', callback),
      createProject: projectData => ipcRenderer.invoke('createProject', projectData)
});
