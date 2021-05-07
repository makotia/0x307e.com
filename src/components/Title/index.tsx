/** @jsx h */
import { FunctionComponent, h } from "preact"

import Spacer from "@/components/Spacer"

import styles from "./index.module.css"

type Props = {
  title: string
  subTitle: string
}

const Title: FunctionComponent<Props> = ({ title, subTitle }: Props) => {
  return (
    <div className={styles.container}>
      <Spacer height={32} />
      <h2 className={styles.text}>{title}</h2>
      <Spacer height={8} />
      <p className={styles.subText}>{subTitle}</p>
      <Spacer height={32} />
    </div>
  )
}

export default Title
