import {Container} from "components/common/container";
import {FC} from "react";
import {Banners} from "features/home/banners/Banners";
import {Services} from "features/index";


const HomeContainer: FC = () => {

    return (<Container className={"wrapper"}>
            <Banners/>
            <Services/>
        </Container>
    );
};
export {HomeContainer};
