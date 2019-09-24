import React from "react";
import "./TextArea.scss";

interface TextAreaInterface {
    placeholder: string;
    textAreaValue: any;
}

const TextArea: React.FC<TextAreaInterface> = props => {
    return (
        <div className="TextArea">
            <textarea
                className="TextArea__input"
                onChange={(e) => props.textAreaValue(e.target.value.replace(/\n/g, " "))}
                rows={8}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default TextArea;