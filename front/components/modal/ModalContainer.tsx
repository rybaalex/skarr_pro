import React, {FC, useEffect} from "react";
import ReactDOM from "react-dom";
import Styles from "./Modal.module.scss";
import {IModalProps} from "./Modal.d";
import {CloseIcon} from "components/icons";

export const ModalContainer: FC<IModalProps> = ({
                                           isShow,
                                           hide,
                                           modalContent,
                                           headerText = "",
                                           theme = "modal",
                                           bgModal = "",
                                       }) => {
    useEffect(() => {
        if (document.body.style.overflow !== "hidden") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    })

    const modal = (
        <div className={`${Styles.modal} ${Styles[bgModal]}`}>
            <div
                className={`${Styles.modal_dialog} ${Styles[`theme__${theme}`]}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={Styles.modal_body}>
                    <div className={Styles.modal_head}>
                        <div className={Styles.modal_head_title}>{headerText}</div>
                        <span className={Styles.modal_close} onClick={hide}>
              <CloseIcon/>
            </span>
                    </div>
                    <div className={`${Styles.modal_content} `}>
                        {modalContent}
                    </div>
                </div>
            </div>
            <section className={`${Styles.modal} ${Styles[bgModal]}`} onClick={hide}>
            </section>
        </div>
    );
    return isShow ? ReactDOM.createPortal(modal, document.body) : null;
};
