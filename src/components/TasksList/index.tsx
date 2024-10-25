import { tasksList } from "../../App";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import SelectStatuses from "../SelectStatuses";

const TasksList = () => {
  const taskRowStyle =
    "flex justify-center flex-1 border-r last:border-r-0 px-[1rem] text-[1.8rem]";

  return (
    <>
      {tasksList.map((task) => {
        return (
          <div className="flex border p-[1rem]">
            <div className={`${taskRowStyle} !justify-start`}> {task.name}</div>
            <div className={`${taskRowStyle}`}>{task.createdAt}</div>
            <div className={`${taskRowStyle}`}>
              <SelectStatuses defaultValue={task.status} />
            </div>
            <div className={`${taskRowStyle}`}>{task.dueDate}</div>
            <div className={`${taskRowStyle} `}>{task.priority}</div>
            <div className={`${taskRowStyle} gap-[1.5rem]`}>
              <img src={editIcon} className="w-[2.5rem] cursor-pointer" />
              <img src={deleteIcon} className="w-[2.5rem] cursor-pointer" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TasksList;
