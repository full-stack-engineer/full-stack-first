import React, { FC, useState } from "react";
import "./Toggle.scss";

interface ToggleInterface {
    toggleButtonFlg: any;
}

const Toggle: FC<ToggleInterface> = props => {
    const [toggle, setToggle] = useState(true);
    return (
        <div className="Toggle">
            <input
                id="Toggle"
                className="Toggle__input"
                type="checkbox"
                onClick={() => { setToggle(!toggle); props.toggleButtonFlg(!toggle); }}
            />
            <label htmlFor="Toggle" className="Toggle__label">
                {toggle ? (
                    <span className="Toggle__bar">Do</span>) : (<span className="Toggle__bar">Done</span>)}
            </label>
        </div>
    )
}

export default Toggle;