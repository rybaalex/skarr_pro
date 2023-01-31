import { Link } from "components/link";
import React from "react";
import { INavItem } from "components/common/header/nav/nav.d";

const NavItem = (e: INavItem) => {
  console.log("eee", e.children);
  return (<Link url={e.url} key={e._id}>
    <li>{e.title}</li>
  </Link>);
};
export { NavItem };