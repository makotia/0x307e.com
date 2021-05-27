/*** @jsx h */
import { FunctionComponent, h } from "preact"

import styled from "styled-components"

export type ContainerProps = {
  title: string;
}

type Props = {
  className?: string;
} & ContainerProps

const Component: FunctionComponent<Props> = props => (
  <h2 className={props.className}>{props.title}</h2>
)

const StyledComponent = styled(Component)`
  color: #03cafc;
  display: inline-block;
  font-size: 35px;
  margin: 0;
`

const Container: FunctionComponent<ContainerProps> = (props) => (
  <StyledComponent {...props} />
)

export default Container
