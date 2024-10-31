import { Button, Input, message, Modal } from "antd";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useAddTodoMutation, useEditTodoMutation } from "../../services/api";
import SelectPriority from "../SelectPriority";
import SelectStatuses from "../SelectStatuses";

type props = {
  isOpenModal: boolean;
  setIsOpenModal: Function;
  isEdit?: boolean;
  task?: any;
};

const CreateEditTaskModal = ({
  isOpenModal,
  setIsOpenModal,
  task,
  isEdit,
}: props) => {
  const [addTodo] = useAddTodoMutation();
  const [editTodo] = useEditTodoMutation();

  const methods = useForm({
    defaultValues: {
      name: task?.name || "",
      status: task?.status || "",
      priority: task?.priority || null,
    },
    // resolver: zodResolver(schema),
  });

  const { control, handleSubmit, getFieldState } = methods;

  const onSubmit = (data: any) => {
    try {
      let newTodo: any = {};
      if (getFieldState("name").isDirty) newTodo.name = data.name;
      if (getFieldState("status").isDirty) newTodo.status = data.status;
      if (getFieldState("priority").isDirty) newTodo.priority = data.priority;

      if (isEdit) {
        editTodo({ id: task?.id, todo: newTodo })
          .unwrap()
          .then(() => {
            message.success("Task Updated Successfully!");
            setIsOpenModal(false);
          });
      } else {
        addTodo({
          name: data.name,
          status: data.status,
          priority: data.priority,
        })
          .unwrap()
          .then(() => {
            message.success("Task Created Successfully!");
            setIsOpenModal(false);
          });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const footer = [
    <Button onClick={() => setIsOpenModal(false)}>Cancel</Button>,
    <Button key="submit" type="primary" onClick={handleSubmit(onSubmit)}>
      {isEdit ? "Edit Task" : "Create New Task"}
    </Button>,
  ];

  return (
    <Modal
      title={
        <h1 className="text-[2.25rem]">
          {isEdit ? "Edit Task" : "Create New Task"}
        </h1>
      }
      open={isOpenModal}
      onCancel={() => setIsOpenModal(false)}
      footer={footer}
    >
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[2rem] mt-[2rem]"
        >
          <div className="flex flex-col gap-[1rem]">
            <label htmlFor="">Name :</label>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field }) => {
                return <Input placeholder="Enter Task Name" {...field} />;
              }}
            />
          </div>

          <div className="flex flex-col gap-[1rem]">
            <label htmlFor="">Status :</label>
            <SelectStatuses
              defaultValue="Open"
              name="status"
              control={control}
            />
          </div>

          <div className="flex flex-col gap-[1rem]">
            <label htmlFor="">Priority :</label>
            <SelectPriority
              defaultValue="None"
              name="priority"
              control={control}
            />
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default CreateEditTaskModal;
