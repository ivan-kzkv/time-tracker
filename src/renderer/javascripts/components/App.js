import React, {useEffect, useState} from "react";
import {CreateProjectModal} from "./create-project-modal/CreateProjectModal";
import {NewTask} from "./NewTask";
import {ListRecords} from "./ListRecords";
import {TitleBar} from "./TitleBar";
import {getActiveProjectId, getActiveProjectName, setActiveProject} from "../utils/localStorage.handle";

export const App = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const [activeProjectName, setActiveProjectName] = useState('');
    const [records, setRecords] = useState([]);
    
    useEffect(() => {
        window.MessagesAPI.openModal(openCreateProjectModal);
    }, []);
    
    useEffect(() => {
        if (activeProjectName) {
            loadTasksList();
        }
        
    }, [activeProjectName]);


    useEffect(() => {
        const activeProject = getActiveProjectId();
        if (activeProject) {
            setActiveProjectName(getActiveProjectName());
        }
    }, [])
    
    
    const openCreateProjectModal = () => setModalOpened(true);
    
    const loadTasksList = () => {
        window.MessagesAPI.loadTasks({project_id: getActiveProjectId()})
            .then(tasksList => setRecords(tasksList));
    }
    
    const onCreateProject = (newProject) => {
        setModalOpened(false);
        setActiveProject(newProject);
        setActiveProjectName(newProject.name)
    }
    
    const onTaskCreate = (taskData) => {
        const taskBody = {...taskData, project: getActiveProjectId()};
        window.MessagesAPI.createTask(taskBody)
            .then(() => {
                loadTasksList();
            });
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
                        <ListRecords records={records}/>
                    </div>
            }
            
        </div>
    );
}
