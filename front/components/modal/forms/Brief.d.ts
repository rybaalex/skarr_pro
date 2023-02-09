import {IResponse} from "types/response";

interface IRecommendationsResponse extends Omit<IResponse, "response"> {
    response?: IRecommendationsItem[];
}

interface IRecommendationsItem {
    _id?: string,
    title?: string,
    count?: number,
    published?: boolean
}

export {IRecommendationsResponse, IRecommendationsItem}