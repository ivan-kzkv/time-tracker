import React from "react";
import {Time} from "./Time";

export const Record = ({taskName, seconds}) => {
    return (
        <div className="row">
            <div className="col-8">
                <h2>{taskName}</h2>
            </div>
            <div className="col-2">
                <Time seconds={seconds}/>
            </div>
        </div>
    );
}
