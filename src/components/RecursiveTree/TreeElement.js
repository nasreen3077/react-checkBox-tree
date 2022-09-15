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
  setActive = (f) => f,
}) => {
  const [dropdown, setDropdown] = useState(false);

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
    // console.log(e.target.checked);
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
        update[index].children[i].isActive =
          !update[index].children[i].isActive;
        setTreeNode(update);
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

              {!dropdown && (
                <DropDown
                  treeNode={treeNode}
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
                  checked={node.isActive}
                  onChange={checkBoxChildHandler}
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
