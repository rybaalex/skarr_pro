interface IInput {
    type: "text" | "file" | "hidden" | "submit" | "password" | "number"
    onClick?: () => void;
    label?: string;
    value?: string
    defaultValue?: string
    placeholder?: string;
    name: string
}

export {IInput}