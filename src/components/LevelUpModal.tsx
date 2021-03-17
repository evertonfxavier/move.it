import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <HStack
      bgColor="rgba(242, 243, 245, 0.8)"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"
    >
      
      <Box
        bgColor="white"
        w="full"
        maxW="400px"
        p="2rem 3rem"
        borderRadius="6px"
        boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
        textAlign="center"
        position="relative"
      >
        <Heading fontSize="8.75rem">{level}</Heading>
        <Text as="strong" fontSize="2.25rem" color="#2e384d">
          Parabéns!
        </Text>
        <Text fontSize="1.25rem" color="#666666" mt=".25rem">
          Você alcançou um novo level.
        </Text>

        <Button
          type="button"
          position="absolute"
          right=".5rem"
          top=".5rem"
          bg="transparent"
          border="0"
          fontSize="0"
          onClick={closeLevelUpModal}
        >
          <Image src="/icons/close.svg" alt="close" />
        </Button>
      </Box>
    </HStack>
  );
}
