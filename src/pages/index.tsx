/** @jsx h */
import { h, FunctionalComponent } from "preact"

import Container from "@/components/Container"
import Head from "@/components/Head"
import Jobs from "@/components/Jobs"
import Me from "@/components/Me"
import SNS from "@/components/SNS"

const Home: FunctionalComponent = () => {
  return (
    <Container>
      <Head />
      <Me />
      <Jobs />
      <SNS />
    </Container>
  )
}

export default Home
