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
  import donate1 from "./assets/images/donate-1.png"
  import donate2 from "./assets/images/donate-2.png"


export default function About (){
    return(
    <Container>
        <Stack pt={20}>

                <Stack direction={['column', 'column', 'row','row']} justifyContent={'center'}>
                    <Box 
                    w={['380px', '400px', '480px', '600px']}
                    h={['270px','300px','400px', '450px']}
              
                   minW={['380px', '400px', '480px', '600px']}
                    maxW={'600px'}
                    display={'flex'}
                    justifyContent={'space-evenly'}
                    m={'auto'}

                  
                    >
                     <Box width={['170px', '190px', '220px', '280px']} height={'100%'} >
                        <Image src={donate1} className="radi"/>
                        </Box>
                        <Box width={['170px', '190px', '220px', '280px']} height={'100%'} >
                        <Image src={donate2} className="radi"/>
                        </Box>




                    </Box>
                    <Box 
                   w={['380px', '380px', '420px', '600px']}
                    h={'450px'}
                   
                   minW={['380px', '380px', '420px', '600px']}
                    pt={[5, 5, 10 , 20]}
                    pl={[5,5,10 ,10]}
                    pr={[5,5,10 ,10]}
                    >
                     <Heading>
        <Text
          fontWeight={700}
          lineHeight={"150%"}
          color={"#434A5B"}
          textAlign={"left"}
        >
         About Givaa
        </Text>
      </Heading>
                    <Text
                    pt={5}


                    >
                    Welcome to Givaa, a one-of-a-kind platform that brings together the power of social media fundraising and giveaway tools to make a difference in the world. Our mission is to help individuals, charities, and organizations raise funds for causes they care about and engage with their communities in fun and exciting ways. Givaa is a game-changer in the crowdfunding space, providing a unique way to bring people together for positive change.
                    </Text>
                    </Box>
                </Stack>




        </Stack>
    </Container>
    )
}