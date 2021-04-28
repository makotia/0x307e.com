/** @jsx h */
import { FunctionComponent, h } from "preact"

import styles from "./index.module.css"

type SpacerNumbers = 0 | 2 | 4 | 8 | 16 | 32 | 64 | 128

type Props = {
  width?: SpacerNumbers,
  height?: SpacerNumbers,
  spOnly?: boolean;
  pcOnly?: boolean;
}

const Spacer: FunctionComponent<Props> = ({ width = 0, height = 0, spOnly, pcOnly }: Props) => {
  const classNames: string[] = []
  if (spOnly) classNames.push(styles.spOnly)
  if (pcOnly) classNames.push(styles.pcOnly)
  if (!spOnly && !pcOnly) classNames.push(styles.default)

  return <span className={classNames.join(" ")} style={{ width: width, height: height }} />
}

export default Spacer
