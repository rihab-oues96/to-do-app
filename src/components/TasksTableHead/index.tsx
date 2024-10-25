import { TableHead } from "../../App";

const TasksTableHead = () => {
  return (
    <div className="flex border p-[1rem] bg-[#f2f7fa]">
      {TableHead.map((item) => {
        return (
          <div
            key={item.label}
            className="flex-1 px-[1rem]
            border-r last:border-r-0 
            text-[1.8rem] text-center"
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default TasksTableHead;
