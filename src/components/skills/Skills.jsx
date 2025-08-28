import HTML from "../../../public/images/html.webp";
import CSS from "../../../public/images/css.webp";
import JavaScript from "../../../public/images/js.webp";
import React from "../../../public/images/react.webp";
import Git from "../../../public/images/git.webp";
import TailwindCSS from "../../../public/images/tailwindcss.webp";
import Firebase from "../../../public/images/firebase.webp"
import Java from "../../../public/images/java.webp"
import SpringBoot from "../../../public/images/spring-boot.webp"
import RestAPIs from "../../../public/images/rest-api.webp"
import JWT from "../../../public/images/jwt.webp"
import Swagger from "../../../public/images/swagger.webp"
import MySQL from "../../../public/images/mysql.webp"
import Postman from "../../../public/images/postman.webp"
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
        <Skill icon={<img src={Git} alt="Git image" width="24" height="24"></img>} name="Git"/>
        <Skill icon={<img src={TailwindCSS} alt="TailwindCSS image" width="24" height="24"></img>} name="TailwindCSS"/>
        <Skill icon={<img src={Firebase} alt="Firebase image" width="24" height="24"></img>} name="Firebase"/>
        <Skill icon={<img src={Java} alt="Java image" width="24" height="24"></img>} name="Java"/>
        <Skill icon={<img src={SpringBoot} alt="Spring Boot image" width="24" height="24"></img>} name="Spring Boot"/>
        <Skill icon={<img src={RestAPIs} alt="Rest APIs image" width="24" height="24"></img>} name="Rest APIs"/>
        <Skill icon={<img src={JWT} alt="JSON web token image" width="24" height="24"></img>} name="JWT"/>
        <Skill icon={<img src={Swagger} alt="Swagger image" width="24" height="24"></img>} name="Swagger"/>
        <Skill icon={<img src={MySQL} alt="MySQL image" width="24" height="24"></img>} name="MySQL"/>
        <Skill icon={<img src={Postman} alt="Postman image" width="24" height="24"></img>} name="Postman"/>
        <Skill icon={<img src={OOP} alt="Object-Oriented programming image" width="24" height="24"></img>} name="OOP"/>
        <Skill icon={<img src={Algorithms} alt="Algorithms image" width="24" height="24"></img>} name="Algorithms"/>
        <Skill icon={<img src={DataStructures} alt="Data Structures image" width="24" height="24"></img>} name="Data Structures"/>
      </div>
    </section>
  )
}
