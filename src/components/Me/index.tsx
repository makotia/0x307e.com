/** @jsx h */
import { FunctionComponent, h } from "preact"

import SkillCard from "@/components/SkillCard"
import Spacer from "@/components/Spacer"
import {
  BiBed,
  BiBuildingHouse,
  BiCamera,
  BiHeadphone,
  BiWalk
} from "react-icons/bi"
import { CgCreditCard } from "react-icons/cg"
import { DiReact, DiGo, DiLinux, DiGit, DiRust } from "react-icons/di"
import {
  SiDocker,
  SiKubernetes,
  SiNetflix,
  SiNim,
  SiNintendoswitch,
  SiRaspberrypi,
  SiTypescript
} from "react-icons/si"
import styled from "styled-components"

type Props = {
  className?: string;
}

const Component: FunctionComponent<Props> = (props) => (
  <div className={props.className}>
    <div className="wrapper">
      <Spacer height={32} />
      <div className="hero">
        <div className="heroContent">
          <p className="title">Hi!</p>
          <p className="title">I&apos;m makotia</p>
          <p className="subNotice">Icon is not me.</p>
        </div>
        <div className="heroIconContainer">
          <img
            className="heroIcon"
            src="https://github.com/makotia.png"
          />
        </div>
      </div>
      <Spacer height={32} />
      <p className="subTitle">I&apos;m good at ...</p>
      <Spacer height={16} />
      <div className="skillCardContainer">
        <SkillCard skillName="React">
          <DiReact size={40} />
        </SkillCard>
        <SkillCard skillName="Go">
          <DiGo size={40} />
        </SkillCard>
        <SkillCard skillName="Linux">
          <DiLinux size={40} />
        </SkillCard>
        <SkillCard skillName="TypeScript" space={8}>
          <SiTypescript size={35} />
        </SkillCard>
        <SkillCard skillName="Git">
          <DiGit size={40} />
        </SkillCard>
        <SkillCard skillName="Docker" space={8}>
          <SiDocker size={35} />
        </SkillCard>
      </div>
      <Spacer height={32} />
      <p className="subTitle">I&apos;m interested in ...</p>
      <Spacer height={16} />
      <div className="skillCardContainer">
        <SkillCard skillName="Rust">
          <DiRust size={40} />
        </SkillCard>
        <SkillCard skillName="Nim" space={8}>
          <SiNim size={35} />
        </SkillCard>
        <SkillCard skillName="k8s" space={8}>
          <SiKubernetes size={35} />
        </SkillCard>
        <SkillCard skillName="IoT" space={8}>
          <SiRaspberrypi size={35} />
        </SkillCard>
        <SkillCard skillName="FinTech" space={8}>
          <CgCreditCard size={35} />
        </SkillCard>
        <SkillCard skillName="ReTech">
          <BiBuildingHouse size={40} />
        </SkillCard>
      </div>
      <Spacer height={32} />
      <p className="subTitle">In my free time ...</p>
      <Spacer height={16} />
      <div className="skillCardContainer">
        <SkillCard skillName="Walking">
          <BiWalk size={40} />
        </SkillCard>
        <SkillCard skillName="Photo">
          <BiCamera size={40} />
        </SkillCard>
        <SkillCard skillName="Music">
          <BiHeadphone size={40} />
        </SkillCard>
        <SkillCard skillName="Gaming" space={8}>
          <SiNintendoswitch size={35} />
        </SkillCard>
        <SkillCard skillName="Movie">
          <SiNetflix size={35} />
        </SkillCard>
        <SkillCard skillName="Sleep">
          <BiBed size={40} />
        </SkillCard>
      </div>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
  min-height: 100vh;
  display: flex;
  justify-content: center;

  .wrapper {
    width: 100%;
    margin: auto 0;
  }

  .hero {
    display: flex;
    flex-direction: row;
  }

  .heroContent {
    width: 700px;
  }

  .heroIcon {
    width: 230px;
    border-radius: 10%;
  }

  .title {
    font-size: 100px;
  }

  .subNotice {
    color: gray;
  }

  .subTitle {
    font-size: 30px;
  }

  .skillCardContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: .5rem;
  }

  @media screen and (max-width: 1000px) {
    .hero {
      flex-direction: column-reverse;
    }

    .heroContent {
      width: 100%;
      text-align: center;
    }

    .heroIconContainer {
      width: 100%;
      text-align: center;
    }

    .heroIcon {
      width: 200px;
    }

    .title {
      font-size: 50px;
    }

    .subTitle {
      font-size: 25px;
    }
  }
`;

const Container: FunctionComponent = props => (
  <StyledComponent {...props} />
)

export default Container
