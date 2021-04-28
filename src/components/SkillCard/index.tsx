/** @jsx h */
import { ComponentChildren, FunctionalComponent, h } from "preact"

import Spacer, { SpacerNumbers } from "@/components/Spacer"

import styles from "./index.module.css"

type Props = {
  children: ComponentChildren;
  skillName: string;
  space?: SpacerNumbers;
}

const SkillCard: FunctionalComponent<Props> = ({ children, skillName, space = 4 }: Props) => (
  <div className={styles.skillCard}>
    <Spacer width={4} />
    {children}
    <Spacer width={space} />
    <p className={styles.skillName}>{skillName}</p>
  </div>
)

export default SkillCard
