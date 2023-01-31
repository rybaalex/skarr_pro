import { IResponse } from "../../../../types/response";

interface INavItem {
  _id: string,
  sort?: number,
  visible?: boolean,
  children?: INavItem[]
  title?: string,
  url?: string
}

interface INavResponse extends Omit<IResponse, "response"> {
  response: INavItem[];
}

interface INavSlice {
  navState: INavResponse;
}

export type { INavItem, INavResponse, INavSlice };
