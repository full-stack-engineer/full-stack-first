import React from "react";
import "./Toggle.scss";

const Toggle: React.FC<{}> = props => {
    return (
        <div className="Toggle">
            <input id="Toggle" type="checkbox" className="Toggle__input" />
            <label htmlFor="Toggle" className="Toggle__label">
                <span className="Toggle__bar">Do</span>
            </label>
        </div>
    )
}

export default Toggle;