import React from "react";
import TreeElement from "./TreeElement";

const DropDown = ({
  childnode,
  treeNode,
  setTreeNode = (f) => f,
  depthlevel,
  activeNode = [],
  setActiveNode = (f) => f,
}) => {
  depthlevel = depthlevel + 1;
  // console.log(childnode);
  return (
    <div>
      {childnode.map((child, i) => {
        return (
          <TreeElement
            node={child}
            treeNode={treeNode}
            setTreeNode={setTreeNode}
            key={i}
            activeNode={activeNode}
            setActiveNode={setActiveNode}
            depthlevel={depthlevel}
          />
        );
      })}
    </div>
  );
};

export default DropDown;
