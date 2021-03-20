import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GoMarkGithub } from "react-icons/go";

export default function Signin() {
  const [username, setUsername] = useState("");

  const { push } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    push(`/${username}`);
  };

  return (
    <VStack w="full" h="100vh">
      <VStack marginY="auto" as="form" w="16rem" textAlign="center" spacing={4}>
        <Heading color="gray.700">LineUp</Heading>
        <Input
          type="name"
          placeholder="Put here your github username"
          border="1px"
          borderColor="gray.500"
          _hover={{ borderColor: "gray.800" }}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          w="full"
          bgColor="gray.700"
          _hover={{ bgColor: "gray.800" }}
          color="white"
          onClick={handleSubmit}
        >
          <Icon as={GoMarkGithub} mr=".8rem" />
          Entrar
        </Button>
      </VStack>
    </VStack>
  );
}
