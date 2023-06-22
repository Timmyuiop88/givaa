import {
  Flex,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Box,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Center,
  Show,
  Hide,
  VStack,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { BiBadgeCheck } from "react-icons/bi";
import Image from "next/image";
import bro from "./assets/images/bro.svg";
import growth from "./assets/images/growth.svg";
import { FaArrowRight } from "react-icons/fa";
export default function Features() {
  return (
    <Stack m={"auto"} justifyContent={"center"} maxW={"5xl"} pt={10} pb={"150"}>
      <Heading>
        <Text
          fontWeight={700}
          lineHeight={"150%"}
          color={"#434A5B"}
          textAlign={"center"}
        >
          Features
        </Text>
      </Heading>
      <Stack
        alignItems={"center"}
        direction={["column", "column", "row", "row"]}
        justifyContent={"center"}
        pt={10}
        spacing={5}
      >
        <Box
          borderRadius={"30px"}
          w={["80vw", "80vw", "40vw", "40vw", "620px"]}
          h={["330px", "330px", "400px", "420px"]}
          bg={"#ECFCF8"}
          justifyContent={"center"}
        >
          <Heading>
            <Text
              ml={10}
              pt={"5"}
              fontWeight={700}
              fontSize={["20px", "20px", "25px", "32px"]}
              lineHeight={"150%"}
              color={"#434A5B"}
              textAlign={"left"}
            >
              Social Media Fundraising
            </Text>
          </Heading>
          <List
            width={["", "", "75%", "75%"]}
            spacing={5}
            mt={5}
            ml={10}
            mr={5}
            fontWeight={500}
            fontSize={["14px", "15px", "15px", "18px"]}
            lineHeight={"120%"}
            color={"#434A5B"}
          >
            <ListItem display="flex" alignItems="center">
              <ListIcon as={BiBadgeCheck} color="#41E1BC" />
              Create and Launch Fundraising campaign with ease
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={BiBadgeCheck} color="#41E1BC" />
              Share your Story and Goals with your social network
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={BiBadgeCheck} color="#41E1BC" />
              Receive Real-time update on your campaign progress
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem display="flex" alignItems="center">
              <ListIcon as={BiBadgeCheck} color="#41E1BC" />
              Secure and Reliable Payment Process
            </ListItem>
          </List>
        </Box>
        <Center
          alignItems={"center"}
          w={["80vw", "80vw", "40vw", "40vw", "620px"]}
          pt={10}
          h={["330px", "330px", "400px", "420px"]}
          bg={""}
          margin={"auto"}
        >
          <Image src={bro} />
        </Center>
      </Stack>

      <Stack
        alignItems={"center"}
        direction={["column-reverse", "column-reverse", "row", "row"]}
        justifyContent={"center"}
        pt={10}
        spacing={5}
      >
        <Center
          alignItems={"center"}
          w={["80vw", "80vw", "40vw", "40vw", "620px"]}
          pt={10}
          h={["330px", "330px", "400px", "420px"]}
          bg={""}
          margin={"auto"}
        >
          <Image src={growth} />
        </Center>
        <Box
          borderRadius={"30px"}
          w={["80vw", "80vw", "40vw", "40vw", "620px"]}
          h={["330px", "330px", "400px", "420px"]}
          bg={"#F5EBFF"}
          justifyContent={"center"}
        >
          <Heading>
            <Text
              pt={"5"}
              fontWeight={700}
              fontSize={["20px", "20px", "25px", "32px"]}
              lineHeight={"150%"}
              color={"#434A5B"}
              textAlign={"left"}
              ml={10}
            >
              Giveaway Tool
            </Text>
          </Heading>
          <List
            spacing={5}
            mt={5}
            width={["", "", "75%", "75%"]}
            ml={10}
            mr={5}
            fontWeight={500}
            fontSize={["14px", "15px", "15px", "18px"]}
            lineHeight={"120%"}
            color={"#434A5B"}
          >
            <ListItem display="flex" alignItems="center">
              <ListIcon as={BiBadgeCheck} color="#9B35FF" />
              Host engaging giveaways on your social media network
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={BiBadgeCheck} color="#9B35FF" />
              Select random winners from comments or likes
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <ListIcon as={BiBadgeCheck} color="#9B35FF" />
              Customize entry requirements and giveaway rules
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem display="flex" alignItems="center">
              <ListIcon as={BiBadgeCheck} color="#9B35FF" />
              Streamline the giveaway process with easy-to-use tools
            </ListItem>
          </List>
        </Box>
      </Stack>
    </Stack>
  );
}
