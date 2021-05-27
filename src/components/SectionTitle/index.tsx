/** @jsx h */
import { Fragment, FunctionComponent, h } from "preact"

import Spacer from "@/components/Spacer"
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
  <Fragment>
    <Spacer height={32} />
    <Title {...props} />
    <Spacer height={8} />
    {/* <StyledSubText {...props} /> */}
    <Spacer height={32} />
  </Fragment>
)

const StyledComponent = styled(Component)`
  text-align: center;
  width: 100%;
`;

const Container: FunctionComponent<ContainerProps> = props => (
  <StyledComponent {...props} />
)

export default Container
