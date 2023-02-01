import {FC} from "react";
import {IButtonItem} from "./Banners.d";
import {Button} from "components/button";

const ButtonItem: FC<IButtonItem> = (
    {
        title = "",
        url = "",
    }
) => {
    return (
        <Button color={"black"} theme={"square"} link={url}>{title}</Button>

    )
}

export {ButtonItem}