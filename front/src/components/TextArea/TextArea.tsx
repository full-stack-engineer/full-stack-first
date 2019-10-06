import React, { FC } from "react";
import "./TextArea.scss";

interface TextAreaInterface {
    placeholder: string;
    textAreaValue: any;
}

const TextArea: FC<TextAreaInterface> = props => {
    return (
        <textarea
            className="TextArea"
            onChange={(e) => props.textAreaValue(e.target.value.replace(/\n/g, " "))}
            rows={8}
            placeholder={props.placeholder}
        />
    )
}

export default TextArea;