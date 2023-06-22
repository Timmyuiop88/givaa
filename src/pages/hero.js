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
  Show, Hide
} from "@chakra-ui/react";
import { motion } from "framer-motion"
import { ArrowRightIcon } from "@chakra-ui/icons";
import Image from "next/image";
import shape from "./assets/images/shape1.png";
import { TiMediaEject } from "react-icons/ti";

import volunteer from "./assets/images/volunteer-1.png";
export default function Hero() {
  return (
    <Container maxW={'5xl'}  pb={10}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 28 }}
      >
        <Heading as={motion.div}
      
          fontWeight={700}
          fontSize={{ base: "3xl", sm: "3xl", md: "6xl" }}
          lineHeight={"150%"}
          color={"#FFBE37"}
        >
          <Image src={shape} width={24} className="shape" />
          Givaa{" "}
          <Text as={"span"} color={"#434A5B"} fontWeight={700}>
            - Empowering <br />
            Communities, Changing Lives
          </Text>
        </Heading>
        <Text color={"#696E7C"} maxW={"3xl"} fontWeight={500}>
          Unleash the power of change and captivate your audience with Givaa
          your one-stop hub for dynamic social fundraising and exhilarating
          giveaways.
        </Text>
        <Stack spacing={3} direction={["column", "column", "row"]}>
          <Button
            rounded={"full"}
            px={6}
            color={"black"}
            colorScheme={"orange"}
            bg={"#FFBE37"}
            _hover={{ bg: "#FFBE37" }}
            size="lg"
          >
            Get started
          </Button>
          <Button
            rounded={"full"}
            px={6}
            color={"black"}
            colorScheme={"white"}
            bg={"white"}
            border={'1px'}
            borderColor={'#FFBE37'}
            _hover={{ bg: "white" }}
            size="lg"
          >
            Learn more
          </Button>
        </Stack>
      </Stack>
      <Stack
      maxW={'5xl'}
        direction={["column", "column", "column", "row"]}
        justifyContent={"center"}
        spacing={[2]}
        position={"relative"}
      >

<HStack justifyContent={'center'}>
<Box
          bg="#E7EAEB"
          w={["200px", "220px", "230px", "270px"]}
            h={["190px", "200px", "230px", "270px"]}
          borderRadius="35px"
          
        >
          <Text
            textAlign={"center"}
            pt={[10, 10, 20]}
            color={"#434A5B"}
            fontSize={{ base: "1xl", sm: "1xl", md: "2xl" }}
            fontWeight={700}
          >
            Trusted by
          </Text>

          <AvatarGroup
            pt={5}
            size={["sm", "md", "md", "md"]}
            max={4}
            justifyContent={"center"}
          >
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>

          <Text
            textAlign={"center"}
            pt={1}
            color={"#434A5B"}
            fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "3xl" }}
            fontWeight={700}
          >
            200+
          </Text>

        </Box>

        <Show below="lg">


<Center 
  
  top={0}
  left={["50%", "50%", "0", "0"]}
  bg="#FFECC3"
  w={["200px", "200px", "230px", "270px"]}
  h={["190px", "200px", "230px", "270px"]}
  borderRadius="35px"


  
>
  <Text fontSize={{ base: "8xl", sm: "8xl", md: "9xl" }}>🤑</Text>
</Center>
</Show>
      
</HStack>

        <Stack
          direction={"row"}
          justifyContent={"center"}
          spacing={[0]}
          pt={[3, 3, 1, 0]}
          position={"relative"}
        >
          <Box
            filter="auto"
            contrast="70%"
            bgImage="url('/assets/images/volunteer-1.png')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            w={["200px", "220px", "230px", "270px"]}
            h={["190px", "200px", "230px", "270px"]}
            borderRadius="35px"

          ></Box>
          <Box
            filter="auto"
            contrast="70%"
            bgImage="url('/assets/images/volunteer-2.png')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            w={["200px", "220px", "230px", "270px"]}
            h={["190px", "200px", "230px", "270px"]}
            borderRadius="35px"
        
          ></Box>
          <Center
            position={"absolute"}
            className="get"
            bottom={"-5"}
            w={100}
            h={100}
            borderRadius="50px"
            border="2px"
            borderColor={"#ECEDEF"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button w="40px" h="40px" borderRadius="100%" bg={"#FFBE37"}>
            <Icon as={TiMediaEject} w="15px" h="15px" rotate={'90deg'} />
            </Button>
          </Center>
        </Stack>
        <Stack
          direction={["row", "row", "row", "column"]}
          justifyContent={"center"}
          position={"relative"}
        ></Stack>
<Hide below="lg">


        <Center 
          
          
          bg="#FFECC3"
          w={["200px", "220px", "230px", "270px"]}
          h={["190px", "200px", "230px", "270px"]}
          borderRadius="35px"
   minW={["200px", "220px", "230px", "270px"]}
         
        >
          <Text fontSize={{ base: "8xl", sm: "8xl", md: "9xl" }}>🤑</Text>
        </Center>
        </Hide>
      </Stack>
    </Container>
  );
}
