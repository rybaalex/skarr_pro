import React from 'react';
import {IChip} from './Chips.d';

import Styles from './Chips.module.scss';
const ChipItem: React.FC<IChip> = ({
                                       id,
                                       chipName = 'Example text',
                                       isActive = false,
                                       onClick,
                                       disabled = false
                                   }) => {

    return (
        <li
            className={`
            ${Styles.chip_container} 
            ${isActive && Styles.active}
            ${disabled && Styles.disabled}
            `}
            onClick={() => onClick({id: id, chipName: chipName})}>{chipName}</li>
    );
};

export {ChipItem};
