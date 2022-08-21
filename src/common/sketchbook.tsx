import React, { useState } from "react";
import _ from "lodash";
import { Center, Flex } from "@chakra-ui/react";
import { DiaryItem, SingleDiaryItem } from "./diary-item";
import { CircleAddIcon } from "./circle-add-icon";

export function Sketchbook() {
  const [items, setItems] = useState<SingleDiaryItem[]>([]);
  const addItem = () => {
    setItems([
      {
        title: "New Item",
        amount: 0,
        unit: "",
        target: 0,
      },
      ...items,
    ]);
  };
  return (
    <Flex flexDirection={"column"}>
      <Center>
        <CircleAddIcon dark onClick={addItem} />
      </Center>
      {items.map(({ amount, unit, title, target }) => (
        <DiaryItem amount={amount} unit={unit} title={title} target={target} />
      ))}
    </Flex>
  );
}
