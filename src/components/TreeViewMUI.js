import React from "react";

import TreeView from "@mui/lab/TreeView";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Box } from "@mui/material";

const data1 = [
  //   {
  //     id: 0,
  //     name: "Applications :",
  //     isActive: false,
  //     children: [
  //       { id: 1, name: "Calendar : app", isActive: false },
  //       { id: 2, name: "Chrome : app", isActive: false },
  //       { id: 3, name: "Webstorm : app", isActive: false },
  //       { id: 4, name: "Webstorm : app", isActive: false },
  //     ],
  //   },
  //   // {
  //   //   id: 5,
  //   //   name: "Documents :",
  //   //   isActive: false,
  //   //   children: [
  //   //     {
  //   //       id: 6,
  //   //       name: "vuetify :",
  //   //       isActive: false,
  //   //       children: [
  //   //         {
  //   //           id: 7,
  //   //           name: "src :",
  //   //           children: [
  //   //             { id: 8, name: "index : ts" },
  //   //             { id: 9, name: "bootstrap : ts" },
  //   //           ],
  //   //         },
  //   //       ],
  //   //     },
  //   //     {
  //   //       id: 10,
  //   //       name: "material2 :",
  //   //       isActive: false,
  //   //       children: [
  //   //         {
  //   //           id: 11,
  //   //           name: "src :",
  //   //           children: [
  //   //             { id: 12, name: "v-btn : ts" },
  //   //             { id: 13, name: "v-card : ts" },
  //   //             { id: 14, name: "v-window : ts" },
  //   //           ],
  //   //         },
  //   //       ],
  //   //     },
  //   //   ],
  //   // },
  //   // {
  //   //   id: 15,
  //   //   name: "Downloads :",
  //   //   isActive: false,
  //   //   children: [
  //   //     { id: 16, name: "October : pdf" },
  //   //     { id: 17, name: "November : pdf" },
  //   //     { id: 18, name: "Tutorial : html" },
  //   //   ],
  //   // },
  {
    id: "19",
    name: "Videos :",
    isActive: false,
    children: [
      {
        id: 20,
        name: "Tutorials :",
        isActive: false,
        children: [
          { id: 21, name: "Basic layouts : mp4", isActive: false },
          { id: 22, name: "Advanced techniques : mp4", isActive: false },
          { id: 23, name: "All about app : dir", isActive: false },
        ],
      },
      { id: 24, name: "Intro : mov", isActive: false },
      { id: 25, name: "Conference introduction : avi", isActive: false },
    ],
  },
];

const data = {
  id: "root",
  name: "Parent",
  children: [
    {
      id: "1",
      name: "Child - 1",
    },
    {
      id: "3",
      name: "Child - 3",
      children: [
        {
          id: "4",
          name: "Child - 4",
        },
      ],
    },
    {
      id: "12",
      name: "Child - 1",
    },
    {
      id: "122",
      name: "Child - 1",
    },
  ],
};
const TreeViewMUI = () => {
  const renderTree = (nodes) => {
    return (
      // <TreeItem key={nodes[0].id} nodeId={nodes[0].id} label={nodes[0].name}>
      <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
        {Array.isArray(nodes.children)
          ? // ? console.log(nodes[0].children)
            nodes.children.map((node) => {
              return renderTree(node);
              console.log(node);
            })
          : null}
      </TreeItem>
    );
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        <TreeView
          aria-label='rich object'
          defaultExpanded={["root"]}
          sx={{ height: 1100, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}>
          {renderTree(data)}
        </TreeView>
      </Box>
    </div>
  );
};

export default TreeViewMUI;
