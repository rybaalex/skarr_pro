import {IResponse} from "../../../types/response";

interface IServiceResponse extends Omit<IResponse, "response"> {
    response?: IServiceItem[];
}

interface IServiceItem {
    _id: string,
    title: string;
    url: string;
    published: boolean;
    description?: string
    position: number;
}


interface IServiceSlice {
    serviceState: IServiceResponse;
}
export {IServiceResponse, IServiceItem, IServiceSlice}