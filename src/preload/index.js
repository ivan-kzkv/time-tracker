import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('MessagesAPI', {
      openModal: callback => ipcRenderer.on('open-create-project-modal', callback),
      createProject: name => ipcRenderer.invoke('createProject', name)
});
