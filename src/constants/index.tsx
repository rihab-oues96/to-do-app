export const statuses = [
  { name: "All", color: "#0da5e9" },
  { name: "Open", color: "#c5c5c5" },
  { name: "Inprogress", color: "#e9950d" },
  { name: "Completed", color: "#3ed454" },
  { name: "Archived", color: "#ca40ea" },
  { name: "Cancelled", color: "#ec588f" },
];
export const priorities = [
  { label: "None", value: 0 },
  { label: "Low", value: 1 },
  { label: "Normal", value: 2 },
  { label: "Hight", value: 3 },
  { label: "Urgent", value: 4 },
];
export const TableHead = [
  { label: "Task Name" },
  { label: "Created At" },
  { label: "Status" },
  { label: "Priority" },
  { label: "Actions" },
];
export const tasksList = [
  {
    name: "my first task",
    createdAt: new Date().toDateString(),
    status: "To Do",
    dueDate: new Date().toDateString(),
    priority: "Hight",
    actions: "h",
  },
  {
    name: "my first task my first task my first task",
    createdAt: new Date().toDateString(),
    status: "In Progress",
    dueDate: new Date().toDateString(),
    priority: "Normal",
    actions: "j",
  },
];
