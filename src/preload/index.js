import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('MessagesAPI', {
      openModal: callback => ipcRenderer.on('open-create-project-modal', callback),
      createProject: projectData => ipcRenderer.invoke('createProject', projectData),
      loadTasks: queryParams => ipcRenderer.invoke('loadTasks', {queryParams}),
      startTimer: () => ipcRenderer.invoke('startTimer'),
      stopTimer: () => ipcRenderer.invoke('stopTimer'),
      listenTimer: timerListener => ipcRenderer.on('ping-timer', timerListener),
      createTask: taskData => ipcRenderer.invoke('createTask', taskData)
});
