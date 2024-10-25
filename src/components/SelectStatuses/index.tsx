import { Select } from "antd";
import { statuses } from "../../App";

const SelectStatuses = ({ defaultValue }: { defaultValue: string }) => {
  const options = statuses
    .filter((status) => status.name !== "All")
    .map((status) => {
      return { label: status.name, value: status.name };
    });

  const optionRender = (oriOption: any) => {
    return (
      <div className="flex items-center justify-between">
        <span className="">{oriOption.label}</span>
        <div className="w-[1rem] h-[1rem] bg-black rounded-full "></div>
      </div>
    );
  };

  return (
    <Select
      defaultValue={defaultValue}
      style={{ width: "100%" }}
      onChange={() => {}}
      suffixIcon={
        <div className="w-[1rem] h-[1rem] bg-black rounded-full "></div>
      }
      options={options}
      optionRender={optionRender}
    />
  );
};

export default SelectStatuses;
