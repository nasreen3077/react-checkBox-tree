import { useState } from "react";
import "./App.css";

import RecursiveTree from "./components/RecursiveTree/RecursiveTree";
// import Test from "./components/RecursiveTree/Test";
import TreeElement from "./components/RecursiveTree/TreeElement";
import TreeView from "./components/TreeView";
import TreeViewMUI from "./components/TreeViewMUI";
import { nodes } from "./data";
import { items } from "./checkBoxTreeData";
function App() {
  const [treeNode, setTreeNode] = useState(nodes);
  const depthlevel = 0;
  return (
    <div className='App'>
      <h4 style={{ marginTop: "0px" }}>TreeView</h4>

      <div className='treeview'>
        <div className='RecursiveTree'>
          <RecursiveTree
            treeNode={treeNode}
            setTreeNode={setTreeNode}
            depthlevel={depthlevel}
          />
        </div>
        <div className='checkbox-tree'>
          <TreeView nodes={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
