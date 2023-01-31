import { IBreadCrumbs } from "components/breadcrumbs/BreadCrumbs.d";
import { RombIcon } from "components/icons";
import { Link } from "components/link";
import React, { FC } from "react";
interface IBreadCrumbsProps {
  data: IBreadCrumbs;
  last: boolean;
}

const BreadCrumbsItem: FC<IBreadCrumbsProps> = ({ data, last }) => {
  return (
    <>
      <li>
        {!last ? <Link url={data.alias}>{data?.title}</Link> : data?.title}
        {!last && (
          <span>
            <RombIcon />
          </span>
        )}
      </li>
    </>
  );
};
export { BreadCrumbsItem };
