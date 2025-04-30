import SectionHeader from "./SectionHeader"
import MySecondPhoto from "../../public/images/my-second-photo.webp"

export default function About() {
  return (
    <section className="mb-14" id="about">
      <SectionHeader sectionName="About Me" />
      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-8 md:w-2/3 md:mb-0 md:mr-12">
          <p className="text-2xl">I'm a Software Developer based in Cairo, With a primary focus on frontend development, also passionate about backend, open source, problem solving. I'm that type of person who would rather prefer to dig deep into something and master it, instead of just going here and there without being pretty good in a certain skill. When I'm not coding, you can find me hanging out with some friends, playing football, or enjoying watching a movie or a serie.</p>
        </div>
        <img src={MySecondPhoto} width="200" height="200" alt="Mohamed Aboubakr's Photo" className="object-cover rounded-2xl"/>
      </div>
    </section>
  )
}
