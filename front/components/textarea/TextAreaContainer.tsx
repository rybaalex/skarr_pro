import {FC} from "react";
import Styles from "./TextArea.module.scss"
import {ITextArea} from "components/textarea/TextArea.d";

const TextAreaContainer: FC<ITextArea> = ({onChange, valueDefault = ''}) => {
    return <div className={Styles.text_area_container}>
         <textarea
             defaultValue={valueDefault}
             placeholder={"Write your task in detail"}
             onChange={onChange}
             className={Styles.text_area_field}
             rows={5}/>
    </div>
}

export {TextAreaContainer}