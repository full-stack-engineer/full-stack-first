import React, { FC } from "react";
import "./TextArea.scss";

interface TextAreaInterface {
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: FC<TextAreaInterface> = props => {
    return (
        <textarea
            className="TextArea"
            onChange={props.onChange}
            rows={8}
            placeholder={props.placeholder}
        />
    )
}

export default TextArea;