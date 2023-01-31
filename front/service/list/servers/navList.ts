import { FetchService } from "../../Service";

const navList = async () => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_FETCH + "/api/v1/navigation",
    {},
  );
};

export { navList };
