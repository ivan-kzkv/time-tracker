import React from "react";

export const CreateProjectModal = ({onCloseModal}) => {
    // TODO handle create project
    
    
    return (
      <div className="container text-center justify-content-center d-flex flex-column min-vh-100">
          <div className="row">
              <div className="col">
                  <label className="col-form-label col-form-label-lg mt-4" htmlFor="project">Enter Project Title</label>
                  <input className="form-control form-control-lg" type="text" placeholder="Some cool project" id="project"/>
                  <div className="row mt-3">
                      <div className="col-6">
                          <button type="button" className="btn btn-outline-success">Create new</button>
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
