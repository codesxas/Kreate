import React from "react";
import { useNavigate } from "react-router-dom";
import {HiChevronRight} from "react-icons/hi"

function BreadCrumb(props: any) {
  let navigate = useNavigate();
  //   console.log(navigate);

  //   function isLast(index) {
  //     return index === props.crumbs.length - 1;
  //   }

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="container">
      <ul className="bc-list">
        <li className="bc-item" onClick={() => handleClick("/")}>
          Home
          <HiChevronRight />
        </li>
        <li className="bc-item disabled" onClick={() => handleClick("/cart")}>Cart</li>
      </ul>
    </div>
  );
}

export default BreadCrumb;
