interface IChip {
    id: number | string;
    chipName?: string;
    code?: string | number;
    isActive?: boolean;
    withDeleteBtn?: boolean;
    className?: string;
    disabled?: boolean;
    changeFunc?: (list: IChip | IChip[]) => void;
    onClick?: (list:IChip | IChip[]) => void;
}

interface IChipGroup {
    chipsData: IChip[];
    changeFunc?: (list: IChip | IChip[]) => void;
    classForContainer?: string;
    classForList?: string;
    classForItem?: string;
    classForLabel?: string;
    label?: string;
    labelPosition?: 'above' | 'side';
    mode?: 'single' | 'multi';
    errorMessage?: string;
    onClick?: () => void;

}

export type {IChipGroup, IChip}