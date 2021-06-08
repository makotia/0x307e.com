/** @jsx h */
import { h } from "preact";

import { SkillProps } from "@/components/SkillCardContainer";
import { BiBed, BiBuildingHouse, BiCamera, BiHeadphone, BiWalk } from "react-icons/bi";
import { CgCreditCard } from "react-icons/cg";
import { DiGit, DiGo, DiLinux, DiReact, DiRust } from "react-icons/di";
import { SiDocker, SiKubernetes, SiNetflix, SiNim, SiNintendoswitch, SiRaspberrypi, SiTypescript } from "react-icons/si";

export const goodSkils: SkillProps[] = [
  {
    skillName: "React",
    icon: <DiReact size={40} />,
  },
  {
    skillName: "Go",
    icon: <DiGo size={40} />,
  },
  {
    skillName: "Linux",
    icon: <DiLinux size={40} />,
  },
  {
    skillName: "TypeScript",
    icon: <SiTypescript size={35} />,
  },
  {
    skillName: "Git",
    icon: <DiGit size={40} />,
  },
  {
    skillName: "Docker",
    icon: <SiDocker size={35} />,
  },
]

export const interestedSkills: SkillProps[] = [
  {
    skillName: "Rust",
    icon: <DiRust size={40} />,
  },
  {
    skillName: "Nim",
    icon: <SiNim size={35} />,
  },
  {
    skillName: "k8s",
    icon: <SiKubernetes size={35} />,
  },
  {
    skillName: "IoT",
    icon: <SiRaspberrypi size={35} />,
  },
  {
    skillName: "FinTech",
    icon: <CgCreditCard size={35} />,
  },
  {
    skillName: "ReTech",
    icon: <BiBuildingHouse size={40} />,
  },
]

export const freeSkills: SkillProps[] = [
  {
    skillName: "Walking",
    icon: <BiWalk size={40} />,
  },
  {
    skillName: "Photo",
    icon: <BiCamera size={40} />,
  },
  {
    skillName: "Music",
    icon: <BiHeadphone size={40} />,
  },
  {
    skillName: "Gaming",
    icon: <SiNintendoswitch size={35} />,
  },
  {
    skillName: "Movie",
    icon: <SiNetflix size={35} />,
  },
  {
    skillName: "Sleep",
    icon: <BiBed size={40} />,
  },
]
