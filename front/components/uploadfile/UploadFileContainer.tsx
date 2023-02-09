import React, {FC} from "react";
import {IUploadFile} from "components/uploadfile/UploadFile";
import Styles from "./UploadFile.module.scss"
import {CloseIcon} from "components/icons";

const UploadFileContainer: FC<IUploadFile> = ({
                                                  children,
                                                  value,
                                                  onChange,
                                                  onDelete,
                                                  disabled,
                                                  fileName = '',
                                                  accept,
                                                  name,
                                                  multi = false
                                              }) => {
    return (<div className={Styles.upload_file_container}>
        <label htmlFor={name} className={Styles.upload_input_item}>
            <input
                value={value}
                accept={accept}
                disabled={disabled}
                id={name}
                multiple={multi}
                type="file"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                className={Styles.upload_input_style}
            />
            {children}
        </label>
        {fileName && <div className={Styles.selected_file}>{fileName}
            <div className={Styles.deleted_files} onClick={()=>onDelete()}><CloseIcon/></div>
        </div>}

    </div>)
}
export {UploadFileContainer}