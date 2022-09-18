import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import DropDown from "./DropDown";
import arrowRight from "../../assets/ArrowRight2.svg";

//child
const TreeElement = ({
  node,
  treeNode,
  setTreeNode = (f) => f,
  depthlevel,
  activeNode = [],
  setActiveNode = (f) => f,
}) => {
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    if (node.isActive) {
      setActiveNode([...activeNode, node.name]);
    }
  }, []);

  const getAllChild = (node) => {
    let children = [];
    if (node?.children) {
      node.children.forEach((child) => {
        children.push(child);
        children.push(...getAllChild(child));
      });
      return children;
    } else {
      return children;
    }
  };

  const findParent = (item, data) => {
    const allNodes = getAllChild({ children: data }); // flat tree nodes
    let parent;
    for (let i = 0; i < allNodes.length; i++) {
      const node = allNodes[i];
      if (node.children && node.children.some((n) => n.id === item.id)) {
        parent = node;
        break;
      }
    }
    return parent;
  };

  const selectParent = (node, tree = []) => {
    let nodeparent = findParent(node, tree);
    let ChildOfNodeParent = getAllChild(nodeparent);
    let count = 0;
    for (let i = 0; i < ChildOfNodeParent.length; i++) {
      const node = ChildOfNodeParent[i];
      if (node.isActive) {
        count = count + 1;
      }
    }
    if (count === ChildOfNodeParent.length) {
      return nodeparent;
    }
  };

  const selectNode = (nodesList, tree = [], checked) => {
    tree.forEach((node) => {
      let findNode = nodesList.find((item) => {
        return item.id === node.id;
      });
      if (findNode) {
        node.isActive = checked;
      }
      selectNode(nodesList, node.children, checked);
    });
    return tree;
  };
  const checkBoxHandler = (e) => {
    let checked = e.target.checked;
    let children = getAllChild(node);
    let treeCopy = [...treeNode];
    let updateTree = selectNode([...children, node], treeCopy, checked);
    setTreeNode(updateTree);
    if (!checked) {
      let parent = findParent(node, updateTree);
      if (parent) {
        parent.isActive = false;
      }
    } else {
      setActiveNode([...activeNode, node.name]);
      let pNode = selectParent(node, treeCopy);
      if (pNode) {
        pNode.isActive = true;
        setActiveNode([...activeNode, pNode.name]);
      }
    }
  };

  const ParentOnclick = () => {
    setDropdown((prev) => !prev);
  };
  return (
    <div>
      <div>
        {node.children ? (
          <>
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              <div className='item-container'>
                <span onClick={ParentOnclick}>
                  <img
                    src={arrowRight}
                    className={`${dropdown ? "arrowRotate" : "arrow"}`}
                  />
                </span>

                <FormControlLabel
                  sx={{ width: 150 }}
                  label={node.name}
                  name={node.name}
                  control={
                    <Checkbox
                      id={node.id.toString()}
                      checked={node.isActive}
                      onChange={checkBoxHandler}
                    />
                  }
                />
              </div>

              {dropdown && (
                <DropDown
                  treeNode={treeNode}
                  setTreeNode={setTreeNode}
                  childnode={node.children}
                  depthlevel={depthlevel}
                  dropdown={dropdown}
                  activeNode={activeNode}
                  setActiveNode={setActiveNode}
                />
              )}
            </Box>
          </>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", ml: 6 }}>
            <FormControlLabel
              label={node.name}
              name={node.name}
              control={
                <Checkbox
                  id={node.id.toString()}
                  checked={node.isActive}
                  onChange={checkBoxHandler}
                />
              }
            />
          </Box>
        )}
      </div>
    </div>
  );
};

export default TreeElement;
