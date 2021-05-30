/** @jsx h */
import { FunctionComponent, h } from "preact"

import styled from "styled-components"

import SubTitle from "../SubTitle"
import Title from "../Title"

type ContainerProps = {
  title: string
  subTitle: string
}

type Props = {
  className?: string;
} & ContainerProps

const Component: FunctionComponent<Props> = (props) => (
  <div className={props.className}>
    <Title title={props.title} />
    <SubTitle subTitle={props.subTitle} />
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`;

const Container: FunctionComponent<ContainerProps> = props => (
  <StyledComponent {...props} />
)

export default Container
