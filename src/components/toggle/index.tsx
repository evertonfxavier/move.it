import { Button, HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Toggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      w="full"
      // h="10rem"
      borderWidth="1px"
      borderRadius=".8rem"
      p=".8rem"
      mb="auto"
      justifyContent="flex-end"
    >
      <Button w="10" h="10" onClick={() => toggleColorMode()}>
        <Icon
          as={colorMode === "dark" ? SunIcon : MoonIcon}
          color={colorMode === "dark" ? "yellow.300" : "gray.500"}
          size="md"
        />
      </Button>
    </HStack>
  );
}
