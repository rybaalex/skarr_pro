import {FetchService} from "../../Service";

const getServiceServer = async () => {
    return await FetchService.getData(
        process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/service",
        {},
    );
};

export {getServiceServer};
