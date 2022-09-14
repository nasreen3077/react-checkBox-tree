import React, { useEffect, useRef, useState } from "react";
import TreeItem from "@mui/lab/TreeItem";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import DropDown from "./DropDown";
import arrowRight from "../../assets/ArrowRight2.svg";
import { Icon } from "@mui/material";
//child
const TreeElement = ({
  node,
  treeNode,
  setTreeNode,
  depthlevel,
  activeNode = [],
  setActive = (f) => f,
  checked = {},
  setChecked = (f) => f,
}) => {
  // console.log(treeNode[0].children);
  // console.log(node.children);

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
  //  const select = (items) => {
  //    console.log(items);
  //    const n = [...treeNode];
  //    let index = treeNode.findIndex((node) => {
  //      return node.name === items.name;
  //    });
  //    console.log(index);
  //    n[index].isActive = !n[index].isActive;
  //    setTreeNode(n);

  //    if (items.children) {
  //      let inx = treeNode.findIndex((node) => {
  //        return node.children.name === items.children.name;
  //      });
  //      console.log(inx);
  //      n[inx].isActive = !n[inx].isActive;
  //      setTreeNode(n);
  //    }
  //  };
  const checkBoxParentHandler = (e) => {
    getAllChild(node);

    let parentIndex = treeNode.findIndex((item) => {
      return item.name === e.target.name;
    });
    // console.log(parentIndex);
    setTreeNode(
      (treeNode[parentIndex].isActive = !treeNode[parentIndex].isActive),
    );
    children.forEach((childs) => {
      console.log(childs);
      if (childs.children) {
        childs.map((child, i) => {
          let index = treeNode.findIndex((item) => {
            return item.name === e.target.name;
          });
          const update = [...treeNode];
          update[index].children[i].isActive =
            !update[index].children[i].isActive;
          setTreeNode(update);
        });
      }
    });

    if (e.target.checked) {
      setActive((prev) => ({
        ...prev,
        activeParent: [...prev.activeParent, [e.target.name, e.target.id]],
      }));
    }
  };

  const checkBoxChildHandler = (e) => {
    // console.log(e.target.id);
    treeNode.forEach((node, i) => {
      let index = node.children.findIndex((child) => {
        return child.name === e.target.name;
      });
      const B = [...treeNode];
      B[i].children[index].isActive = !B[i].children[index].isActive;
      console.log(B[i].children[index]);

      // setTreeNode(B);
      return;
      console.log(index);
    });
    // B[A[0]]
    if (e.target.checked) {
      setActive((prev) => ({
        ...prev,
        activeChildren: [...prev.activeChildren, [e.target.name, e.target.id]],
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
          <Box sx={{ display: "flex", flexDirection: "column", ml: 8 }}>
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
