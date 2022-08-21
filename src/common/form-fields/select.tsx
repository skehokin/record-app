import React from "react";
import { Select } from "@chakra-ui/react";

export function SelectField({
  options,
  ...props
}: { options: string[] } & React.ComponentProps<typeof Select>) {
  return (
    <Select {...props}>
      {options.map((option, index) => (
        <option key={option} value={index}>
          {option}
        </option>
      ))}
    </Select>
  );
}
