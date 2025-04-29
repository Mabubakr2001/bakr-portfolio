import Nav from "./components/Nav"
import Face from "./components/Face"
import Skills from "./components/skills/Skills"
import About from "./components/About"
import Experiences from "./components/experience/Experiences"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/Footer"

export default function App() {
  return <>
    <header className="sticky top-0 bg-white z-10 shadow-sm mx-auto max-w-7xl">
      <Nav />
    </header>
    <main className="mx-auto max-w-7xl px-8">
      <Face />
      <Skills />
      <About />
      <Experiences />
      <Portfolio />
      <Contact />
    </main>
    <footer className="py-8 bg-gray-200">
      <Footer />
    </footer>
  </>
}