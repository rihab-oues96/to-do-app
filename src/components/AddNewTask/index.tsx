import { Button } from "antd";
import { useState } from "react";
import CreateEditTaskModal from "../CreateEditTaskModal";

const AddNewTask = () => {
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        size="large"
        onClick={() => setIsCreateTaskModalOpen(true)}
      >
        Add New Task
      </Button>

      <CreateEditTaskModal
        isOpenModal={isCreateTaskModalOpen}
        setIsOpenModal={setIsCreateTaskModalOpen}
      />
    </>
  );
};

export default AddNewTask;
