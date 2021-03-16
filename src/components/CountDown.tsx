import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { CountDownContext } from "../contexts/CountDownContext";

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
    <VStack alignItems="center" fontFamily="Rajdhani" color="#2e384d">
      <Flex
        alignItems="center"
        justifyConten="space-evenly"
        boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
        borderRadius="5px"
        fontSize="10.5rem"
        textAlign="center"
        w="full"
        h="13.2rem"
      >
        <Box>
          <Text as="span" borderRight=" 10px solid #f1f2f3">
            {minuteLeft}
          </Text>
          <Text as="span" borderRight="solid #f1f2f3">
            {minuteRight}
          </Text>
        </Box>
        <Box>
          <Text fontSize="6.25rem" mx=".5rem">
            :
          </Text>
        </Box>
        <Box>
          <Text as="span" borderLeft="solid #f1f2f3">
            {secondsLeft}
          </Text>
          <Text as="span" borderLeft="solid #f1f2f3">
            {secondsRight}
          </Text>
        </Box>
      </Flex>

      {hasFinished ? (
        <Button
          disabled
          w="full"
          h="5rem"
          mt="2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="0"
          borderRadius="5px"
          bgColor="#5965e0"
          color="white"
          fontSize="1.25rem"
          fontWeight="600"
          transition="bgColor .2s"
        >
          Ciclo encerrado
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button
              type="button"
              onClick={resetCountdow}
              w="full"
              h="5rem"
              mt="2rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="0"
              borderRadius="5px"
              bgColor="#5965e0"
              color="white"
              fontSize="1.25rem"
              fontWeight="600"
              transition="bgColor .2s"
            >
              Abandonar ciclo
            </Button>
          ) : (
            <Button
              type="button"
              onClick={startCount}
              w="full"
              h="5rem"
              mt="2rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
              border="0"
              borderRadius="5px"
              bgColor="#5965e0"
              color="white"
              fontSize="1.25rem"
              fontWeight="600"
              transition="bgColor .2s"
            >
              Iniciar um ciclo
            </Button>
          )}
        </>
      )}
    </VStack>
  );
}
