import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Progress,
  Text,
} from "@chakra-ui/react";
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

      <CircularProgress
        size="150px"
        value={percentToNextLevel}
        color="blue.400"
      >
        <CircularProgressLabel fontSize="1.2rem">
          {currentExperience}XP
        </CircularProgressLabel>
        {/* <CircularProgressLabel fontSize="1.2rem">
          <Image
            src="https://github.com/evertonfxavier.png"
            alt="Everton"
            w="4.5rem"
            // h="5.5rem"
            borderRadius="50%"
          />
        </CircularProgressLabel> */}
      </CircularProgress>

      {/* <Text
        position="absolute"
        left={percentToNextLevel}
        top="12px"
        transform="translateX(-50%)"
      >
        {currentExperience} xp
      </Text> */}

      {/* <span>{experienceToNextLevel} xxp</span> */}
    </HStack>
  );
}
