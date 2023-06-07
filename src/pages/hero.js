import {
  Flex,
  Container,
  Heading,
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
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Image from "next/image";
import shape from "./assets/images/shape1.png";
import volunteer from "./assets/images/volunteer-1.png";
export default function Hero() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 28 }}
      >
        <Heading
          fontWeight={700}
          fontSize={{ base: "3xl", sm: "6xl", md: "6xl" }}
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
            _hover={{ bg: "white" }}
            size="lg"
          >
            Learn more
          </Button>
        </Stack>
      </Stack>
      <Stack direction={["column", "column", "column", "row"]} justifyContent={"center"}  spacing={[2]}>
        <Box
          bg="#E7EAEB"
          w={["180px", "200px", "300px"]}
          h={["190px", "200px", "320px"]}
          borderRadius="35px"
          minW={["180px", "200px", "300px"]}
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
            size={["sm", "md", "lg"]}
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
            fontSize={{ base: "2xl", sm: "2xl", md: "5xl" }}
            fontWeight={700}
          >
            200+
          </Text>
        </Box>
        <Stack direction={"row"} justifyContent={"center"} spacing={[0]} pt={3} position={"relative"}>
          <Box
            filter="auto"
            contrast="70%"
            bgImage="url('/assets/images/volunteer-1.png')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            w={["200px", "220px", "250px", "350px"]}
            h={["190px", "200px", "250px", "320px"]}
            borderRadius="35px"
          ></Box>
          <Box
            filter="auto"
            contrast="70%"
            bgImage="url('/assets/images/volunteer-2.png')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            w={["200px", "220px", "250px", "350px"]}
            h={["190px", "200px", "250px", "320px"]}
            borderRadius="35px"
          ></Box>
        </Stack>
        <Stack direction={["row", "row", "row", "column"]} justifyContent={"center"} position={'relative'}>
        <Center
          className="get"

          position="absolute"
         right={['10' , '20', '20', '40']}
          bottom={'-5'}
          w={100}
          h={100}
          borderRadius="50px"
          border="2px"
          borderColor={"#ECEDEF"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button w="40px" h="40px" borderRadius="100%" bg={"#FFBE37"}>
            <ArrowRightIcon w="15px" h="15px" />
          </Button>
        </Center>
      </Stack>

        <Center
        position={['absolute', 'absolute', 'absolute', 'relative']}
       
          bg="#FFECC3"
          w={["180px", "200px", "300px"]}
          h={["190px", "200px", "320px"]}
          borderRadius="35px"
          minW={["180px", "200px", "300px"]}
        >
          <Text fontSize={{ base: "8xl", sm: "8xl", md: "9xl" }}>🤑</Text>
        </Center>
      </Stack>
      
     
    </Container>
  );
}
