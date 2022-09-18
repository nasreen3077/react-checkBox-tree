import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import TreeElement from "./TreeElement";

//parent
const RecursiveTree = ({ treeNode, depthlevel, setTreeNode }) => {
  const [activeNode, setActiveNode] = useState([]);

  useEffect(() => {
    console.log(activeNode, "active");
  }, [activeNode]);

  return (
    <div>
      {treeNode.map((node, index) => {
        return (
          <TreeElement
            node={node}
            treeNode={treeNode}
            setTreeNode={setTreeNode}
            key={index}
            activeNode={activeNode}
            setActiveNode={setActiveNode}
            depthlevel={depthlevel}
          />
        );
      })}
    </div>
  );
};

export default RecursiveTree;
