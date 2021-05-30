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
    <div className="container">
      <SectionTitle title="SNS" subTitle="各種アカウント" />
      <Spacer height={8} />
      <div className="iconContainer">
        <img className="icon" src="https://github.com/makotia.png" />
        <Spacer height={8} />
        <p className="name">makotia</p>
        <p className="subName">a.k.a. Makoto Ito</p>
        <Spacer height={32} />
      </div>
      <div className="accounts">
        {accounts.map((a) => (
          <a
            key={a.url}
            className="tableContainer"
            href={a.url}
            target="_blank"
            rel="noreferrer"
          >
            <Spacer height={8} />
            <div className="table">
              <p className="tableKey">{a.serviceName}</p>
              <p className="tableValue">@{a.screenName}</p>
            </div>
            <Spacer height={8} />
          </a>
        ))}
      </div>
    </div>
  </div>
)

const StyledComponent = styled(Component)`
min-height: 100vh;
justify-content: center;
display: flex;

.container {
  margin: auto 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.iconContainer {
  text-align: center;
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: .5rem;
}

.tableContainer {
  background-color: #f3f3f3;
  margin: 4px 0;
  border-radius: 10px;
}

.table {
  width: 100px;
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  padding: 0.5rem;
  gap: .5rem 0;
}

.tableKey {
  font-size: 20px;
}

.tableValue {
  opacity: 0.8;
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
