import { useContext } from "react";
import {
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { ExperienceBar } from "../ExperienceBar";

import { AtSignIcon } from "@chakra-ui/icons";
import { FaUser, FaPen } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

interface GithubUser {
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  location: string;
}
interface IProfile {
  user: GithubUser;
}

export function Profile({ user }: IProfile) {
  // const { level } = useContext(ChallengesContext);

  return (
    <HStack
      w="full"
      h="10rem"
      borderWidth="1px"
      borderRadius=".8rem"
      p=".8rem"
      mb="auto"
    >
      <VStack w={["4rem", "6rem", "8rem"]}>
        <ExperienceBar>
          <HStack alignItems="center" justifyContent="center">
            <Image
              src={user.avatar_url}
              alt={user.avatar_url}
              w="70%"
              borderRadius="6rem"
            />
          </HStack>
        </ExperienceBar>
      </VStack>

      <List
        w="full"
        maxW="22rem"
        alignItems="start"
        color="#2e384d"
        spacing={2}
        fontSize={[".8rem", ".8rem", ".8rem", "1rem"]}
      >
        <ListItem>
          <ListIcon as={AtSignIcon} color="green.500" />
          {user.login}
        </ListItem>
        <ListItem fontSize={["1rem", "1rem", "1rem", "1.4rem"]}>
          <ListIcon
            as={FaUser}
            color="green.500"
            w={[".8rem", ".8rem", ".8rem", "1rem"]}
          />
          {user.name}
        </ListItem>
        <ListItem>
          <ListIcon as={FaPen} color="green.500" />
          {user.bio}
        </ListItem>
        <ListItem>
          <ListIcon as={HiLocationMarker} color="green.500" />
          {user.location}
        </ListItem>
      </List>
    </HStack>
  );
}
