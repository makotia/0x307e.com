/** @jsx h */
import { ComponentChildren, FunctionComponent, h } from "preact"

import SkillCard from "@/components/SkillCard"
import Spacer from "@/components/Spacer"
import styled from "styled-components"

export type SkillProps = {
  icon: ComponentChildren;
  skillName: string;
}

type OuterProps = {
  subTitle: string;
  skills: SkillProps[];
}

type Props = {
  className?: string;
} & OuterProps

const Component: FunctionComponent<Props> = (props) => (
  <div className={props.className}>
    <SubTitle>{props.subTitle}</SubTitle>
    <Spacer height={16} />
    <SkillCardContainer>
      {props.skills.map(s => (
        <SkillCard
          key={s.skillName}
          skillName={s.skillName}
        >
          {s.icon}
        </SkillCard>
      ))}
    </SkillCardContainer>
  </div>
)

const SubTitle = styled.p`
  font-size: 30px;
  @media screen and (max-width: 1000px) {
    font-size: 25px;
  }
`;

const StyledComponent = styled(Component)``;

const SkillCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: .5rem;
`;

const Container: FunctionComponent<OuterProps> = props => (
  <StyledComponent {...props} />
)

export default Container
