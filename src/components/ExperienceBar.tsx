import { Box, HStack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <HStack w="full" alignItems="center">
      <Text as="span" fontSize="1rem">
        0 xp
      </Text>
      <Box
        flex="1"
        h="4px"
        borderRadius="4px"
        bgColor="#dcdde0"
        mx="1.5rem"
        position="relative"
      >
        <Box
          w={percentToNextLevel}
          h="4px"
          borderRadius="4px"
          bgColor="#4cd62b"
        />

        <Text
          position="absolute"
          left={percentToNextLevel}
          top="12px"
          transform="translateX(-50%)"
        >
          {currentExperience} xp
        </Text>
      </Box>
      <span>{experienceToNextLevel} xp</span>
    </HStack>
  );
}
