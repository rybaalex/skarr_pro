import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { fetchMenu } from "components/common/header/nav/NavSlice";
import { navListServer } from "service/index";
import { ReactNode } from "react";
import { Layout } from "components/common";
import { Portfolio } from "features/index";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ navState: await navListServer() }));
    return {
      props: {},
      revalidate: 10
    };
  }
);

const PortfolioSSR = () => <Portfolio />;

PortfolioSSR.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default PortfolioSSR;
