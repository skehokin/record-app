import React from "react";

import {
  Box,
  Center,
  ChakraProvider,
  extendTheme,
  Flex,
} from "@chakra-ui/react";
import { Sketchbook } from "./common/sketchbook";

// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };
// const theme = extendTheme({ colors });

export default function App() {
  return (
    <ChakraProvider>
      <Center>
        <Sketchbook />
      </Center>
    </ChakraProvider>
  );
}
