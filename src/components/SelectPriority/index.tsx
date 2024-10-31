import { Select } from "antd";
import { priorities } from "../../constants";
import { Controller } from "react-hook-form";

const SelectPriority = ({
  defaultValue,
  name,
  control,
  onSelect,
}: {
  defaultValue: string;
  name?: string;
  control?: any;
  onSelect?: any;
}) => {
  if (control)
    return (
      <Controller
        name={name || ""}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Select
            {...field}
            style={{ width: "100%" }}
            defaultValue={defaultValue}
            options={priorities.map((priority) => {
              return { label: priority.label, value: priority.value };
            })}
          />
        )}
      />
    );

  return (
    <Select
      style={{ width: "100%" }}
      defaultValue={defaultValue}
      options={priorities.map((priority) => {
        return { label: priority.label, value: priority.value };
      })}
      onChange={(value) => onSelect(value)}
    />
  );
};

export default SelectPriority;
