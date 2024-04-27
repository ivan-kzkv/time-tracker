import React, {useState} from "react";
import {Time} from "./Time";

export const Timer = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [taskName, setTaskName] = useState('');
    
    const updateTaskName = (event) => {
        const taskName = event.target.value;
        setTaskName(taskName);
        setButtonDisabled(!taskName)
    }
    
    
    return (
        <div className="row mt-3 p-1 d-flex align-items-center">
            <div className="col-8">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="Task" placeholder="Enter task" value={taskName} onChange={updateTaskName}/>
                    <label htmlFor="Task">Task name</label>
                </div>
            </div>
            <div className="col-2">
                <Time/>
            </div>
            <div className="col-2">
                <div>
                    {
                        isStarted ? <button type="button" className="btn btn-danger" onClick={() => setIsStarted(false)}>Stop</button> :
                            <button type="button" className="btn btn-success" onClick={() => setIsStarted(true)} disabled={buttonDisabled}>Play</button>
                    }
                </div>
            </div>
        </div>
    );
}
