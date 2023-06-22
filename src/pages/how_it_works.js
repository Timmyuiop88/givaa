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
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import Image from "next/image";
export default function HowItWorks() {
  return (
    <Container maxW={"100%"} bg={"#FAF9F5"} pb={20}>
      <Heading>
        <Text
          fontWeight={700}
          pt={10}
          lineHeight={"150%"}
          color={"#434A5B"}
          textAlign={"center"}
        >
          How it Works
        </Text>
      </Heading>
      <VStack
      maxW={'5xl'}
      m={'auto'}
      >
        <Tabs variant="line" colorScheme={"red"} pt={10} width={'100%'} m={'auto'}>
          <TabList justifyContent={'center'} m={'auto'} w={'0%'}>
            <Tab _selected={{ colorScheme: "white", borderBottom: '2px', borderColor: "#FFBE37" ,bg: "#FFF9EB" }}>
              Fundraisers
            </Tab>
            <Tab _selected={{ colorScheme: "white", borderBottom: '2px', borderColor: "#FFBE37" ,bg: "#FFF9EB" }}>
              Influencers
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack
              direction={["row", "row", "column", "column"]}
              justifyContent={'center'}
              >
                <Stack 
                w={'100%'}
                  direction={["column", "column", "row", "row"]}
                  spacing={[100, 100, '30%', '30%']}
                  justifyContent={'space-between'}
                >
                  <Center
                    w={65}
                    h={65}
                    minW={65}
                    borderRadius={10}
                    bg={"#FFBE37"}
                    border={'0.5px solid rgba(255, 255, 255, 0.24)'}
                  >
                    <Icon as={FaUser} boxSize={6} />
                  </Center>

                  <Center
                    w={65}
                    h={65}
                    minW={65}
                    borderRadius={10}
                    bg={"#FFBE37"}
                  >
                    <Icon as={BsCreditCard2FrontFill} boxSize={6} />
                  </Center>
                  <Center
                    w={65}
                    h={65}
                    minW={65}
                    borderRadius={10}
                    bg={"#FFBE37"}
                  >
                    <Icon as={BsSendFill} boxSize={6} />
                  </Center>
                </Stack>
                <Stack
                w={'100%'}
                m={'auto'}
               justifyContent={'space-between'}
                direction={["column", "column", "row", "row"]}
                >
                    <Box 
                    pl={5}
                    pr={5}
                    w={[300, 300, 200, 350]}
                    h={[200, 200, 180, 250]}
                    bg={'white'}
                    borderRadius={'16px'}
           
                    >
 <Heading>
            <Text
              pt={"2"}
              fontWeight={700}
              fontSize={["20px", "20px", "25px", "32px"]}
              lineHeight={"150%"}
              color={"#434A5B"}
            
              textAlign={"center"}
             
            >
              Step 1
            </Text>
          </Heading>

          <Text
          fontWeight={500}
          fontSize={["16px", "16px", "14px", "18px"]}
          lineHeight={"150%"}
          color={"#434A5B"}
          textAlign={"center"}
          mt={2}
          >
          Create your free Givaa account to start making a difference today.
          </Text>

                    </Box>
                    <Box 
                   pl={5}
                   pr={5}
                   w={[300, 300, 200, 350]}
                   h={[200, 200, 180, 250]}
                    bg={'white'}
                    borderRadius={'16px'}
                
                    >
 <Heading>
            <Text
              pt={"2"}
              fontWeight={700}
              fontSize={["20px", "20px", "25px", "32px"]}
              lineHeight={"150%"}
              color={"#434A5B"}
              textAlign={"center"}
             
            >
              Step 2
            </Text>
          </Heading>


          <Text
          fontWeight={500}
          fontSize={["16px", "16px", "14px", "18px"]}
          lineHeight={"150%"}
          color={"#434A5B"}
          textAlign={"center"}
          mt={2}
          >
         Create a Campaign or Giveaway:Set up your fundraising campaign or social media giveaway with our user-friendly tools. </Text>

                    </Box>
                    <Box 
                   pl={5}
                   pr={5}
                   w={[300, 300, 200, 350]}
                   h={[200, 200, 180, 250]}
                    bg={'white'}
                    borderRadius={'16px'}
                   
                    >
 <Heading>
            <Text
              pt={"2"}
              fontWeight={700}
              fontSize={["20px", "20px", "25px", "32px"]}
              lineHeight={"150%"}
              color={"#434A5B"}
              textAlign={"center"}
             
            >
              Step 3
            </Text>
          </Heading>

          <Text
          fontWeight={500}
          fontSize={["16px", "16px", "14px", "18px"]}
          lineHeight={"150%"}
          color={"#434A5B"}
          textAlign={"center"}
          mt={2}
          >
          Create your free Givaa account to start making a difference today.
          </Text>

                    </Box>
                </Stack>
              </Stack>
            </TabPanel>
            <TabPanel>
            <Stack
              direction={["row", "row", "column", "column"]}
              justifyContent={'center'}
              >
                <Stack 
                  direction={["column", "column", "row", "row"]}
                  spacing={[100, 55, 35, 35]}
                  justifyContent={'center'}
                >
                  <Center
                    w={65}
                    h={65}
                    minW={65}
                    borderRadius={10}
                    bg={"#FFBE37"}
                  >
                    <Icon as={FaUser} boxSize={6} />
                  </Center>

                  <Center
                    w={65}
                    h={65}
                    minW={65}
                    borderRadius={10}
                    bg={"#FFBE37"}
                  >
                    <Icon as={BsCreditCard2FrontFill} boxSize={6} />
                  </Center>
                  <Center
                    w={65}
                    h={65}
                    minW={65}
                    borderRadius={10}
                    bg={"#FFBE37"}
                  >
                    <Icon as={BsSendFill} boxSize={6} />
                  </Center>
                </Stack>
                <Stack
                direction={["column", "column", "row", "row"]}
                >
                    <Box 
                    w={300}
                    h={200}
                    bg={'red'}
                    >

                    </Box>
                    <Box 
                    w={300}
                    h={200}
                    bg={'red'}
                    >

                    </Box>
                    <Box 
                    w={300}
                    h={200}
                    bg={'blue'}
                    >

                    </Box>
                </Stack>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Container>
  );
}
