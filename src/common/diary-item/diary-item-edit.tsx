import React, { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import { ItemFrame } from "../item-frame";
import { SingleDiaryItem } from "./diary-item";
import { SelectField } from "../form-fields/select";
import { BodyText } from "../body-text";
import { CheckIcon } from "@chakra-ui/icons";

const titleOptions: string[] = ["water", "food", "exercise", "pain"];

export function DiaryItemEdit({
  title,
  amount,
  unit,
  target,
  id,
  updateItem,
}: SingleDiaryItem & { updateItem: (item: SingleDiaryItem) => void }) {
  const [formState, setFormState] = useState({ title, amount, unit, target });
  //todo: correct type for e
  const handleChange = (e) => {
    debugger;
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // TODO make this not borked
  const handleSelect = (e) => {
    debugger;
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: titleOptions[e.currentTarget.value],
    }));
  };
  const handleNumberChange = (name: string) => (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: e,
    }));
  };
  //form state time
  return (
    <ItemFrame>
      <Flex width={"100%"} flexDirection={"column"}>
        <FormControl isRequired>
          <BodyText>
            <FormLabel>title</FormLabel>
          </BodyText>

          <SelectField
            value={formState.title}
            name="title"
            options={titleOptions}
            onChange={handleSelect}
          ></SelectField>
        </FormControl>

        <Flex>
          <Box pr={4}>
            <FormControl>
              <FormLabel>amount</FormLabel>
              <NumberInput
                name="amount"
                value={formState.amount}
                onChange={handleNumberChange("amount")}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>unit</FormLabel>
              <Input
                name="unit"
                value={formState.unit}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
        </Flex>
        <FormControl>
          <FormLabel>target</FormLabel>
          <NumberInput
            name="target"
            value={formState.target}
            onChange={handleNumberChange("target")}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <IconButton
          aria-label={`save ${id}`}
          onClick={() => updateItem({ ...formState, id })}
          icon={<CheckIcon w={4} h={4} />}
        />
      </Flex>
    </ItemFrame>
  );
}
