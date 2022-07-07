import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

type Props = {
  title: string;
  link: string;
  subMenu: any;
  megaSubMenu: any;
};

function NavItem(props: Props) {
  const { title, link, subMenu, megaSubMenu } = props;
  const [isActive, setIsActive] = useState(false);

  const hasSubMenu =
    (subMenu && subMenu.length) || (megaSubMenu && megaSubMenu.length);

  const handleMouseEnter = () => {
    setIsActive(true);
  };
  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <React.Fragment>
      <div
        className="nav-link"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href={link}>
          <span>{title}</span>
          {hasSubMenu && <IoChevronDown />}
        </a>

        {subMenu && subMenu.length && (
          <ul className={`sub-menu ${isActive ? "active" : ""}`}>
            {subMenu.map((item: string, index: number) => (
              <li className="menu-item" key={index}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {megaSubMenu && megaSubMenu.length && (
          <ul className={`mega__sub-menu ${isActive ? "active" : ""}`}>
            {megaSubMenu.map((item: any, index: number) => (
              <li className="menu-item" key={index}>
                <span className="list-title">{item.title}</span>

                <ul>
                  {item.subMenu.map((sub_item: string, sub_index: number) => (
                    <li key={sub_index}>
                      <span>{sub_item}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </React.Fragment>
  );
}

export default NavItem;
