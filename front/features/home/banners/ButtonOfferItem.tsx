import {FC} from "react";
import {IOfferItem} from "./Banners.d";
import {Button} from "components/button";
import {servicePath} from "utils/bootstrap";

const ButtonOfferItem: FC<IOfferItem> = (
    {
        title = "",
        url = "",
    }
) => {
    return (
        <Button color={"black"} theme={"chips"} link={servicePath+url}>{title}</Button>

    )
}

export {ButtonOfferItem}