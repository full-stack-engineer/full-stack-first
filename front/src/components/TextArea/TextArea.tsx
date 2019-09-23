import React from "react";
import "./TextArea.scss";

interface TextAreaInterface {
    placeholder: string;
}

const TextArea: React.FC<TextAreaInterface> = props => {
    return (
        <div className="TextArea">
            <textarea
                className="TextArea__input"
                onChange={(e) => console.log(e.target.value)}
                rows={8}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextArea;