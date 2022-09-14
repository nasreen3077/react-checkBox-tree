import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

const TreeView = ({ nodes }) => {
  // console.log(nodes);

  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const onCheck = (checked) => {
    console.log(checked);
    setChecked(checked);
  };

  const onExpand = (expanded) => {
    setExpanded(expanded);
  };

  const xyz = () => {
    console.log(<CheckboxTree />);
  };
  return (
    <div>
      <CheckboxTree
        // disabled={true}
        // checkModel='leaf'
        checkModel='all'
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        iconsClass='fa5'
        onCheck={onCheck}
        onExpand={onExpand}
      />

      {/* <button onClick={xyz}>xyz</button> */}
    </div>
  );
};

export default TreeView;
