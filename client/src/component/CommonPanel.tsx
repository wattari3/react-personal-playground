import React from "react";
const CommonPanel = (props: { children: React.ReactNode }) => {
    return (
        <div className="common_panel">
            {props.children}
        </div>
    );
}

export default CommonPanel;