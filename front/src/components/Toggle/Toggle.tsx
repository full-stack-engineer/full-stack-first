import React, { FC, useState } from "react";
import store from "../../redux/store";
import "./Toggle.scss";

interface ToggleInterface {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Toggle: FC<ToggleInterface> = props => {
    const [toggle, setToggle] = useState(true);
    store.subscribe(() => {
        store.getState().main.toggle
            ? setToggle(true)
            : setToggle(false)
    });
    return (
        <div className="Toggle">
            <input
                id="Toggle"
                className="Toggle__input"
                type="checkbox"
                onChange={props.onChange}
            />
            <label htmlFor="Toggle" className="Toggle__label">
                {toggle
                    ? (<span className="Toggle__bar">Do</span>)
                    : (<span className="Toggle__bar">Done</span>)
                }
            </label>
        </div>
    )
}

export default Toggle;