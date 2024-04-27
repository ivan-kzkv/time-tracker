import React, {useEffect, useState} from "react";
import {Record} from "./Record";

export const ListRecords = ({activeProjectId}) => {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        window.MessagesAPI.loadTasks({project_id: activeProjectId})
            .then(tasksList => setRecords(tasksList))
    }, [activeProjectId]);
    
    return (
        <div className="ms-1 me-1">
            {
                records.length ? <ul className="list-group">{
                        records.map((el, i) => <li key={i} className="list-group-item">{<Record/>}</li>)
                    }
                </ul> 
                    : <h2 className="text-center bg-light">No register tasks</h2>
            }
            
            
        </div>
    );
}
