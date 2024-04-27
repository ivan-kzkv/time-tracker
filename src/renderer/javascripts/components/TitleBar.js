import React from "react";

export const TitleBar = ({activeProjectName}) => {
    return (
        <div className="d-flex align-items-center justify-content-center bg-secondary">
            { activeProjectName || 'No Project' }
        </div>
    );
}
