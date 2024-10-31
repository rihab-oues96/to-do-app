import { message } from "antd";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import { useDeleteTodoMutation, useEditTodoMutation } from "../../services/api";
import SelectPriority from "../SelectPriority";
import SelectStatuses from "../SelectStatuses";
import CreateEditTaskModal from "../CreateEditTaskModal";
import { useState } from "react";

const TaskRow = ({ task }: any) => {
  const taskRowStyle =
    "flex justify-center flex-1 border-r last:border-r-0 px-[1rem] text-[1.8rem]";
  const createdAt = new Date(task?.createdAt);

  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);

  const [deleteTodo] = useDeleteTodoMutation();
  const [editTodo] = useEditTodoMutation();

  const handleDeleteTodo = (id: number) => {
    deleteTodo({ id })
      .unwrap()
      .then((res) => message.success(res?.message));
  };

  const handleEditTodo = () => {
    setIsEditTaskModalOpen(true);
  };

  return (
    <div className="flex border p-[1rem] my-[1rem] " key={task?.name}>
      <div className={`${taskRowStyle} !justify-start`}>{task?.name}</div>
      <div className={`${taskRowStyle}`}>
        {createdAt.toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div className={`${taskRowStyle}`}>
        <SelectStatuses
          defaultValue={task?.status}
          onSelect={(value: string) => {
            editTodo({ id: task?.id, todo: { status: value } });
          }}
        />
      </div>
      <div className={`${taskRowStyle}`}>
        <SelectPriority
          defaultValue={task?.priority}
          onSelect={(value: string) => {
            editTodo({ id: task?.id, todo: { priority: value } });
          }}
        />
      </div>
      <div className={`${taskRowStyle} gap-[1.5rem]`}>
        <img
          src={editIcon}
          className="w-[2.5rem] cursor-pointer"
          onClick={handleEditTodo}
        />
        <img
          src={deleteIcon}
          className="w-[2.5rem] cursor-pointer"
          onClick={() => handleDeleteTodo(task?.id)}
        />
      </div>

      <CreateEditTaskModal
        isOpenModal={isEditTaskModalOpen}
        setIsOpenModal={setIsEditTaskModalOpen}
        task={task}
        isEdit
      />
    </div>
  );
};

export default TaskRow;
