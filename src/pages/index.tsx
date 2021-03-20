import Head from "next/head";
import { GetServerSideProps } from "next";
import { Box, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import { Profile } from "../components/Profile";
import { CompleteChallenger } from "../components/CompleteChallenger";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallegenBox } from "../components/ChallegenBox";

import { CountdownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import Sidebar from "../components/sidebar";
import Toggle from "../components/toggle";
import Level from "../components/Level";
import Container from "../components/container";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

//https://api.github.com/users/evertonfxavier

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

        <HStack w="full" p=".8rem 0.8rem" justifyContent="space-around">
          <Container w="full">
            {/* <ExperienceBar>
              <Profile />
            </ExperienceBar>
            <Toggle />
            <Level />
            <CompleteChallenger /> */}
            <HStack
              w="full"
              h="10rem"
              borderWidth="1px"
              borderRadius=".8rem"
              p=".8rem"
            >
              <ExperienceBar>
                <Profile />
              </ExperienceBar>
              <VStack w="full" borderWidth="1px">
                <Text>Name</Text>
                <Text>Description</Text>
              </VStack>
            </HStack>
          </Container>

          <Container w="full">
            <CountdownProvider>
              <CountDown />
              <ChallegenBox />
            </CountdownProvider>
          </Container>
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
