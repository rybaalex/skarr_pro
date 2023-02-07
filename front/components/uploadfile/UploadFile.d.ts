import React from "react";

interface IUploadFile {
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    disabled?: boolean,
    accept?: string
    name: string
}
export {IUploadFile}