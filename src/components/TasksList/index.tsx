import TaskRow from "../TaskRow";
import { Virtuoso } from "react-virtuoso";
import noTodosImage from "../../assets/images/notodos.jpg";

const TasksList = ({ todosList, loadMore }: any) => {
  if (todosList?.length == 0)
    return (
      <div
        className="w-full h-[50vh] 
        flex flex-col items-center justify-center"
      >
        <img src={noTodosImage} className="w-[50rem] object-cover" />
        <h2 className="text-[2rem]"> There Is No Todos Yet...</h2>
      </div>
    );

  return (
    <Virtuoso
      style={{ height: "500px" }}
      data={todosList}
      totalCount={todosList?.length}
      endReached={loadMore}
      itemContent={(_, task) => <TaskRow task={task} />}
    />
  );
};

export default TasksList;
