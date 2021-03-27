import React from "react";
import { useRouter } from "next/router";
import { Icon, Image, VStack } from "@chakra-ui/react";
import { IoIosLogIn } from "react-icons/io";
import Home from "../../icons/home";
import Ranking from "../../icons/ranking";

export default function Sidebar() {
  const { push } = useRouter();

  return (
    <VStack
      bgColor="gray.300"
      h={["4rem", "4rem", "100vh", "100vh"]}
      w={["full", "full", "4rem", "4rem"]}
      boxShadow="2px 2px 4px 4px rgba(0, 0, 0, 0.05)"
      justifyContent={["space-between"]}
      py={["0", "0", "1.25rem", "1.25rem"]}
      px="1.25rem"
      flexDirection={["row", "row", "column", "column"]}
    >
      <Image
        src="favicon.png"
        alt="Logo"
        w="2.2rem"
        // display={["none", "none", "block", "block"]}
      />

      <VStack
        w={["full", "full", "4rem", "4rem"]}
        h="full"
        flexDirection={["row", "row", "column", "column"]}
        justifyContent={["space-evenly"]}
      >
        <Icon as={Home} w="24px" h="24px" />
        <Icon as={Ranking} w="24px" h="24px" />
      </VStack>
      <IoIosLogIn
        size="1.6rem"
        style={{ transform: "rotateY(180deg)" }}
        onClick={() => push("/")}
        cursor="pointer"
      />
    </VStack>
  );
}
