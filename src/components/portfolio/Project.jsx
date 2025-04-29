import UsedSkills from "./UsedSkills"
import MoreInfoBtn from "./MoreInfoBtn"

export default function Project({image, name, description, usedSkills, link}) {
  return (
    <div className="shadow-md rounded-lg overflow-hidden md:flex">
      <div className="md:w-1/3">
        {image}
      </div>
      <div className="md:w-2/3 p-10">
        <h1 className="text-4xl font-bold mb-4">{name}</h1>
        <p className="text-gray-500 text-[1.6rem] mb-6">{description}</p>
        <UsedSkills usedSkills={usedSkills}/>
        <div>
          <MoreInfoBtn link={link}/>
        </div>
      </div>
    </div>
  )
}
