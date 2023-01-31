import React, { FC } from "react";
import { Container } from "components/common/container";
import { useAppSelector } from "store/hooks";
import { getMenu } from "components/common/header/nav/NavSlice";
import Styles from "./Header.module.scss";
import { INavItem } from "components/common/header/nav/nav.d";
import { NavItem } from "components/common/header/nav/NavItem";
import { Logo } from "components/common/header/logo/Logo";

const HeaderContainer: FC = () => {
    const menu = useAppSelector(getMenu);
    return (
      <Container className="wrapper">
        <div className={Styles.header}>
          <div className={Styles.header__logo}>
            <Logo />
          </div>
          <ul className={Styles.header__nav}>
            {!menu.hasError && menu.response.map((e: INavItem) => {
              return (<NavItem {...e} key={e._id} />);
            })}
          </ul>
          <div className={Styles.header__contacts}>
            Контакты типа телефона, соц сети
          </div>
        </div>
      </Container>
    );
  }
;

export { HeaderContainer };
