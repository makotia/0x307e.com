/** @jsx h */
import { FunctionComponent, h } from "preact"

import SectionTitle from "@/components/SectionTitle"
import Spacer from "@/components/Spacer"
import { jobs, jobTypes } from "@/data/jobs"
import styled from "styled-components"

type Props = {
  className?: string;
}

const Component: FunctionComponent<Props> = (props) => {
  return (
    <div className={props.className}>
      <SectionTitle title="Jobs" subTitle="お仕事" />
      <div>
        {jobs.map((j) => (
          <div key={j.name}>
            <div className="table">
              <div>
                <p className="tablePeriod">
                  {j.start}〜{j.end}&nbsp;
                  {jobTypes[j.type]}
                </p>
                <Spacer height={4} />
                <p className="tableName">{j.name}</p>
                <Spacer height={8} spOnly />
              </div>
              <div>
                <p className="tableContent">{j.content}</p>
              </div>
            </div>
            <Spacer height={8} />
          </div>
        ))}
      </div>
    </div>
  )
}

const StyledComponent = styled(Component)`
  .table {
    display: grid;
    grid-template-columns: 400px 1fr;
    min-height: 8rem;
    line-height: 1.8rem;
    background-color: #f3f3f3;
    border-radius: 10px;
    padding: .5rem;
  }

  .tablePeriod {
    color: gray;
    font-size: 0.8rem;
  }

  .tableName {
    font-size: 24px;
  }

  .tableContent {
    white-space: pre-line;
    opacity: 0.8;
  }

  @media screen and (max-width: 1000px) {
    .table {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-color-scheme: dark) {
    .table {
      background-color: #333;
    }
  }
`;

const Container: FunctionComponent = props => (
  <StyledComponent {...props} />
)

export default Container
