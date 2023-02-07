import Styles from "components/common/header/Header.module.scss";
import {Logo} from "components/common/header/logo/Logo";
import {INavItem} from "components/common/header/nav/nav.d";
import {NavItem} from "components/common/header/nav/NavItem";
import {Button} from "components/button";
import React from "react";
import {useAppSelector} from "store/hooks";
import {getMenu} from "components/common/header/nav/NavSlice";
import {useModal} from "store/hooks/useModal";
import {Modal} from "components/modal";
import {BriefForm} from "components/modal/forms/BriefForm";

const HeaderNav = () => {
    const menu = useAppSelector(getMenu);
    const {isShow, toggle} = useModal();
    const handleOnClickButton = () => {
        toggle();
    }
    return <div className={Styles.header}>
        <div className={Styles.header__logo}>
            <Logo/>
        </div>
        <ul className={Styles.header__nav}>
            {!menu.hasError && menu.response.map((e: INavItem) => {
                return (<NavItem {...e} key={e._id}/>);
            })}
        </ul>
        <Button onClick={() => handleOnClickButton()}>Contact US</Button>
        <Modal
            isShow={isShow}
            hide={toggle}
            modalContent={<BriefForm/>}
            headerText={"Fill out the brief"}
            theme={"full_modal"}
            bgModal={"white"}
        />

    </div>
}
export {HeaderNav}