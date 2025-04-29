import Logo from "../../public/images/mylogo.webp";

export default function Nav() {
  return (
    <nav className="flex justify-between py-3 pr-7">
      <a href="/">
        <img src={Logo} width="60" height="60" alt="Mohamed Aboubakr's Logo" loading="lazy" decoding="async"></img>
      </a>
      <ul className="flex justify-between items-center">
        <li>
          <a className="text-3xl font-medium cursor-pointer hover:underline" href="#about">About</a>
        </li>
        <li>
          <a className="text-3xl ml-8 font-medium cursor-pointer hover:underline" href="#experience">Experience</a>
        </li>
        <li>
          <a className="text-3xl font-medium ml-8 cursor-pointer hover:underline" href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a className="text-3xl font-medium ml-8 cursor-pointer hover:underline" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
