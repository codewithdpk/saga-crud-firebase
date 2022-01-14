import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";

export const Wrapper = ({ children }) => {
  return (
    <ChakraProvider>
      <Container maxW="container.sm" centerContent paddingTop={"100px"}>
        {children}
      </Container>
    </ChakraProvider>
  );
};
