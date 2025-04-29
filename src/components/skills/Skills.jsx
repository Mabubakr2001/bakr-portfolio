import HTML from "../../../public/images/html.webp";
import CSS from "../../../public/images/css.webp";
import JavaScript from "../../../public/images/js.webp";
import React from "../../../public/images/react.webp";
import Redux from "../../../public/images/redux.webp";
import Git from "../../../public/images/git.webp";
import GitHub from "../../../public/images/github.webp";
import TailwindCSS from "../../../public/images/tailwindcss.webp";
import Java from "../../../public/images/java.webp"
import OOP from "../../../public/images/OOP.webp"
import Algorithms from "../../../public/images/algorithms.webp"
import DataStructures from "../../../public/images/data-structures.webp"
import Skill from "./Skill";
import SectionHeader from "../SectionHeader";


export default function Skills() {
  return (
    <section className="mb-14">
      <SectionHeader sectionName="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Skill icon={<img src={HTML}></img>} name="HTML"/>
        <Skill icon={<img src={CSS}></img>} name="CSS"/>
        <Skill icon={<img src={JavaScript}></img>} name="JavaScript ES5/ES6+"/>
        <Skill icon={<img src={React}></img>} name="ReactJS"/>
        <Skill icon={<img src={Redux}></img>} name="Redux"/>
        <Skill icon={<img src={Git}></img>} name="Git"/>
        <Skill icon={<img src={GitHub}></img>} name="GitHub Actions"/>
        <Skill icon={<img src={TailwindCSS}></img>} name="TailwindCSS"/>
        <Skill icon={<img src={Java}></img>} name="Java"/>
        <Skill icon={<img src={OOP} alt="OOP"></img>} name="OOP"/>
        <Skill icon={<img src={Algorithms} alt="Algorithms Icon"></img>} name="Algorithms"/>
        <Skill icon={<img src={DataStructures} alt="Data Structures"></img>} name="Data Structures"/>
      </div>
    </section>
  )
}
