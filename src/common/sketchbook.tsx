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
        id: _.uniqueId(),
        title: "New Item",
        amount: 0,
        unit: "",
        target: 0,
      },
      ...items,
    ]);
  };
  const updateItem = (id: string) => (item: SingleDiaryItem) => {
    setItems((items) => items.map((i) => (i.id === id ? item : i)));
  };

  return (
    <Flex flexDirection={"column"}>
      <Center>
        <CircleAddIcon dark onClick={addItem} />
      </Center>
      {items.map((item) => (
        <DiaryItem {...item} key={item.id} updateItem={updateItem(item.id)} />
      ))}
    </Flex>
  );
}
