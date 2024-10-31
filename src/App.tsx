import { useState } from "react";
import "./App.css";
import AddNewTask from "./components/AddNewTask";
import StatusesCards from "./components/StatusesCards";
import TasksList from "./components/TasksList";
import TasksTableHead from "./components/TasksTableHead";
import { getTodosParams, useGetAllTodosQuery } from "./services/api";

function App() {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const params: getTodosParams = { page, limit: 15 };
  if (status) params.status = status;
  const { data } = useGetAllTodosQuery(params);
  const lastPage = Math.round(data?.total! / data?.limit!);
  console.log({ data });

  const loadMore = () => {
    if (page < lastPage) setPage((prev) => prev + 1);
    // if (data?.todos.length! < data?.total!) {
    //   setPage((prev) => prev + 1);
    // }
  };

  return (
    <main className="flex flex-col items-center gap-[4rem] p-[2rem]">
      <StatusesCards
        setStatus={setStatus}
        status={status}
        data={data?.statusCount}
        total={data?.total}
      />
      <AddNewTask />
      <div className="flex flex-col gap-[1rem] w-[85vw] ">
        <TasksTableHead />
        <TasksList todosList={data?.todos} loadMore={loadMore} />
      </div>
    </main>
  );
}

export default App;
