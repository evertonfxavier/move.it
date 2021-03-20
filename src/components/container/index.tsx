import { VStack } from "@chakra-ui/react";
import React from "react";

interface ContainerProps {
  w: string; 
}

const Container: React.FC<ContainerProps> = ({ children, w }) => {
  return (
    <VStack
      alignContent="center"
      borderWidth="1px"
      borderRadius=".8rem"
      w={w}
      h="calc(100vh - 2rem)"
      p=".8rem"
    >
      {children}
    </VStack>
  );
};

export default Container;
