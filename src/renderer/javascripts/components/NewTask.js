import React, {useEffect, useState} from "react";
import {Time} from "./Time";

export const NewTask = ({onTaskCreate}) => {
    const [isStarted, setIsStarted] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [inputDisabled, setInputDisabled] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [time, setTime] = useState(0);
    
    useEffect(() => {
        window.MessagesAPI.listenTimer(handleTimer);
    }, []);
    
    const updateTaskName = (event) => {
        const taskName = event.target.value;
        setTaskName(taskName);
        setButtonDisabled(!taskName)
    }
    
    const startTimer = () => {
        setIsStarted(true);
        setInputDisabled(true);
        window.MessagesAPI.startTimer();
    }
    
    const stopTimer = () => {
        window.MessagesAPI.stopTimer().then(time => {
            onTaskCreate({name: taskName, time});
            setTime(0);
            setTaskName('');
            setInputDisabled(false);
            setButtonDisabled(true);
            setIsStarted(false);
        });
    }
    
    
    const handleTimer = (e, time) => {
        setTime(time);
    }
    
    return (
        <div className="row mt-3 p-1 d-flex align-items-center">
            <div className="col-8">
                <div className="form-floating mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="Task" 
                        placeholder="Enter task" 
                        value={taskName} 
                        onChange={updateTaskName} 
                        disabled={inputDisabled}/>
                    <label htmlFor="Task">Task name</label>
                </div>
            </div>
            <div className="col-2">
                <Time seconds={time}/>
            </div>
            <div className="col-2">
                <div>
                    {
                        isStarted ? <button type="button" className="btn btn-danger" onClick={stopTimer}>Stop</button> :
                            <button type="button" className="btn btn-success" onClick={startTimer} disabled={buttonDisabled}>Play</button>
                    }
                </div>
            </div>
        </div>
    );
}
