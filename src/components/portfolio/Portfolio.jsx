import SectionHeader from "../SectionHeader"
import TakeALookImg from "../../../public/images/take-a-look.webp"
import KanbanTask from "../../../public/images/kanban-task.webp"
import MemoryGame from "../../../public/images/memory-game.webp"
import Project from "./Project"

export default function Poftfolio() {
  return (
    <section className="mb-14" id="portfolio">
      <SectionHeader sectionName="Portfolio" />
      <div className="space-y-12">
        <Project image={<img src={TakeALookImg} alt="Take-A-Look Project" loading="lazy" decoding="async" className="w-full h-100 object-cover md:h-full"/>} name="Take A Look" description="A website that gathed all the information about any country that any tourist might visit." usedSkills={["HTML", "CSS", "JavaScript", "React", "Firebase"]} link="https://github.com/Mabubakr2001/TakeALook---Discover-The-World"/>
        <Project image={<img src={KanbanTask} alt="Kanban-Task Project" loading="lazy" decoding="async" className="w-full h-100 object-cover md:h-full"/>} name="Kanban Task" description="Helps people organize tasks by allowing them to create a board in which they can create however tasks they need to accomplish." usedSkills={["HTML", "CSS", "JavaScript"]} link="https://github.com/Mabubakr2001/Kanban-Task"/>
        <Project image={<img src={MemoryGame} alt="Memory-Game Project" loading="lazy" decoding="async" className="w-full h-100 object-cover md:h-full"/>} name="Memory Game" description="Funny and simple game about how people can train their subconscious mind by remembering the places of the images" usedSkills={["HTML", "CSS", "JavaScript"]} link="https://github.com/Mabubakr2001/Memory-game/"/>
      </div>
    </section>
  )
}
