import { HStack, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function CompleteChallenger() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
      // my="3.5rem"
      pb="1rem"
      borderBottom="1px solid #d7d8da"
      fontWeight="500"
    >
      <Text as="span" fontSize="1.25rem">
        Desafios Completos
      </Text>
      <Text as="span">{challengesCompleted}</Text>
    </HStack>
  );
}
