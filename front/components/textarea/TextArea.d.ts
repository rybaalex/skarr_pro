interface ITextArea {
    onChange?: (value: string) => void;
    valueDefault?: string;
    name: string;
    labelTitle?: string;
}

export {ITextArea}