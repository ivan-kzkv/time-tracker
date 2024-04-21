import React, {useState} from "react";
import {CreateProjectModal} from "./create-project-modal/CreateProjectModal";
import {Timer} from "./Timer";
import {ListRecords} from "./ListRecords";

export const App = () => {
    const [modalOpened, setModalOpened] = useState(false);
    
    const openCreateProjectModal = () => setModalOpened(true);
    
    
    window.MessagesAPI.openModal(openCreateProjectModal);
    
    
    return (
        <div>
            {
                modalOpened ? 
                    <CreateProjectModal onCloseModal={() => setModalOpened(false)}/> :
                    <div>
                        <Timer/>
                        <hr/>
                        <ListRecords/>
                    </div>
            }
            
        </div>
    );
}
