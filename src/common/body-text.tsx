import React from "react";
import { Text } from "@chakra-ui/react";

type TextProps = React.ComponentProps<typeof Text>;

export function BodyText({
  children,
  dark,
  ...props
}: {
  children: React.ReactNode;
  dark?: boolean;
} & TextProps) {
  return (
    <Text
      fontSize="lg"
      as="span"
      color={dark ? "blue.400" : "white"}
      {...props}
    >
      {children}
    </Text>
  );
}
