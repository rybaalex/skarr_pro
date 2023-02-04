import { FetchService } from "../../Service";

const getBannersServer = async () => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/banner",
    {},
  );
};

export { getBannersServer };
