import React from "react";

export const App = () => {
    // TODO add correct behaviour to open modal
    const openCreateProjectModal = (event) => console.log(event);
    
    
    window.MessagesAPI.openModal(openCreateProjectModal);
    
    
    return <h1>Hello World 2</h1>;
}
