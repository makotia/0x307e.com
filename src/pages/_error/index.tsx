/** @jsx h */
import { FunctionComponent, h } from "preact"

import styled from "styled-components"

type Props = {
  className?: string;
}

const Component: FunctionComponent<Props> = props => (
  <div className={props.className}>
    <p>エラー</p>
  </div>
)

const StyledComponent = styled(Component)`
  min-height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`

const Container: FunctionComponent = props => (
  <StyledComponent {...props} />
)

export default Container
