/** @jsx h */
import { FunctionComponent, h } from "preact"

import styles from "./index.module.css"

const ErrorPage: FunctionComponent = () => (
  <div className={styles.container}>
    <p>エラー</p>
  </div>
)

export default ErrorPage
