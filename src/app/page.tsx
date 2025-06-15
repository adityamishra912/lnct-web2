import Navbar from "./component/Navbar/Navbar";
import Intro from "./section/Intro/page";
import AboutSection from "./section/About/About";
import Alumni from "./section/Alumni/Alumni";
import Campus from "./section/Campus/Campus";
import Facility from "./section/Facility/Facility";
import Ranking from "./section/Ranking/Ranking";
import Program from "./section/Program/Program";
import Award from "./section/Award/Award";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Intro />
      <AboutSection />

      <section className="h-[450vh] md:h-[340vh] lg:h-[300vh] bg-no-repeat bg-fixed bg-cover" style={{ backgroundImage: 'url(/media/recognitionBackground.jpg)' }}>
        <Ranking />
        <Award />
        <div className="h-[70vh]"></div>
        <Alumni />
      </section>

      <Campus />
      <Facility />
      <Program />
    </div>
  );
}
