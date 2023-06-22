
import Nav from "./nav"
import Hero from "./hero"
import Features from "./features"
import About from "./about"
import HowItWorks from "./how_it_works"
import Who from "./whoItsFor"
import Fundraiser from "./fundraiser"
import Getstarted from "./getStarted"



export default function Home() {
return(
<div className="app">

  <div className="hero">
    <Nav/>
    <Hero/>
</div>
  <Features/>
  <HowItWorks/>
  <About/>
  <Who/>
  <Fundraiser/>
  <Getstarted/>
</div>
)

}
