import React from "react";
import TreeElement from "./TreeElement";

const DropDown = ({
  childnode,
  treeNode,
  setTreeNode = (f) => f,
  depthlevel,
  activeNode = [],
  setActive = (f) => f,
  setIndeterminate = (f) => f,
  indeterminate,
}) => {
  depthlevel = depthlevel + 1;
  // console.log(childnode);
  return (
    <div>
      {childnode.map((child, i) => {
        return (
          <TreeElement
            indeterminate={indeterminate}
            setIndeterminate={setIndeterminate}
            node={child}
            treeNode={treeNode}
            setTreeNode={setTreeNode}
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
