import {IResponse} from "../../../types/response";
import {INavItem} from "../../../components/common/header/nav/nav.d";

interface IBannerResponse extends Omit<IResponse, "response"> {
    response: IBannerItem;
}

interface IBannerItem {
    description: string;
    offers: IOfferItem[],
    button: IButtonItem[],
    images: IImagesBannerItem[]
}

interface IImagesBannerItem {
    title: string;
    url: string;
    sort?: number;
    published?: boolean
}

interface IButtonItem {
    title: string;
    url: string;
    sort?: number;
    published?: boolean
}

interface IOfferItem {
    title: string;
    url: string;
    sort?: number;
    published?: boolean
}

export {IBannerResponse, IOfferItem, IButtonItem}