import React, {FC} from "react";
import {Container} from "components/common/container";
import {HeaderNav} from "components/common/header/HeaderNav";


const HeaderContainer: FC = () => {
        return (
            <Container className="wrapper">
                <HeaderNav/>
            </Container>
        );
    }
;

export {HeaderContainer};
