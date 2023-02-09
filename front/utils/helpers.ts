import {IButtonItem, IOfferItem} from "features/home/banners/Banners.d";
import {IServiceItem} from "features/home/services/Service";
import {IRecommendationsItem} from "components/modal/forms/Brief";

const filter_publish = (data: IButtonItem[] | IOfferItem[]) => {
    return data.filter((e: { published?: boolean; }) => e.published);
}

const convertChipsData = (data: IServiceItem[] | IRecommendationsItem[]) => {
    return data.map(e => {
        return {id: e._id, chipName: e.title, isActive: false}
    })
}
export {filter_publish, convertChipsData}