export default function Skill({icon, name}) {
  return (
    <div className="flex items-center bg-gray-100 px-9 py-3 rounded-full space-x-2">
      {icon}
      <span className="text-2xl font-medium ml-2">{name}</span>
    </div>
  )
}
