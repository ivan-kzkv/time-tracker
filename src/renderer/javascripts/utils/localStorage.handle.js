export const setActiveProject = (projectData) => {
    localStorage.setItem('activeProjectId', projectData.id);
    localStorage.setItem('activeProjectName', projectData.name);
}

export const getActiveProjectId = () => {
    return localStorage.getItem('activeProjectId');
}

export const getActiveProjectName = () => {
    return localStorage.getItem('activeProjectName');
}
