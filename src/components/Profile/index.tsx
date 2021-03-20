import { useContext } from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <HStack alignItems="center" justifyContent="center">
      <Image
        src="https://github.com/evertonfxavier.png"
        alt="Everton"
        w="6.8rem"
        borderRadius="6rem"
      />
    </HStack>
  );
}
