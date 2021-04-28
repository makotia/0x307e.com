/** @jsx h */
import { ComponentChildren, FunctionComponent, h } from "preact"

import styles from "./index.module.css"

type Props = {
  children: ComponentChildren
}

const Container: FunctionComponent<Props> = ({ children }: Props) => (
  <div className={styles.container}>
    {children}
  </div>
)

export default Container
