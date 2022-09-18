import { useState } from "react";
import "./App.css";
import RecursiveTree from "./components/RecursiveTree/RecursiveTree";
import { nodes } from "./components/RecursiveTree/data";
import TreeView from "./components/checkBoxTree/TreeView";
import { items } from "./components/checkBoxTree/checkBoxTreeData";

function App() {
  const [treeNode, setTreeNode] = useState(nodes);
  const depthlevel = 0;
  return (
    <div className='App'>
      <h4 style={{ marginTop: "10px" }}>TreeView</h4>
      <div className='treeview'>
        <div className='RecursiveTree'>
          <h4>RecursiveTree</h4>
          <RecursiveTree
            treeNode={treeNode}
            setTreeNode={setTreeNode}
            depthlevel={depthlevel}
          />
        </div>
        <div className='checkbox-tree'>
          <h4 style={{ marginTop: "10px" }}>Checkbox Tree</h4>
          <TreeView nodes={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
