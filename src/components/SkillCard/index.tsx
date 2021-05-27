/** @jsx h */
import { ComponentChildren, FunctionalComponent, h } from "preact"

import Spacer, { SpacerNumbers } from "@/components/Spacer"
import styled from "styled-components"

type ContainerProps = {
  children: ComponentChildren
  skillName: string
  space?: SpacerNumbers
}

type Props = {
  className?: string;
} & ContainerProps

const Component: FunctionalComponent<Props> = ({
  children,
  skillName,
  space = 4,
  className,
}: Props) => (
  <div className={className}>
    <Spacer width={4} />
    {children}
    <Spacer width={space} />
    <p className="skillName">{skillName}</p>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: row;
  padding: .5rem;
  font-size: 1.3rem;
  background: #f3f3f3;
  border-radius: 10px;

  .skillName {
    margin: auto 0;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #333;
  }
`;

const Container: FunctionalComponent<ContainerProps> = props => (
  <StyledComponent {...props} />
)

export default Container
