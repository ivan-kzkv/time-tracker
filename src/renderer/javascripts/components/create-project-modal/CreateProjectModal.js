import React, {useState} from "react";

export const CreateProjectModal = ({onCloseModal}) => {
    const [projectName, setProjectName] = useState('');
    
    const createNewProject = () => {
        window.MessagesAPI.createProject({name: projectName})
            .then(newProject => {
                // TODO set as active project of application
            });
    }
    
    
    return (
      <div className="container text-center justify-content-center d-flex flex-column min-vh-100">
          <div className="row">
              <div className="col">
                  <label className="col-form-label col-form-label-lg mt-4" htmlFor="project">Enter Project Title</label>
                  <input 
                      className="form-control form-control-lg" 
                      type="text" 
                      placeholder="Some cool project" 
                      id="project" 
                      value={projectName} 
                      onChange={(e) => setProjectName(e.target.value)}/>
                  <div className="row mt-3">
                      <div className="col-6">
                          <button type="button" className="btn btn-outline-success" onClick={createNewProject}>Create new</button>
                      </div>
                      <div className="col-6">
                          <button type="button" className="btn btn-outline-danger" onClick={onCloseModal}>Cancel</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>  
    );
}
