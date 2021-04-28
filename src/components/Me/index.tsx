/** @jsx h */
import { FunctionComponent, h } from "preact"

import SkillCard from "@/components/SkillCard"
import Spacer from "@/components/Spacer"
import { BiBed, BiBuildingHouse, BiCamera, BiHeadphone, BiWalk } from "react-icons/bi"
import { CgCreditCard } from "react-icons/cg"
import { DiReact, DiGo, DiLinux, DiGit, DiRust } from "react-icons/di"
import { SiDocker, SiKubernetes, SiNetflix, SiNim, SiNintendoswitch, SiRaspberrypi, SiTypescript } from "react-icons/si"

import styles from "./index.module.css"

const Me: FunctionComponent = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <Spacer height={32} />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.title}>Hi!</p>
          <p className={styles.title}>I&apos;m makotia</p>
          <p className={styles.subNotice}>Icon is not me.</p>
        </div>
        <div className={styles.heroIconContainer}>
          <img className={styles.heroIcon} src="https://github.com/makotia.png" />
        </div>
      </div>
      <Spacer height={32} />
      <p className={styles.subTitle}>I&apos;m good at ...</p>
      <Spacer height={16} />
      <div className={styles.skillCardContainer}>
        <SkillCard skillName="React">
          <DiReact size={40} />
        </SkillCard>
        <SkillCard skillName="Go">
          <DiGo size={40} />
        </SkillCard>
        <SkillCard skillName="Linux">
          <DiLinux size={40} />
        </SkillCard>
        <SkillCard skillName="TypeScript" space={8}>
          <SiTypescript size={35} />
        </SkillCard>
        <SkillCard skillName="Git">
          <DiGit size={40} />
        </SkillCard>
        <SkillCard skillName="Docker" space={8}>
          <SiDocker size={35} />
        </SkillCard>
      </div>
      <Spacer height={32} />
      <p className={styles.subTitle}>I&apos;m interested in ...</p>
      <Spacer height={16} />
      <div className={styles.skillCardContainer}>
        <SkillCard skillName="Rust">
          <DiRust size={40} />
        </SkillCard>
        <SkillCard skillName="Nim" space={8}>
          <SiNim size={35} />
        </SkillCard>
        <SkillCard skillName="k8s" space={8}>
          <SiKubernetes size={35} />
        </SkillCard>
        <SkillCard skillName="IoT" space={8}>
          <SiRaspberrypi size={35} />
        </SkillCard>
        <SkillCard skillName="FinTech" space={8}>
          <CgCreditCard size={35} />
        </SkillCard>
        <SkillCard skillName="ReTech">
          <BiBuildingHouse size={40} />
        </SkillCard>
      </div>
      <Spacer height={32} />
      <p className={styles.subTitle}>In my free time ...</p>
      <Spacer height={16} />
      <div className={styles.skillCardContainer}>
        <SkillCard skillName="Walking">
          <BiWalk size={40} />
        </SkillCard>
        <SkillCard skillName="Photo">
          <BiCamera size={40} />
        </SkillCard>
        <SkillCard skillName="Music">
          <BiHeadphone size={40} />
        </SkillCard>
        <SkillCard skillName="Gaming" space={8}>
          <SiNintendoswitch size={35} />
        </SkillCard>
        <SkillCard skillName="Movie">
          <SiNetflix size={35} />
        </SkillCard>
        <SkillCard skillName="Sleep">
          <BiBed size={40} />
        </SkillCard>
      </div>
    </div>
  </div>
)

export default Me
