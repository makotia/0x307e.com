/** @jsx h */
import { FunctionComponent, h } from "preact"

import styled from "styled-components"

export type SpacerNumbers = 0 | 2 | 4 | 8 | 16 | 32 | 64 | 128

type ContainerProps = {
  width?: SpacerNumbers
  height?: SpacerNumbers
  spOnly?: boolean
  pcOnly?: boolean
}

type Props = {
  className?: string;
} & ContainerProps

const Component: FunctionComponent<Props> = ({
  width = 0,
  height = 0,
  spOnly,
  pcOnly,
  className,
}: Props) => {
  const classNames: string[] = []
  if (spOnly) classNames.push("spOnly")
  if (pcOnly) classNames.push("pcOnly")
  if (!spOnly && !pcOnly) classNames.push("default")

  return (
    <div className={className}>
      <span
        className={classNames.join(" ")}
        style={{ width: width, height: height }}
      />
    </div>
  )
}

const StyledComponent = styled(Component)`
.spOnly {
  display: none;
}

.pcOnly {
  display: block;
}

.default {
  display: block;
}

@media screen and (max-width: 1000px) {
  .spOnly {
    display: block;
  }

  .pcOnly {
    display: none;
  }
}
`;

const Container: FunctionComponent<ContainerProps> = props => (
  <StyledComponent {...props} />
)

export default Container
