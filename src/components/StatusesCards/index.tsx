import { statuses } from "../../App";

const StatusesCards = () => {
  return (
    <div className="flex justify-center gap-[2rem]">
      {statuses.map((status) => {
        return (
          <div
            key={status.name}
            className="w-[18rem] border py-[1.5rem] rounded-[1rem] cursor-pointer text-center text-[2rem] "
            style={{
              color: status.color,
              background: `${status.color}30`,
              borderColor: status.color,
            }}
          >
            {status.name}
          </div>
        );
      })}
    </div>
  );
};

export default StatusesCards;
