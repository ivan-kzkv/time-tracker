import React from "react";
import {Record} from "./Record";

export const ListRecords = () => {
    return (
        <div>
            <h2>I'm Record list</h2>
            <ul>
                <li key={1}>
                    <Record/>
                </li>
                <li key={2}>
                    <Record/>
                </li>
            </ul>
        </div>
    );
}
