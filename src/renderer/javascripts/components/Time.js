import React from "react";

export const Time = ({seconds}) => {
    
    const makeTimeString = () => {
        const date = new Date(0);
        date.setSeconds(seconds ? seconds : 0); // specify value for SECONDS here
        return  date.toISOString().substring(11, 19);
    }
    
    return (
        <div>{makeTimeString()}</div>
    );
}
