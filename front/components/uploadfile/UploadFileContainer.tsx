import React, {FC} from "react";
import {IUploadFile} from "components/uploadfile/UploadFile";
import Styles from "./UploadFile.module.scss"

const UploadFileContainer: FC<IUploadFile> = ({
                                                  children,
                                                  value,
                                                  onChange,
                                                  disabled,
                                                  accept,
                                                  name
                                              }) => {
    return (<div className={Styles.upload_file_container}>
        <label htmlFor={name} className="m-0 w-100">
            <input
                value={value}
                accept={accept}
                disabled={disabled}
                id={name}
                multiple
                type="file"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                className={Styles.upload_input_style}
            />
            {children}
        </label></div>)
}
export {UploadFileContainer}