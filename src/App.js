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
      <h4 style={{ marginTop: "100px" }}>TreeView</h4>
      <div className='treeview'>
        <div className='RecursiveTree'>
          <RecursiveTree
            treeNode={treeNode}
            setTreeNode={setTreeNode}
            depthlevel={depthlevel}
          />
        </div>
        {/* <div className='checkbox-tree'>
          <TreeView nodes={items} />
        </div> */}
      </div>
    </div>
  );
}

export default App;
