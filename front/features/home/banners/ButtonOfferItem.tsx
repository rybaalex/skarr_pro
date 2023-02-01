import {FC} from "react";
import {IOfferItem} from "./Banners.d";
import {Button} from "components/button";

const ButtonOfferItem: FC<IOfferItem> = (
    {
        title = "",
        url = "",
    }
) => {
    return (
        <Button color={"black"} theme={"chips"} link={url}>{title}</Button>

    )
}

export {ButtonOfferItem}