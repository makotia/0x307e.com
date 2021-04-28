/** @jsx h */
import { FunctionComponent, h } from "preact"

import Spacer from "@/components/Spacer"
import Title from "@/components/Title"
import { jobs, jobTypes } from "@/data/jobs"

import styles from "./index.module.css"

const Jobs: FunctionComponent = () => {
  return (
    <div>
      <Title title="Jobs" subTitle="お仕事" />
      <div>
        {jobs.map(j => (
          <div key={j.name}>
            <div className={styles.table}>
              <div>
                <p className={styles.tablePeriod}>
                  {j.start}〜{j.end}&nbsp;
                  {jobTypes[j.type]}
                </p>
                <Spacer height={4} />
                <p className={styles.tableName}>{j.name}</p>
                <Spacer height={8} spOnly />
              </div>
              <div>
                <p className={styles.tableContent}>{j.content}</p>
              </div>
            </div>
            <Spacer height={8} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jobs
