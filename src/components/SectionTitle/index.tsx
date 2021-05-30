/** @jsx h */
import { FunctionComponent, h } from "preact"

import styled from "styled-components"

import Title from "../Title"

type ContainerProps = {
  title: string
  subTitle: string
}

type Props = {
  className?: string;
} & ContainerProps

const Component: FunctionComponent<Props> = (props) => (
  <Title {...props} />
)

const StyledComponent = styled(Component)`
  text-align: center;
  width: 100%;
`;

const Container: FunctionComponent<ContainerProps> = props => (
  <StyledComponent {...props} />
)

export default Container
