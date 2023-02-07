import {FC} from "react";
import {IInput} from "components/input/Input";
import Styles from "./Input.module.scss"

const InputContainer: FC<IInput> = ({
                                        onClick,
                                        type = 'text',
                                        placeholder = '',
                                        value = '',
                                        defaultValue = '',
                                        name = 'input'
                                    }) => {
    return <div className={Styles.input_container}>
        <input
            type={type}
            onClick={onClick}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            name={name}
        />
    </div>
}

export {InputContainer}