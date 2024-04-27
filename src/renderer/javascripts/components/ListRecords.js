import React from "react";
import {Record} from "./Record";

export const ListRecords = ({records = []}) => {
    
    return (
        <div className="ms-1 me-1">
            {
                records.length ? <ul className="list-group">{
                        records.sort((a, b) => b.id - a.id)
                            .map((el, i) => <li key={i} className="list-group-item">{<Record taskName={el.name} seconds={el.time}/>}</li>)
                    }
                </ul> 
                    : <h2 className="text-center bg-light">No register tasks</h2>
            }
            
            
        </div>
    );
}
