import React from "react";

import { DiaryItemEdit } from "./diary-item-edit";
import { DiaryItemView } from "./diary-item-view";
import { Box, Flex } from "@chakra-ui/react";
import { CircleAddIcon } from "../circle-add-icon";

export interface SingleDiaryItem {
  id: string;
  title: string;
  amount?: number;
  unit?: string;
  target?: number;
  // todo?: boolean
  // date
}

interface UpdateItemFunction {
  updateItem: (item: SingleDiaryItem) => void;
}

export function DiaryItem({
  updateItem,
  ...item
}: SingleDiaryItem & UpdateItemFunction) {
  const [isEditMode, setIsEditMode] = React.useState(true);
  // useState for edit vs read mode
  return (
    <Flex width={"100%"} p={2}>
      {isEditMode ? (
        <DiaryItemEdit {...item} updateItem={updateItem} />
      ) : (
        <DiaryItemView {...item} />
      )}
      <Box ml={2}>
        <CircleAddIcon onClick={() => setIsEditMode((state) => !state)} />
      </Box>
    </Flex>
  );
}
