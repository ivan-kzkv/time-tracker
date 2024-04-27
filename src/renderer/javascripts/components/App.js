import React, {useEffect, useState} from "react";
import {CreateProjectModal} from "./create-project-modal/CreateProjectModal";
import {Timer} from "./Timer";
import {ListRecords} from "./ListRecords";
import {TitleBar} from "./TitleBar";
import {getActiveProjectId, getActiveProjectName, setActiveProject} from "../utils/localStorage.handle";

export const App = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const [activeProjectName, setActiveProjectName] = useState('');
    
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
    
    window.MessagesAPI.openModal(openCreateProjectModal);
    
    
    return (
        <div>
            <TitleBar activeProjectName={activeProjectName}/>
            {
                modalOpened ? 
                    <CreateProjectModal 
                        onCloseModal={() => setModalOpened(false)}
                        onCreateProject={onCreateProject}/> :
                    <div>
                        <Timer/>
                        <hr/>
                        <ListRecords activeProjectId={getActiveProjectId()}/>
                    </div>
            }
            
        </div>
    );
}
