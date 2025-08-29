import MyPhoto from "../../public/images/myphoto.webp"
import Links from "./Links"

export default function Face() {
  return (
    <section className="text-center my-14">
      <img src={MyPhoto} alt="Mohamed Aboubakr' Image" width="140" height="140" className="overflow-hidden rounded-full mx-auto mb-6"/>
      <h1 className="text-6xl font-bold mb-4">Mohamed Aboubakr</h1>
      <h2 className="text-3xl font-medium mb-4">Fullstack Developer</h2>
      <h3 className="text-gray-500 text-2xl font-medium mb-6">Cairo, EGY</h3>
      <Links />
    </section>
  )
}
