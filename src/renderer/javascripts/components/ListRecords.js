import React, {useEffect, useState} from "react";
import {Record} from "./Record";

export const ListRecords = ({activeProject}) => {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        window.MessagesAPI.loadTasks({projectId: activeProject.id})
            .then(tasksList => {
                setRecords(tasksList);
            })
    }, [activeProject]);
    
    return (
        <div className="ms-1 me-1">
            <ul className="list-group">
                {
                    records.map((el, i) => <li key={i} className="list-group-item">{<Record/>}</li>)
                }
            </ul>
        </div>
    );
}
