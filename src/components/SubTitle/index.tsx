/*** @jsx h */
import { FunctionComponent, h } from "preact"

import styled from "styled-components"

export type ContainerProps = {
  subTitle: string;
}

type Props = {
  className?: string;
} & ContainerProps

const Component: FunctionComponent<Props> = props => (
  <h3 className={props.className}>{props.subTitle}</h3>
)

const StyledComponent = styled(Component)`
  color: #03a1fc;
  display: inline-block;
  font-size: 12px;
  margin: 0;
`

const Container: FunctionComponent<ContainerProps> = (props) => (
  <StyledComponent {...props} />
)

export default Container
