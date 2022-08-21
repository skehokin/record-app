import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { ItemFrame } from "../item-frame";
import { BodyText } from "../body-text";
import { SingleDiaryItem } from "./diary-item";

export function DiaryItemView({
  title,
  amount,
  unit,
  target,
  id,
}: SingleDiaryItem) {
  return (
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
        <BodyText noOfLines={2}>
          {title} {id}
        </BodyText>
      </Flex>
    </ItemFrame>
  );
}
