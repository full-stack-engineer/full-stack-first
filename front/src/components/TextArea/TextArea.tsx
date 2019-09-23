import React, { Component } from 'react'

interface TextAreaInterface {
    textValue: string;
    textHeight: number;
}

export default class TextArea extends Component<{}, TextAreaInterface> {
    textAreaRef: React.RefObject<HTMLTextAreaElement>;
    constructor(props: TextAreaInterface) {
        super(props);
        this.textAreaRef = React.createRef();

        this.state = {
            textValue: "",
            textHeight: 40
        };
    }

    private getHieghtOfTextArea = (): void => {
        if (this.textAreaRef.current !== null) {
            this.setState({
                textHeight: this.textAreaRef.current.value.split("\n").length * 10
            })
            console.log(this.state.textHeight);
        }
    }

    private changeTextArea = (): void => {
        if (this.textAreaRef.current !== null) {
            this.setState({
                textValue: this.textAreaRef.current.value
            });
            console.log(this.state.textValue);
        }
    }

    render() {
        return (
            <textarea
                style={{ height: `${this.state.textHeight}px` }}
                onChange={() => { this.getHieghtOfTextArea(); this.changeTextArea() }}
                value={this.state.textValue}
                ref={this.textAreaRef}
            />
        )
    }
}
