import {IButtonItem, IOfferItem} from "features/home/banners/Banners.d";

const filter_publish = (data: IButtonItem[] | IOfferItem[]) => {
    return data.filter((e: { published?: boolean; }) => e.published);
}

export {filter_publish}