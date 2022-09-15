import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import TreeElement from "./TreeElement";

//parent
const RecursiveTree = ({ treeNode, depthlevel, setTreeNode }) => {
  // console.log(treeNode);
  // console.log(depthlevel);

  const [checked, setChecked] = useState(treeNode.isActive);

  const [active, setActive] = useState({
    activeParent: [],
    activeChildren: [],
  });

  const checkRef = useRef([]);

  useEffect(() => {
    console.log(active, "active");
  }, [active, checkRef]);

  return (
    <div>
      {treeNode.map((node, index) => {
        return (
          <TreeElement
            node={node}
            treeNode={treeNode}
            setTreeNode={setTreeNode}
            key={index}
            activeNode={active}
            setActive={setActive}
            depthlevel={depthlevel}
            checked={checked}
          />
        );
      })}
    </div>
  );
};

export default RecursiveTree;
