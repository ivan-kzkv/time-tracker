import React, {useEffect, useState} from "react";
import {CreateProjectModal} from "./create-project-modal/CreateProjectModal";
import {NewTask} from "./NewTask";
import {ListRecords} from "./ListRecords";
import {TitleBar} from "./TitleBar";
import {getActiveProjectId, getActiveProjectName, setActiveProject} from "../utils/localStorage.handle";

export const App = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const [activeProjectName, setActiveProjectName] = useState('');
    
    useEffect(() => {
        window.MessagesAPI.openModal(openCreateProjectModal);
    }, []);
    
    useEffect(() => {
        const activeProject = getActiveProjectId();
        if (activeProject) {
            setActiveProjectName(getActiveProjectName());
        }
    }, [])
    
    
    const openCreateProjectModal = () => setModalOpened(true);
    
    const onCreateProject = (newProject) => {
        setModalOpened(false);
        setActiveProject(newProject);
        setActiveProjectName(newProject.name)
    }
    
    const onTaskCreate = (taskData) => {
        const taskBody = {...taskData, project: getActiveProjectId()};
        window.MessagesAPI.createTask(taskBody)
            .then(res => console.log(res));
    }
    
    return (
        <div>
            <TitleBar activeProjectName={activeProjectName}/>
            {
                modalOpened ? 
                    <CreateProjectModal 
                        onCloseModal={() => setModalOpened(false)}
                        onCreateProject={onCreateProject}/> :
                    <div>
                        <NewTask onTaskCreate={onTaskCreate}/>
                        <hr/>
                        <ListRecords activeProjectId={getActiveProjectId()}/>
                    </div>
            }
            
        </div>
    );
}
