import React, { useEffect, useRef, useState } from "react";
import TreeItem from "@mui/lab/TreeItem";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import DropDown from "./DropDown";
import arrowRight from "../../assets/ArrowRight2.svg";
//child
const TreeElement = ({
  checkRef,
  node,
  treeNode,
  setTreeNode,
  depthlevel,
  activeNode = [],
  setActive = (f) => f,
  checked = {},
  setChecked = (f) => f,
}) => {
  // console.log(treeNode);
  // console.log(node.children?.length);
  // console.log(node?.schildren);
  // console.log(activeNode);
  const { activeParent, activeChildren } = activeNode;
  // const { parent, child } = checkedState;
  const [dropdown, setDropdown] = useState(false);
  // const [checked, setChecked] = useState(node.isActive);
  // const [checked, setChecked] = useState(false);
  // console.log(checkRef);
  const [a, setA] = useState(false);

  useEffect(() => {
    if (node.isActive && depthlevel === 0) {
      setActive((prev) => ({
        ...prev,
        activeParent: [...prev.activeParent, [node.name, node.id]],
      }));
    }
    // if (node?.children?.isActive) {
    //   setActive((prev) => ({
    //     ...prev,
    //     activeChildren: [...prev.activeChildren, [node.name, node.id]],
    //   }));
    // }
  }, []);

  let children = [];
  const getAllChild = (node) => {
    children.push(node.children);
  };

  const checkBoxParentHandler = (e) => {
    console.log(e.target.checked);
    getAllChild(node);

    let parentIndex = treeNode.findIndex((item) => {
      return item.name === e.target.name;
    });
    // console.log(parentIndex);
    setTreeNode(
      (treeNode[parentIndex].isActive = !treeNode[parentIndex].isActive),
    );
    children.forEach((childs) => {
      childs.map((child, i) => {
        let index = treeNode.findIndex((item) => {
          return item.name === e.target.name;
        });
        const update = [...treeNode];
        // update[index].children[i].isActive = true;
        update[index].children[i].isActive =
          !update[index].children[i].isActive;
        // console.log(update[index].children[i]);
        setTreeNode(update);
        // }
      });
    });
    if (e.target.checked) {
      setActive((prev) => ({
        ...prev,
        activeParent: [...prev.activeParent, [e.target.name, e.target.id]],
      }));
    }
  };

  const checkBoxChildHandler = (e) => {
    if (e.target.checked) {
      setActive((prev) => ({
        ...prev,
        activeChildren: [...prev.activeChildren, [e.target.name, e.target.id]],
      }));
    }
  };

  const xyz = (e) => {
    console.log(e.target.checked);
    // console.log(node.isActive);
    if (e.target.checked) {
      children.map((child) => {
        console.log(child);
        setChecked(e.target.checked);
      });
      setActive((prev) => ({
        ...prev,
        activeParent: [...prev.activeParent, [e.target.name, e.target.id]],
      }));
    }
  };

  const ParentOnclick = (e) => {
    setDropdown((prev) => !prev);
    console.log(dropdown);
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
                  sx={{ width: 300 }}
                  label={node.name}
                  name={node.name}
                  control={
                    <Checkbox
                      id={node.id.toString()}
                      checked={node.isActive}
                      onChange={checkBoxParentHandler}
                    />
                  }
                />
              </div>

              {dropdown && (
                <DropDown
                  treeNode={treeNode}
                  checked={checked}
                  setChecked={setChecked}
                  childnode={node.children}
                  depthlevel={depthlevel}
                  dropdown={dropdown}
                  activeNode={activeNode}
                  setActive={setActive}
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
                  // checked={checked}
                  checked={node.isActive}
                  onChange={checkBoxChildHandler}
                  // onChange={checkBoxParentHandler}
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
