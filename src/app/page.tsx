import Intro from "./section/Intro/page";
import AboutSection from "./section/About/About";
import Alumni from "./section/Alumni/Alumni";
import Campus from "./section/Campus/Campus";
import Facility from "./section/Facility/Facility";
import Ranking from "./section/Ranking/Ranking";
import Award from "./section/Award/Award";
import ContactForm from "@/app/component/contact/page";

export default function Home() {

  return (
    <div>
      <Intro />
      <AboutSection />

      <section className="h-[450vh] md:h-[340vh] lg:h-[300vh] bg-no-repeat bg-fixed bg-cover" style={{ backgroundImage: 'url(/concern/unnamed.jpg)' }}>
        <Ranking />
        <Award />
        <div className="h-[70vh]"></div>
        <Alumni />
      </section>

      <Campus />
      <Facility />
      <div id="contact">
        <ContactForm/>
      </div>
    </div>
  );
}
