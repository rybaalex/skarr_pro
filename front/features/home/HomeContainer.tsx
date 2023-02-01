import { Container } from "components/common/container";
import { FC } from "react";
import {Banners} from "features/home/banners/Banners";


const HomeContainer: FC = () => {

  return (<Container className={"wrapper"}>
        <Banners/>
          3333
      </Container>
  );
};
export { HomeContainer };
