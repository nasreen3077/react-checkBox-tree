import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import DropDown from "./DropDown";
import arrowRight from "../../assets/ArrowRight2.svg";
import { Minus, MinusSquare } from "iconsax-react";
//child
const TreeElement = ({
  // checked,
  setIndeterminate = (f) => f,
  indeterminate,
  node,
  treeNode,
  setTreeNode = (f) => f,
  depthlevel,
  activeNode = [],
  setActive = (f) => f,
}) => {
  // console.log(node);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    if (node.isActive && depthlevel === 0) {
      setActive((prev) => ({
        ...prev,
        activeParent: [...prev.activeParent, [node.name, node.id]],
      }));
    }

    // console.log(indeterminate);
    // if (node?.children?.isActive) {
    //   setActive((prev) => ({
    //     ...prev,
    //     activeChildren: [...prev.activeChildren, [node.name, node.id]],
    //   }));
    // }
  }, [indeterminate]);

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
    // console.log(item);
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

  const selectParent = (node, tree = [], checked) => {
    // console.log(nodesList);
    // console.log(tree);
    let nodeparent = findParent(node, tree);
    // console.log(nodeparent);
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
    // if (count === ChildOfNodeParent.length) {
    //   setIndeterminate(false);
    //   return nodeparent;
    // } else {
    //   if (!nodeparent.isActive) {
    //     setIndeterminate(true);
    //   }
    // }
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
    // console.log(updateTree);
    setTreeNode(updateTree);
    if (!checked) {
      let parent = findParent(node, updateTree);
      if (parent) {
        parent.isActive = false;
      }
    } else {
      let pNode = selectParent(node, treeCopy);
      if (pNode) {
        pNode.isActive = true;
        // let u = findParent(pNode, treeCopy);
        // if (u) {
        //   u.isActive = true;
        // }
      }
    }
  };

  const ParentOnclick = () => {
    setDropdown((prev) => !prev);
  };

  // const indeterminateHandler = () => {
  //   console.log(indeterminate);
  //   if (node.isActive && node.children) {
  //     node.children.forEach((child) => {

  //     })
  //   }
  // setIndeterminate(true);
  // };
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
                      // indeterminate={indeterminate}
                      // indeterminate={node.isActive ? false : true}
                      // indeterminateIcon={
                      //   <MinusSquare size='22' color='#FF8A65' />
                      // }
                      id={node.id.toString()}
                      checked={node.isActive}
                      onChange={checkBoxHandler}
                    />
                  }
                />
              </div>

              {!dropdown && (
                <DropDown
                  treeNode={treeNode}
                  setTreeNode={setTreeNode}
                  childnode={node.children}
                  depthlevel={depthlevel}
                  dropdown={dropdown}
                  activeNode={activeNode}
                  setActive={setActive}
                  indeterminate={indeterminate}
                  setIndeterminate={setIndeterminate}
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
                  // onClick={xyz}
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
