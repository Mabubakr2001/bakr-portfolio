export default function UsedSkills({usedSkills}) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {usedSkills.map((usedSkill, index) => <span key={index} className="text-[1.4rem] text-gray-600 font-medium px-5 py-2 bg-gray-300 rounded-full">{usedSkill}</span>)}
    </div>
  )
}
