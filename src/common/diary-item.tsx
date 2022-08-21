import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { ItemFrame } from "./item-frame";
import { CircleAddIcon } from "./circle-add-icon";
import { BodyText } from "./body-text";

export interface SingleDiaryItem {
  title: string;
  amount?: number;
  unit?: string;
  target?: number;
  // todo?: boolean
  // date
}

export function DiaryItem({ title, amount, unit, target }: SingleDiaryItem) {
  // useState for edit vs read mode
  return (
    <Flex width={"100%"} p={2} dir={"row-reverse"}>
      <ItemFrame>
        <Flex align={"center"} justifySelf={"flex-end"}>
          {amount ? (
            <BodyText>
              {amount} {unit}
            </BodyText>
          ) : null}
          {target ? (
            <>
              <BodyText dark fontSize="sm" ml={4}>
                target:
              </BodyText>
              <BodyText dark ml={1}>
                {target} {unit}
              </BodyText>
            </>
          ) : null}
        </Flex>
        <Flex>
          <BodyText noOfLines={2}>{title} </BodyText>
        </Flex>
      </ItemFrame>
      <Box ml={2}>
        <CircleAddIcon />
      </Box>
    </Flex>
  );
}
