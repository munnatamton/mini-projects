import React from "react";
import MenuItem from "./menu-items";

const MenuList = ({ list = [] }) => {
  return (
    <ol className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ol>
  );
};

export default MenuList;
