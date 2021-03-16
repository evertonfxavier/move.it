import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <HStack alignItems="center">
      <Image
        src="https://github.com/evertonfxavier.png"
        alt="Everton"
        w="5.5rem"
        h="5.5rem"
        borderRadius="50%"
      />
      <Box ml="1.5rem">
        <Text as="strong" fontSize="1.5rem" fontWeight="600" color="#2e384d">
          Everton Xavier
        </Text>
        <Text as="p" fontSize="1rem" mt=".5rem">
          <Image src="icons/level.svg" alt="level" mr=".5rem" />
          Level {level}
        </Text>
      </Box>
    </HStack>
  );
}
