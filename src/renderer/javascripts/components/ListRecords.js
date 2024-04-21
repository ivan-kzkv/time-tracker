import React from "react";
import {Record} from "./Record";

export const ListRecords = () => {
    return (
        <div className="ms-1 me-1">
            <ul className="list-group">
                {
                    [<Record/>, <Record/>].map((el, i) => <li key={i} className="list-group-item">{el}</li>)
                }
            </ul>
        </div>
    );
}
