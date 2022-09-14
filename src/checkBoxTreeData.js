export const items = [
  {
    id: 1,
    value: "AAAA",
    label: "AAAA",
    isActive: false,
    children: [
      { value: "ab1", label: "ab1", isActive: false },
      { value: "ab2", label: "ab2", isActive: false },
      {
        value: "ab",
        label: "ab",
        isActive: false,
        children: [
          { value: "adc", label: "abc" },
          { value: "abc", label: "abc" },
        ],
      },
    ],
  },
  {
    value: "sol",
    label: "Sol System",
    isActive: false,
    children: [
      { value: "mercury", label: "Mercury", isActive: false },
      {
        value: "jupiter",
        label: "Jupiter",
        isActive: false,
        children: [
          { value: "io", label: "Io", isActive: false },
          { value: "europa", label: "Europa", isActive: false },
        ],
      },
    ],
  },
];
