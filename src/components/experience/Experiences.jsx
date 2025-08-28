import SectionHeader from "../SectionHeader"
import Experience from "./Experience"
import TP from "../../../public/images/teleperformance.webp"
import Sutherland from "../../../public/images/sutherland.webp"

export default function Experiences() {
  return (
    <section className="mb-14" id="experience">
      <SectionHeader sectionName="Experience"/>
      <Experience companyImg={<img src={TP} alt="Teleperformance Photo" className="w-24 h-24 rounded-full mb-5 md:mb-0"/>} companyName="Teleperformance" accountName="UPS" title="GBS Customer Service Representative" period="Sep 2024 - Present" rule="Here at UPS, our job is to make sure that the customer’s package will be delivered at the time, and won’t get lost or something. Our call starts with taking the tracking number of the package and starting to pull up the information about that package. We start looking at the scans of the package to tell the customer where exactly this package is located while we’re speaking. We as UPS are making sure that everything will be fine in case that package got lost, damaged, or went under any other circumstances."/>
      <Experience companyImg={<img src={Sutherland} alt="Sutherland Photo" className="w-24 h-24 rounded-full mb-5 md:mb-0"/>} companyName="Sutherland" accountName="Comcast" title="Account Management Specialist" period="Feb 2024 - Aug 2024" rule="Our job at Sutherland was about handling everything, the TV, the landline, the home security, and the mobile. Our call starts with taking the account number, and after pulling up the account, the whole thing starts. First, we would discuss the bill. Adding and removing channels to and from the TV, finding the best offer that has all the old features but with a lower price. Selling SIM cards to the customer and checking if there is any free line that we could give to the customer to make his day better."/>
    </section>
  )
}
