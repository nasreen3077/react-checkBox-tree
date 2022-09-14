import React from "react";
import TreeElement from "./TreeElement";
import FormControlLabel from "@mui/material/FormControlLabel";

const DropDown = ({
  treeNode,
  checked = {},
  setChecked = (f) => f,
  childnode,
  depthlevel,
  dropdown,
  activeNode = [],
  setActive,
}) => {
  depthlevel = depthlevel + 1;
  // console.log(childnode);
  return (
    <div>
      {childnode.map((child, i) => {
        return (
          <TreeElement
            treeNode={treeNode}
            checked={checked}
            setChecked={setChecked}
            node={child}
            key={i}
            activeNode={activeNode}
            setActive={setActive}
            depthlevel={depthlevel}
          />
        );
      })}
    </div>
  );
};

export default DropDown;
