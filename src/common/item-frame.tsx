import React from "react";
import { Flex } from "@chakra-ui/react";

export function ItemFrame({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      width={"500px"}
      borderRadius={"10px"}
      background={"blue.200"}
      pl={4}
      pr={4}
      pt={2}
      pb={2}
      justify={"space-between"}
      align={"center"}
      flexFlow={"row-reverse wrap"}
    >
      {children}
    </Flex>
  );
}
