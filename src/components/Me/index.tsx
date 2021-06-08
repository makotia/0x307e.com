/** @jsx h */
import { FunctionComponent, h } from "preact"

import Spacer from "@/components/Spacer"
import { freeSkills, goodSkils, interestedSkills } from "@/data/skills"
import styled from "styled-components"

import SkillCardContainer from "../SkillCardContainer"

type Props = {
  className?: string;
}

const Component: FunctionComponent<Props> = (props) => (
  <div className={props.className}>
    <div className="wrapper">
      <Spacer height={32} />
      <div className="hero">
        <div className="heroContent">
          <Title>Hi!</Title>
          <Title>I&apos;m makotia</Title>
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
      <SkillCardContainer subTitle={"I'm good at ..."} skills={goodSkils} />
      <Spacer height={32} />
      <SkillCardContainer subTitle="I'm interested in ..." skills={interestedSkills} />
      <Spacer height={32} />
      <SkillCardContainer subTitle="In my free time ..." skills={freeSkills} />
    </div>
  </div>
)

const Title = styled.p`
  font-size: 100px;
  line-height: 90px;

  @media screen and (max-width: 1000px) {
    font-size: 50px;
    line-height: 40px;
  }
`;

const SubTitle = styled.p`
  font-size: 30px;
  @media screen and (max-width: 1000px) {
    font-size: 25px;
  }
`;

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

  .subNotice {
    color: gray;
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
  }
`;

const Container: FunctionComponent = props => (
  <StyledComponent {...props} />
)

export default Container
