import { ChangeEvent } from "react";

interface IRadioBox {
  title?: string;
  classCheck?: string;
  onChangeData?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  name?: string;
  id?: string;
}

export { IRadioBox };
