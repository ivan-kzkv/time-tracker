import React, {useState} from "react";
import {Time} from "./Time";

export const Timer = () => {
    const [isStarted, setIsStarted] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [inputDisabled, setInputDisabled] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [time, setTime] = useState('');
    
    window.MessageApi.stopTimer(() => {
        setTaskName('');
        setInputDisabled(false);
        setButtonDisabled(true);
        setIsStarted(false);
        // TODO send task to app
    });
    
    
    const updateTaskName = (event) => {
        const taskName = event.target.value;
        setTaskName(taskName);
        setButtonDisabled(!taskName)
    }
    
    const startTimer = () => {
        setIsStarted(true);
        setInputDisabled(true);
        window.MessageAPI.startTimer(handleTimer);
    }
    
    
    const handleTimer = (value) => {
        setTime(value);
    }
    
    return (
        <div className="row mt-3 p-1 d-flex align-items-center">
            <div className="col-8">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="Task" placeholder="Enter task" value={taskName} onChange={updateTaskName} disabled={inputDisabled}/>
                    <label htmlFor="Task">Task name</label>
                </div>
            </div>
            <div className="col-2">
                <Time seconds={time}/>
            </div>
            <div className="col-2">
                <div>
                    {
                        isStarted ? <button type="button" className="btn btn-danger" onClick={() => setIsStarted(false)}>Stop</button> :
                            <button type="button" className="btn btn-success" onClick={startTimer} disabled={buttonDisabled}>Play</button>
                    }
                </div>
            </div>
        </div>
    );
}
