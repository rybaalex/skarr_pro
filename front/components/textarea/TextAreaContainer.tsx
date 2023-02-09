import React, {FC} from "react";
import Styles from "./TextArea.module.scss"
import {ITextArea} from "components/textarea/TextArea.d";

const TextAreaContainer: FC<ITextArea> = ({onChange, valueDefault = '', name = '', labelTitle}) => {
    const handleOnChangeTextArea = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        evt.target.style.height = 'auto';
        evt.target.style.height = `${evt.target.scrollHeight}px`
        onChange(evt.target.value)
    }

    return <div className={Styles.text_area_container}>
         <textarea
             id={name}
             defaultValue={valueDefault}
             onChange={(evt) => handleOnChangeTextArea(evt)}
             className={Styles.text_area_field}
             placeholder={" "}
             rows={1}/>
        <label htmlFor={name} className={Styles.label_style}
        >
            {labelTitle}
        </label>
    </div>
}

export {TextAreaContainer}