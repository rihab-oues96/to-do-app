import { Button, DatePicker, Input, Modal } from "antd";
import { useState } from "react";
import SelectPriority from "../SelectPriority";
import SelectStatuses from "../SelectStatuses";

const AddNewTask = () => {
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  const footer = [
    <Button onClick={() => setIsCreateTaskModalOpen(false)}>Cancel</Button>,
    <Button key="submit" type="primary" onClick={() => {}}>
      Create New Task
    </Button>,
  ];

  return (
    <>
      <Button
        type="primary"
        size="large"
        onClick={() => setIsCreateTaskModalOpen(true)}
      >
        Add New Task
      </Button>

      <Modal
        title={<h1 className="text-[2.25rem]">Create New Task</h1>}
        open={isCreateTaskModalOpen}
        onCancel={() => setIsCreateTaskModalOpen(false)}
        footer={footer}
      >
        <form className="flex flex-col gap-[2rem] mt-[2rem]">
          <div className="flex flex-col gap-[1rem]">
            <label htmlFor="">Task Name :</label>
            <Input placeholder="Enter Task Name" />
          </div>

          <div className="flex flex-col gap-[1rem]">
            <label htmlFor="">Task Status :</label>
            <SelectStatuses defaultValue="To Do" />
          </div>

          <div className="flex flex-col gap-[1rem]">
            <label htmlFor="">Due Date :</label>
            <DatePicker onChange={() => {}} />
          </div>

          <div className="flex flex-col gap-[1rem]">
            <label htmlFor="">Priority :</label>
            <SelectPriority />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddNewTask;
