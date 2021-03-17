import React from "react";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { IoIosLogIn } from "react-icons/io";
import Home from "../../icons/home";
import Ranking from "../../icons/ranking";

export default function Sidebar() {
  return (
    <VStack
      bgColor="gray.300"
      h="100vh"
      w="4rem"
      boxShadow="2px 2px 4px 4px rgba(0, 0, 0, 0.05)"
      justifyContent="space-between"
      py="1.25rem"
    >
      <Image src="favicon.png" alt="Logo" w="2.2rem" />

      <VStack>
        <Home />
        <Ranking />
      </VStack>
      <IoIosLogIn size="1.6rem" style={{ transform: "rotateY(180deg)" }} />
    </VStack>
  );
}
