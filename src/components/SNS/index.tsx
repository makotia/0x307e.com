/** @jsx h */
import { h, FunctionComponent } from "preact"

import SectionTitle from "@/components/SectionTitle"
import Spacer from "@/components/Spacer"
import { accounts } from "@/data/accounts"
import styled from "styled-components"

type Props = {
  className?: string;
}

const Component: FunctionComponent<Props> = (props) => (
  <div className={props.className}>
    <SectionTitle title="SNS" subTitle="各種アカウント" />
    <div className="grid">
      <div className="gridChildLeft">
        <img className="icon" src="https://github.com/makotia.png" />
        <Spacer height={8} />
        <p className="name">makotia</p>
        <p className="subName">a.k.a. Makoto Ito</p>
        <Spacer height={16} spOnly />
      </div>
      <div className="gridChildRight">
        <div className="accounts">
          {accounts.map((a) => (
            <div key={a.url} className="tableContainer">
              <Spacer height={8} />
              <div className="table">
                <p className="tableKey">{a.serviceName}</p>
                <Spacer width={16} />
                <a
                  href={a.url}
                  className="tableValue"
                  target="_blank"
                  rel="noreferrer"
                >
                  @{a.screenName}
                </a>
              </div>
              <Spacer height={8} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.gridChildLeft {
  text-align: center;
  margin-left: auto;
  margin-right: 30px;
}

.gridChildRight {
  text-align: center;
}

.icon {
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

.name {
  font-size: 23px;
}

.subName {
  font-size: 15px;
  opacity: 0.8;
}

.accounts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.tableContainer {
  background-color: #f3f3f3;
  width: 250px;
  margin: 4px 0;
  border-radius: 10px;
}

.table {
  display: flex;
  flex-direction: row;
}

.tableKey {
  width: 150px;
  font-size: 20px;
  text-align: right;
}

.tableValue {
  width: 150px;
  align-self: center;
  text-align: left;
  opacity: 0.8;
}

@media screen and (max-width: 1000px) {
  .gridChildLeft {
    margin: 0px;
  }

  .table {
    margin: 0 auto;
  }

  .tableContainer {
    width: 100%;
  }
}

@media (prefers-color-scheme: dark) {
  .tableContainer {
    background-color: #333;
  }
}
`;

const Container: FunctionComponent = props => (
  <StyledComponent {...props} />
)

export default Container
