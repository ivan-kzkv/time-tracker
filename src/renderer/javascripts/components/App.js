import React, {useState} from "react";
import {CreateProjectModal} from "./create-project-modal/CreateProjectModal";
import {Timer} from "./Timer";
import {ListRecords} from "./ListRecords";
import {setActiveProject} from "../utils/localStorage.handle";

export const App = () => {
    const [modalOpened, setModalOpened] = useState(false);
    
    const openCreateProjectModal = () => setModalOpened(true);
    const onCreateProject = (newProject) => {
        setModalOpened(false);
        setActiveProject(newProject);
        // TODO set active project in main window
        
        // TODO clear Old session and begin new One
    }
    
    window.MessagesAPI.openModal(openCreateProjectModal);
    
    
    return (
        <div>
            {
                modalOpened ? 
                    <CreateProjectModal 
                        onCloseModal={() => setModalOpened(false)}
                        onCreateProject={onCreateProject}/> :
                    <div>
                        <Timer/>
                        <hr/>
                        <ListRecords/>
                    </div>
            }
            
        </div>
    );
}
