import React, { useState } from "react";
import "./TextArea.scss";

interface TextAreaInterface {
    placeholder: string;
}

const TextArea: React.FC<TextAreaInterface> = props => {
    const [textHeight, setTextHeight] = useState(1.6)

    return (
        <div className="TextArea">
            <textarea
                className="TextArea__input"
                onChange={(e) => { setTextHeight(e.target.value.split("\n").length * (1.6 + .35)) }}
                style={{ height: `${textHeight}rem` }}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextArea;