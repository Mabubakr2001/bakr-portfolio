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
        <Skill icon={<img src={HTML} alt="HTML image" width="24" height="24"></img>} name="HTML"/>
        <Skill icon={<img src={CSS} alt="CSS image" width="24" height="24"></img>} name="CSS"/>
        <Skill icon={<img src={JavaScript} alt="JavaScript image" width="24" height="24"></img>} name="JavaScript ES5/ES6+"/>
        <Skill icon={<img src={React} alt="ReactJS image" width="24" height="24"></img>} name="ReactJS"/>
        <Skill icon={<img src={Redux} alt="Redux image" width="24" height="24"></img>} name="Redux"/>
        <Skill icon={<img src={Git} alt="Git image" width="24" height="24"></img>} name="Git"/>
        <Skill icon={<img src={GitHub} alt="GitHub image" width="24" height="24"></img>} name="GitHub Actions"/>
        <Skill icon={<img src={TailwindCSS} alt="TailwindCSS image" width="24" height="24"></img>} name="TailwindCSS"/>
        <Skill icon={<img src={Java} alt="Java image" width="24" height="24"></img>} name="Java"/>
        <Skill icon={<img src={OOP} alt="Object-Oriented programming image" width="24" height="24"></img>} name="OOP"/>
        <Skill icon={<img src={Algorithms} alt="Algorithms image" width="24" height="24"></img>} name="Algorithms"/>
        <Skill icon={<img src={DataStructures} alt="Data Structures image" width="24" height="24"></img>} name="Data Structures"/>
      </div>
    </section>
  )
}
