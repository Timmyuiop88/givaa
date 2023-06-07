
import Nav from "./nav"
import Hero from "./hero"
import Fonts from "./font"
import { Flex, Spacer } from '@chakra-ui/react'
export default function Home() {
return(
<div className="app">

  <div className="hero">
    <Nav/>
    <Hero/>
  </div>
  

</div>
)

}
