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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Progress,
} from "@chakra-ui/react";
import Fund from "./fund";

import { FaArrowRight } from "react-icons/fa";
export default function Fundraiser() {
  return (
    <Container
      maxW={"100%"}
      h={"auto"}
      pb={"100"}
      bg={"#F8F8F8"}
      justifyContent={"center"}
    >
      <Stack maxW={"5xl"} justifyContent={"center"} m={"auto"}>
        <Stack
          maxW={"100%"}
          m={"auto"}
          justifyContent={"space-between"}
          direction={["column", "column", "row", "row"]}
        >
          <Stack w={["100%", "100%", "60%", "60%"]} direction={"column"}>
            <Heading>
              <Text
                fontWeight={700}
                pt={10}
                lineHeight={"150%"}
                color={"#434A5B"}
                textAlign={"left"}
                fontSize={"52px"}
              >
                Fundraisers
              </Text>
            </Heading>
            <Text
              fontWeight={500}
              w={"100%"}
              lineHeight={"150%"}
              color={"#434A5B"}
              textAlign={"left"}
            >
              Discover the inspiring stories of individuals and organizations
              who have used Givaa to make a difference in their communities.
              From medical fundraisers to educational initiatives, see how Givaa
              has helped people achieve their goals and change lives.
            </Text>
          </Stack>

          <Box w={"40%"}>
            <Text
              fontWeight={700}
              pt={10}
              lineHeight={"150%"}
              color={"#434A5B"}
              textAlign={["left", "left", "center", "center"]}
              fontSize={"lg"}
              w={"100%"}
            >
              See More Fundraisers <Icon as={FaArrowRight} pl={2} />
            </Text>
          </Box>
        </Stack>
        <Stack
          direction={["row", "row", "row", "row"]}
          overflowX={"scroll"}
          overflowY={"none"}
          justifyContent={"left"}
          m={"auto"}
          w={"100%"}
          pt={10}
        >
          <Fund
            fundraiserName="Organization Name Here"
            Description="Discover the inspiring stories of individuals and organizations who have used....."
            CreatedBy="4 Breath 4 Life"
            Amount="10000"
            Percent="37"
            TimeRemaining="250"
          />
          <Fund
            fundraiserName="Organization Name Here"
            Description="Discover the inspiring stories of individuals and organizations who have used....."
            CreatedBy="4 Breath 4 Life"
            Amount="10000"
            Percent="37"
            TimeRemaining="250"
          />
          <Fund
            fundraiserName="Organization Name Here"
            Description="Discover the inspiring stories of individuals and organizations who have used....."
            CreatedBy="4 Breath 4 Life"
            Amount="10000"
            Percent="37"
            TimeRemaining="250"
          />
        </Stack>
      </Stack>
    </Container>
  );
}
