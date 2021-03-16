import Head from "next/head";
import { GetServerSideProps } from "next";
import { Box, HStack, SimpleGrid, VStack } from "@chakra-ui/react";

import { Profile } from "../components/Profile";
import { CompleteChallenger } from "../components/CompleteChallenger";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallegenBox } from "../components/ChallegenBox";

import { CountdownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <VStack
        h="full"
        maxW="992px"
        mx="auto"
        p="2.5rem 2rem"
        flexDirection="column"
      >
        <Head>
          <title>Início | Move.it</title>
        </Head>

        <ExperienceBar />
        <CountdownProvider>
          <SimpleGrid
            as="section"
            gridTemplateColumns="1fr 1fr"
            gap="6.25rem"
            alignContent="center"
            py="2rem"
          >
            <Box>
              <Profile />
              <CompleteChallenger />
              <CountDown />
            </Box>
            <Box>
              <ChallegenBox />
            </Box>
          </SimpleGrid>
        </CountdownProvider>
      </VStack>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
