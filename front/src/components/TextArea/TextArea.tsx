import React, { Component } from "react";
import "./TextArea.scss";

interface TextAreaInterface {
    textHeight: number;
    state: string;
}

export default class TextArea extends Component<{}, TextAreaInterface> {
    textAreaRef: React.RefObject<HTMLTextAreaElement>;
    constructor(props: TextAreaInterface) {
        super(props);
        this.textAreaRef = React.createRef();

        this.state = {
            textHeight: 1.6,
            state: ""
        };
    }

    private getHieghtOfTextArea = (): void => {
        if (this.textAreaRef.current !== null) {
            this.setState({
                textHeight: this.textAreaRef.current.value.split("\n").length * 2.5
            })
        }
    }

    render() {
        console.log(this.state.textHeight);
        return (
            <div className="TextArea">
                <textarea
                    className="TextArea__input"
                    onChange={this.getHieghtOfTextArea}
                    style={{ height: `${this.state.textHeight}rem` }}
                    ref={this.textAreaRef}
                    placeholder="タスクを追加してみよう！"
                />
            </div>
        )
    }
}
