import React, { useContext } from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

export default function Level() {
  const { level } = useContext(ChallengesContext);

  return (
    <Box ml="1.5rem">
      <Text as="strong" fontSize="1.5rem" fontWeight="600" color="#2e384d">
        Everton Xavier
      </Text>
      <HStack>
        <Image src="icons/level.svg" alt="level" mr=".5rem" />
        <Text as="p" fontSize="1rem" mt=".5rem">
          Level {level}
        </Text>
      </HStack>
    </Box>
  );
}
