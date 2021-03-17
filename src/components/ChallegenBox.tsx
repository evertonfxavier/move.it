import { useContext } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountDownContext } from "../contexts/CountDownContext";
//

export function ChallegenBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountdow } = useContext(CountDownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdow();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdow();
  }

  return (
    <VStack
      // h="full"
      bgColor="white"
      // p="1.5rem 2rem"
      borderRadius="5px"
      boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      {activeChallenge ? (
        <VStack h="full" flexDirection="column">
          <Heading
            as="header"
            color="#5965e0"
            fontSize="1.25rem"
            fontWeight="600"
            p="0 2rem 1.5rem"
            borderBottom="1px solid  #dcdde0"
          >
            Ganhe {activeChallenge.amount}XP
          </Heading>

          <VStack
            as="main"
            flex="1"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Image src={`icons/${activeChallenge.type}.svg`} />
            <Heading
              as="strong"
              fontWeight="600"
              fontSize="2rem"
              color=" #2e384d"
              m="1.5rem 0 1rem"
            >
              Novo desafio
            </Heading>
            <Text lineHeight="1.5">{activeChallenge.description}</Text>
          </VStack>

          <SimpleGrid as="footer" gridTemplateColumns="1fr 1fr" gap="1rem">
            <Button
              type="button"
              onClick={handleChallengeFailed}
              h="3rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="0"
              borderRadius="5px"
              color="white"
              fontSize="1rem"
              fontWeight="600"
              transition="filter .2s"
            >
              Falhei
            </Button>
            <Button
              type="button"
              onClick={handleChallengeSucceeded}
              h="3rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="0"
              borderRadius="5px"
              color="white"
              fontSize="1rem"
              fontWeight="600"
              transition="filter .2s"
            >
              Completei
            </Button>
          </SimpleGrid>
        </VStack>
      ) : (
        <VStack alignItems="center" flexDirection="column">
          <Text as="strong" fontSize="1.5rem" fontWeight="500" lineHeight="1.4">
            Finalize um cíclo para receber um desafio
          </Text>
          <Text
            display="flex"
            flexDirection="column"
            alignItems="center"
            lineHeight="1.4"
            maxW="70%"
            mt="3rem"
          >
            <Image src="icons/level-up.svg" alt="Level Up" mb="1rem" />
            Avance de level completando desafios.
          </Text>
        </VStack>
      )}
    </VStack>
  );
}
