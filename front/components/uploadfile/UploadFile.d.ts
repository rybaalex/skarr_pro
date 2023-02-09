import React from "react";

interface IUploadFile {
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onDelete?: () => void,
    disabled?: boolean,
    accept?: string,
    multi?: boolean
    fileName?: string,
    name: string
}

export {IUploadFile}