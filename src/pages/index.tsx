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
import Sidebar from "../components/sidebar";
import Toggle from "../components/toggle";

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
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <HStack>
        <Sidebar />
        <HStack w="full" p="2.5rem 0.8rem" justifyContent="space-around">
          <VStack borderWidth="1px">
            <Profile />
            <CompleteChallenger />
            <Toggle />
            <ExperienceBar />
          </VStack>

          <CountdownProvider>
            <VStack
              alignContent="center"
              borderWidth="1px"
              borderRadius=".8rem"
              // w="full"
              // h="calc(100vh - 22rem)"
            >
              <CountDown />
              <ChallegenBox />
            </VStack>
          </CountdownProvider>
        </HStack>
      </HStack>
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
