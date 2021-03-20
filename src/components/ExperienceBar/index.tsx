import {
  CircularProgress,
  CircularProgressLabel,
  HStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

export function ExperienceBar({ children }) {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <HStack w="full" alignItems="center">
      <CircularProgress
        size="full"
        thickness=".32rem"
        value={percentToNextLevel}
        color="#5965e0"
      >
        <CircularProgressLabel>
          {/* {currentExperience}XP */}
          {children}
        </CircularProgressLabel>
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
