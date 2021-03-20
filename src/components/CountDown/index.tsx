import { useContext } from "react";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { CountDownContext } from "../../contexts/CountDownContext";
import ButtonComponent from "../button";

export function CountDown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCount,
    resetCountdow,
  } = useContext(CountDownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondsLeft, secondsRight] = String(seconds)
    .padStart(2, "0")
    .split("");

  return (
    <HStack
      alignItems="center"
      fontFamily="Rajdhani"
      borderRadius=".8rem"
      color="#2e384d"
      bgColor="gray.200"
      w="full"
      h="6.6rem"
      boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
    >
      <VStack w="full" h="full">
        {hasFinished ? (
          <ButtonComponent
            disabled={true}
            w="full"
            h="full"
            color="white"
            fontSize="1.25rem"
            bgColor="#5965e0"
            hover="#3042ff"
          >
            Ciclo encerrado
          </ButtonComponent>
        ) : (
          <>
            {isActive ? (
              <ButtonComponent
                click={resetCountdow}
                w="full"
                h="full"
                color="white"
                fontSize="1.25rem"
                bgColor="#e05959"
                hover="#bf5252"
              >
                Abandonar ciclo
              </ButtonComponent>
            ) : (
              <ButtonComponent
                click={startCount}
                w="full"
                h="full"
                color="white"
                fontSize="1.25rem"
                bgColor="#5965e0"
                hover="#545ecb"
              >
                Iniciar um ciclo
              </ButtonComponent>
            )}
          </>
        )}
      </VStack>
      <HStack
        alignItems="center"
        justifyContent="center"
        borderRadius="5px"
        fontSize="6.4rem"
        textAlign="center"
        // w="28rem"
        w="full"
        h="full"
      >
        <Text>
          {minuteLeft}
          {minuteRight}
        </Text>
        <Text fontSize="6.25rem">:</Text>
        <Text>
          {secondsLeft}
          {secondsRight}
        </Text>
      </HStack>
    </HStack>
  );
}
