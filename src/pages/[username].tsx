import Head from "next/head";
import { GetServerSideProps } from "next";
import { HStack, Text, VStack } from "@chakra-ui/react";

import { Profile } from "../components/Profile";
import { CountDown } from "../components/CountDown";
import { ChallegenBox } from "../components/ChallegenBox";

import { CountdownProvider } from "../contexts/CountDownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import Sidebar from "../components/sidebar";
import Container from "../components/container";
import Toggle from "../components/toggle";

interface HomeProps {
  user: any;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  user,
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <Head>
        <title>Início | Move.it</title>
      </Head>

      <HStack>
        <Sidebar />

        <HStack
          w="full"
          justifyContent="space-around"
          flexDirection={["column", "column", "row", "row"]}
          // mb="auto"
          py=".8rem"
          px=".8rem"
        >
          {/* <ExperienceBar>
              <Profile />
            </ExperienceBar>
            <Level />
          <CompleteChallenger /> */}
          <VStack w="full" mb="auto">
            <Profile user={user} />
            <Toggle />
          </VStack>

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

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { level, currentExperience, challengesCompleted } = req.cookies;

  const { username } = params;

  const response = await fetch(`https://api.github.com/users/${username}`);

  const user = await response.json();

  return {
    props: {
      user,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
