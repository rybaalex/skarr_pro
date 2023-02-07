import React, {useEffect, useState} from 'react';
import {IChip, IChipGroup} from './Chips';

import Styles from './Chips.module.scss';
import {ChipItem} from "components/chips/ChipItem";

const ChipsContainer: React.FC<IChipGroup> = ({
                                                  chipsData,
                                                  changeFunc,
                                                  mode = 'single',
                                              }) => {
    const [chipsList, setChipsList] = useState<IChip[]>([])
    const handleChangeFunc = (list: IChip) => {
        let newList;
        if (mode === 'single') {
            newList = [...chipsList].map((item) =>
                item.id === list.id
                    ? {...item, isActive: true}
                    : {...item, isActive: false}
            );
        } else {
            newList = [...chipsList].map((item) =>
                item.id === list.id ? {...item, isActive: !item.isActive} : item
            );
        }
        setChipsList(newList);
    }

    useEffect(() => {
        chipsData && setChipsList(chipsData)
    }, [chipsData])

    return <div className={Styles.chips_container}>
        <ul>
            {chipsList.map(e => {
                return <ChipItem {...e} key={e.id}
                                 changeFunc={changeFunc}
                                 onClick={(list: IChip) => handleChangeFunc(list)}/>
            })}
        </ul>
    </div>
};

export {ChipsContainer};
