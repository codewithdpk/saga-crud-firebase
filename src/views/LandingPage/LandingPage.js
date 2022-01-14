import { Box, HStack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import React from "react";

export const LandingPage = () => {
  return (
    <VStack spacing={10}>
      <Box textAlign={"center"}>
        <Text fontSize="4xl" fontWeight={"bold"}>
          Manage Records
        </Text>
      </Box>
      <HStack spacing={10}>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          padding={"20px"}
          cursor={"pointer"}
        >
          <HStack alignContent={"center"} spacing={3}>
            <AddIcon />
            <Text>New Record</Text>
          </HStack>
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
          padding={"20px"}
          cursor={"pointer"}
        >
          <HStack alignContent={"center"} spacing={3}>
            <AddIcon />
            <Text>View All</Text>
          </HStack>
        </Box>
      </HStack>
    </VStack>
  );
};
