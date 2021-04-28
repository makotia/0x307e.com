/** @jsx h */
import { h, FunctionalComponent } from "preact"

import Container from "@/components/Container"
import Jobs from "@/components/Jobs"
import SNS from "@/components/SNS"
import Spacer from "@/components/Spacer"

const Home: FunctionalComponent = () => {
  return (
    <Container>
      <Jobs />
      <Spacer height={64} />
      <SNS />
      <Spacer height={64} />
    </Container>
  )
}

export default Home
