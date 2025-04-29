import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Links() {
  return (
    <div className="flex justify-center items-center space-x-6">
      <a href="https://github.com/Mabubakr2001" target="_blank" aria-label="Open GitHub" rel="noopener noreferrer">
        <FiGithub size={25}/>
      </a>
      <a href="https://linkedin.com/in/moaboubakr2001" target="_blank" aria-label="Open LinkedIn" rel="noopener noreferrer">
        <FiLinkedin size={25}/>
      </a>
      <a href="mailto:mabobakr365@gmail.com" target="_blank" aria-label="Sent message through Gmail" rel="noopener noreferrer" className="-mb-2">
        <MdOutlineMailOutline size={25}/>
      </a>
    </div>
  )
}
