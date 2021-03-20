import { useContext } from "react";
import { Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountDownContext } from "../../contexts/CountDownContext";
import ButtonComponent from "../button";

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
      h="full"
      w="full"
      bgColor="gray.100"
      p="2rem 2rem"
      borderRadius="5px"
      boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      {activeChallenge ? (
        <VStack flexDirection="column" spacing={12}>
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

          <SimpleGrid as="footer" gridTemplateColumns="1fr 1fr" gap="1rem">
            <ButtonComponent
              click={handleChallengeFailed}
              w="4.6rem"
              h="3rem"
              color="white"
              fontSize=".8rem"
              bgColor="#e05959"
              hover="#bf5252"
            >
              Falhei
            </ButtonComponent>
            <ButtonComponent
              click={handleChallengeSucceeded}
              w="4.6rem"
              h="3rem"
              color="white"
              fontSize=".8rem"
              bgColor="#46df58"
              hover="#38b547"
            >
              Completei
            </ButtonComponent>
          </SimpleGrid>
        </VStack>
      ) : (
        <VStack alignItems="center" flexDirection="column" spacing={12}>
          <Text as="strong" fontSize="1.5rem" fontWeight="500" lineHeight="1.4">
            Finalize um cíclo para receber um desafio
          </Text>
          <Image src="icons/level-up.svg" alt="Level Up" />
          <Text>Avance de level completando desafios.</Text>
        </VStack>
      )}
    </VStack>
  );
}
