/** @jsx h */
import { h, FunctionComponent } from "preact"

import Spacer from "@/components/Spacer"
import Title from "@/components/Title"
import { accounts } from "@/data/accounts"

import styles from "./index.module.css"

const AboutMe: FunctionComponent = () => {
  return (
    <div>
      <Title title="About Me" subTitle="自分について" />
      <div className={styles.grid}>
        <div className={styles.gridChildLeft}>
          <img
            className={styles.icon}
            src="https://github.com/makotia.png"
          />
          <Spacer height={8} />
          <p className={styles.name}>makotia</p>
          <p className={styles.subName}>a.k.a. Makoto Ito</p>
          <Spacer height={16} spOnly />
        </div>
        <div className={styles.gridChildRight}>
          <div className={styles.accounts}>
            {accounts.map(a => {
              return (
                <div
                  key={a.url}
                  className={styles.table}
                >
                  <p className={styles.tableKey}>{a.serviceName}</p>
                  <Spacer width={16} />
                  <a href={a.url} className={styles.tableValue} target="_blank" rel="noreferrer">@{a.screenName}</a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
