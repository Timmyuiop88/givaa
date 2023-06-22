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

  import Image from "next/image";
  import who1 from "./assets/images/who-1.svg"
export default function Who(){
    return(
       <Container maxW={'100%'} h={'auto'} bg={'#FCFAFF'}> 
        <Stack >
            <Stack direction={'column'} maxW={'5xl'} m={'auto'} justifyContent={'center'} >
            <Heading>
        <Text
          fontWeight={700}
          pt={10}
          lineHeight={"150%"}
          color={"#434A5B"}
          textAlign={"center"}
        
        >
       Who is Givaa For?
        </Text>
      </Heading>

      <Text
                  
                  fontWeight={500}
                w={'100%'}
                  lineHeight={"150%"}
                  color={"#434A5B"}
                  textAlign={"center"}
       
                    >
                   Givaa is a platform designed with a broad spectrum of users in mind. Our platform is ideal for anyone who has a cause they care about, a story to share, or a desire to engage their audience in a meaningful way. </Text>
           
                   <Tabs
                   
                   >
  <TabList m={'auto'} w={'0%'} justifyContent={'center'}>
    <Tab _selected={{ colorScheme: "white", borderBottom: '2px', borderColor: "#9B35FF" ,bg: "#F5EBFF" }}>One</Tab>
    <Tab _selected={{ colorScheme: "white", borderBottom: '2px', borderColor: "#9B35FF" ,bg: "#F5EBFF" }}>Two</Tab>
    <Tab _selected={{ colorScheme: "white", borderBottom: '2px', borderColor: "#9B35FF" ,bg: "#F5EBFF" }}>Three</Tab>
  </TabList>
  

  <TabPanels>
    <TabPanel>
<Stack 
direction={['column', 'column', 'row', 'row']}
bg={"white"}
borderRadius={'16px'}
pb={10}
pl={[5,5,10,10]}
pr={[5,5,10,10]}
pt={5}
bor

width={'auto'}
justifyContent={'center'}

>
    <Center
    
    w={['100%', '345px', '360px', '580px']}
    h={['345px', '345px', '360px', '560px']}
    bg={'#FAF9F5'}
    borderRadius={'16px'}
    boxShadow='sm'
    m={'auto'}
    >
<Image src={who1} />

    </Center>
    <Center
    
    w={['100%', '345px', '360px', '560px']}
    h={['345px', '345px', '360px', '560px']}
    bg={'#FFFFFF'}
    borderRadius={'16px'}
    boxShadow='sm'
 justifyContent={'center'}
 m={'auto'}
    >
        <Stack direction={'column'}  borderRadius={'16px'}  bg={'#FFFFFF'} justifyContent={'cen'}>
 

        
 <Heading>
        <Text
        fontSize={['24px', '24px', '30px', '30px']}
          fontWeight={700}
          pt={[5, 5, 10, 10]}
          lineHeight={"150%"}
          color={"#434A5B"}
          textAlign={"center"}
       
        >
  Givaa For Influencers
        </Text>
      </Heading>

      <Text
                  
                  fontWeight={500}
                w={'100%'}
                  lineHeight={"150%"}
                  color={"#434A5B"}
                  textAlign={"center"}
                  justifyContent={'center'}
                  p={['5', '5', '8', '10']}
                  pt={0}

                    m={'auto'}
                    >
                  As an influencer, you can use Givaa to give back to the community that supports you. Raise funds for causes you're passionate about or set up giveaways to thank your followers. It's a great way to deepen your connection with your audience.</Text>
                   </Stack>
    </Center>
</Stack>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
            </Stack>
        </Stack>
       </Container>
    )
}