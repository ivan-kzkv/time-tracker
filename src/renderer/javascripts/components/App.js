import React, {useState} from "react";
import {CreateProjectModal} from "./create-project-modal/CreateProjectModal";

export const App = () => {
    const [modalOpened, setModalOpened] = useState(false);
    
    const openCreateProjectModal = () => setModalOpened(true);
    
    
    window.MessagesAPI.openModal(openCreateProjectModal);
    
    
    return (
        <div>
            {
                modalOpened ? <CreateProjectModal onCloseModal={() => setModalOpened(false)}/> : <h1>Hello screen</h1>
            }
            
        </div>
    );
}
