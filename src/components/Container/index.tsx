/** @jsx h */
import { ComponentChildren, FunctionComponent, h } from "preact"

import styled from "styled-components"

export type ContainerProps = {
  children: ComponentChildren
}

type Props = {
  className?: string;
} & ContainerProps

const Component: FunctionComponent<Props> = props => (
  <div className={props.className}>
    <div>{props.children}</div>
  </div>
)

const StyledComponent = styled(Component)`
  max-width: 100vw;
  width: 1000px;
  margin: 0 auto;
  > .div {
    padding: 0 .5rem;
  }
`;

const Container: FunctionComponent<ContainerProps> = props => (
  <StyledComponent {...props} />
)

export default Container
