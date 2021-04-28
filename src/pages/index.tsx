/** @jsx h */
import { h, FunctionalComponent } from "preact"

import AboutMe from "@/components/AboutMe"
import Container from "@/components/Container"

const Home: FunctionalComponent = () => {
  return (
    <div>
      <Container>
        <AboutMe />
      </Container>
    </div>
  )
}

export default Home
