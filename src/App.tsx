import "./App.css";
import AddNewTask from "./components/AddNewTask";
import StatusesCards from "./components/StatusesCards";
import TasksList from "./components/TasksList";
import TasksTableHead from "./components/TasksTableHead";

export const statuses = [
  { name: "All", color: "#0da5e9" },
  { name: "To Do", color: "#c5c5c5" },
  { name: "In Progress", color: "#e9950d" },
  { name: "Completed", color: "#3ed454" },
];
export const priorities = [
  { label: "None" },
  { label: "Urgent" },
  { label: "Hight" },
  { label: "Normal" },
  { label: "Low" },
];
export const TableHead = [
  { label: "Task Name" },
  { label: "Created At" },
  { label: "Status" },
  { label: "Due Date" },
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

function App() {
  return (
    <main className="flex flex-col items-center gap-[4rem] p-[2rem]">
      <StatusesCards />
      <AddNewTask />
      <div className="flex flex-col gap-[1rem] w-[85vw] ">
        <TasksTableHead />
        <TasksList />
      </div>
    </main>
  );
}

export default App;
