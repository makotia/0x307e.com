/** @jsx h */
import { h, FunctionalComponent } from "preact"

import Container from "@/components/Container"
import SNS from "@/components/SNS"
import Spacer from "@/components/Spacer"

const Home: FunctionalComponent = () => {
  return (
    <div>
      <Container>
        <SNS />
        <Spacer height={64} />
      </Container>
    </div>
  )
}

export default Home
