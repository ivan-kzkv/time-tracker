import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('MessagesAPI', {
      openModal: callback => ipcRenderer.on('open-create-project-modal', callback),
      createProject: projectData => ipcRenderer.invoke('createProject', projectData),
      loadTasks: queryParams => ipcRenderer.invoke('loadTasks', {queryParams}),
      startTimer: timerListener => {
            ipcRenderer.invoke('startTimer');
            ipcRenderer.on('timer-ping', timerListener);
      },
      stopTimer: callback => ipcRenderer.on('stopTimer', callback)
});
