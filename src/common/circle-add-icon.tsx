import React from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

type ButtonProps = Omit<IconButtonProps, "aria-label">;

export function CircleAddIcon({
  dark,
  ...props
}: { dark?: boolean } & ButtonProps) {
  return (
    <IconButton
      color={"blue.100"}
      background={dark ? "blue.600" : "blue.50"}
      borderRadius={"50%"}
      aria-label={"Add Entry"}
      icon={<AddIcon w={4} h={4} />}
      {...props}
    />
  );
}
