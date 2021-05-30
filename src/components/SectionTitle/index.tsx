/** @jsx h */
import { FunctionComponent, h } from "preact"

import styled from "styled-components"

type ContainerProps = {
  title: string
  subTitle: string
}

type Props = {
  className?: string;
} & ContainerProps

const Component: FunctionComponent<Props> = (props) => (
  <div className={props.className}>
    <h2 className="title">{props.title}</h2>
    <h3 className="subTitle">{props.subTitle}</h3>
  </div>
)

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;

  .title {
    color: #03cafc;
    font-size: 35px;
  }

  .subTitle {
    color: #03a1fc;
    font-size: 12px;
  }
`;

const Container: FunctionComponent<ContainerProps> = props => (
  <StyledComponent {...props} />
)

export default Container
