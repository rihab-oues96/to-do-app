import { statuses } from "../../constants";

const StatusesCards = ({ data, total, setStatus, status }: any) => {
  const { open, inprogress, completed, archived, cancelled } = data || {};

  const renderCount = (name: string) => {
    switch (name) {
      case "All":
        return total || 0;
      case "Open":
        return open || 0;
      case "Inprogress":
        return inprogress || 0;
      case "Completed":
        return completed || 0;
      case "Archived":
        return archived || 0;
      case "Cancelled":
        return cancelled || 0;
    }
  };

  return (
    <div className="flex justify-center gap-[2.5rem]">
      {statuses.map((stat) => {
        return (
          <div
            key={stat.name}
            className={`w-[18rem] border rounded-[1rem]
            flex justify-center gap-[1rem] py-[1.5rem] cursor-pointer 
            text-[2.2rem] 
            ${status === stat.name && "border-2 font-medium "}`}
            style={{
              color: stat.color,
              background: `${stat.color}30`,
              borderColor: stat.color,
            }}
            onClick={() =>
              stat.name === "All" ? setStatus("") : setStatus(stat.name)
            }
          >
            <span> {stat.name}</span>
            <span>({renderCount(stat.name)})</span>
          </div>
        );
      })}
    </div>
  );
};

export default StatusesCards;
