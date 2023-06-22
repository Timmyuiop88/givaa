
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
    Progress
  } from "@chakra-ui/react";
export default function Fund(props){
    
    return(

        <Box
        w={["400px","380px","400px","400px"]}
        h={["500px","450px","430px","430px"]}
        bg={"#FFFFFF"}
        justifyContent={"center"}
        pt={4}
        borderRadius={'16px'}
        m={'auto'}
      >
        <Box borderTopLeftRadius={'10px'}  borderTopRightRadius={'10px'} width={"95%"} height={"130px"} bg={"#E8F6FF"} m={"auto"}></Box>
        <Text
        fontWeight={700}
        pt={10}
        lineHeight={"150%"}
        color={"#434A5B"}
        textAlign={"left"}
        pl={4}
        >
{props.fundraiserName}
        </Text>
        <Text
        fontWeight={500}
        pt={2}
        lineHeight={"150%"}
        color={"#434A5B"}
        textAlign={"left"}
        pl={4}
        >
{props.Description}
        </Text>
        <Text
        fontWeight={500}
        pt={5}
        lineHeight={"150%"}
        color={"#434A5B"}
        textAlign={"left"}
        pl={4}
        >
By {props.CreatedBy}
        </Text>
        <Progress mt={5} ml={4} mr={4} colorScheme='green' size='sm' value={props.Percent} />
        <Stack pt={5} pl={4} width={'100%'} justifyContent={'space-between'} direction={'row'}  pr={[5,5,10,10]}>
            <Box>
                <Text
                  fontWeight={500}
             
                  lineHeight={"150%"}
                  color={"#434A5B"}
                  textAlign={"left"}
              
                >
                        N {props.Amount}
                </Text>
                <Text
                  fontWeight={700}
            
                  lineHeight={"150%"}
                  color={"#434A5B"}
                  textAlign={"left"}
                
                >
                        Donations
                </Text>
            </Box>
            <Box>
                <Text
                 fontWeight={500}
             
                 lineHeight={"150%"}
                 color={"#434A5B"}
                 textAlign={"left"}
                 
                
                >
                   {props.Percent}%
                </Text>
                <Text
                fontWeight={700}
            
                lineHeight={"150%"}
                color={"#434A5B"}
                textAlign={"left"}
                
                >
                        Funded
                </Text>
            </Box>
            <Box>
                <Text
                 fontWeight={500}
             
                 lineHeight={"150%"}
                 color={"#434A5B"}
                 textAlign={"left"}
            
                >
                    {props.TimeRemaining}
                </Text>
                <Text
                fontWeight={700}
            
                lineHeight={"150%"}
                color={"#434A5B"}
                textAlign={"left"}
              
                >
                      Days Left
                </Text>
            </Box>
        </Stack>
      </Box>
    )
}