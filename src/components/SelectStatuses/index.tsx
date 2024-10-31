import { Select } from "antd";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { statuses } from "../../constants";

const SelectStatuses = ({
  defaultValue,
  control,
  name,
  onSelect,
}: {
  defaultValue: string;
  control?: any;
  name?: string;
  onSelect?: any;
}) => {
  let [selectedValue, setSelectedValue] = useState(defaultValue);
  const renderColor = (label: string) => {
    const itemColor = statuses.filter((status) => status?.name === label);
    return (
      <div
        style={{
          backgroundColor: itemColor[0]?.color,
        }}
        className="w-[1rem] h-[1rem] rounded-full "
      ></div>
    );
  };

  const options = statuses
    .filter((status) => status.name !== "All")
    .map((status) => {
      return { label: status.name, value: status.name };
    });

  const optionRender = (oriOption: any) => {
    return (
      <div className="flex items-center justify-between">
        <span className="">{oriOption.label}</span>
        {renderColor(oriOption.label)}
      </div>
    );
  };

  if (control)
    return (
      <Controller
        name={name || ""}
        control={control}
        rules={{ required: true }}
        render={({ field }) => {
          setSelectedValue(field.value);
          return (
            <Select
              {...field}
              defaultValue={defaultValue}
              style={{ width: "100%" }}
              suffixIcon={renderColor(selectedValue)}
              options={options}
              optionRender={optionRender}
            />
          );
        }}
      />
    );

  return (
    <Select
      defaultValue={defaultValue}
      style={{ width: "100%" }}
      suffixIcon={renderColor(selectedValue)}
      onChange={(value) => {
        onSelect(value);
        setSelectedValue(value);
      }}
      options={options}
      optionRender={optionRender}
    />
  );
};

export default SelectStatuses;
