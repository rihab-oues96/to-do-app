import { Select } from "antd";
import { priorities } from "../../App";

const SelectPriority = () => {
  return (
    <Select
      defaultValue="None"
      options={priorities.map((priority) => {
        return { label: priority.label, value: priority.label };
      })}
    />
  );
};

export default SelectPriority;
