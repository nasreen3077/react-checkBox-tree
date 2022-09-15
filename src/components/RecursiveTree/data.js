export const nodes = [
  {
    id: 0,
    name: "Applications :",
    isActive: false,
    children: [
      { id: 1, name: "Calendar : app", isActive: false },
      { id: 2, name: "Chrome : app", isActive: false },
      { id: 3, name: "firefox : app", isActive: false },
      { id: 4, name: "Webstorm : app", isActive: false },
    ],
  },

  {
    id: 5,
    name: "Documents :",
    isActive: false,
    children: [
      {
        id: 6,
        name: "vuetify :",
        isActive: false,
        children: [
          {
            id: 7,
            name: "src :",
            isActive: false,
            children: [
              { id: 8, name: "index : ts", isActive: false },
              { id: 9, name: "bootstrap : ts", isActive: false },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "material2 :",
    isActive: false,
    children: [
      {
        id: 11,
        name: "src :",
        isActive: false,
        children: [
          { id: 12, name: "v-btn : ts", isActive: false },
          { id: 13, name: "v-card : ts", isActive: false },
          { id: 14, name: "v-window : ts", isActive: false },
        ],
      },
    ],
  },
  //   ],
  // },
  // {
  //   id: 15,
  //   name: "Downloads :",
  //   isActive: false,
  //   children: [
  //     { id: 16, name: "October : pdf" },
  //     { id: 17, name: "November : pdf" },
  //     { id: 18, name: "Tutorial : html" },
  //   ],
  // },
  //   {
  //     id: 19,
  //     name: "Videos :",
  //     isActive: false,
  //     children: [
  //       {
  //         id: 20,
  //         name: "Tutorials :",
  //         isActive: false,
  //         children: [
  //           { id: 21, name: "Basic layouts : mp4", isActive: false },
  //           { id: 22, name: "Advanced techniques : mp4", isActive: false },
  //           { id: 23, name: "All about app : dir", isActive: false },
  //         ],
  //       },
  //       { id: 24, name: "Intro : mov", isActive: false },
  //       { id: 25, name: "Conference introduction : avi", isActive: false },
  //     ],
  //   },
];
