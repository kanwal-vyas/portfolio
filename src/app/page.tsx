import Nav from "@/components/ui/Nav";
import Divider from "@/components/ui/Divider";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Trajectory from "@/components/sections/Trajectory";
import CaseStudy from "@/components/sections/CaseStudy";
import Exploration from "@/components/sections/Exploration";
import DataAnalytics from "@/components/sections/DataAnalytics";
import Leadership from "@/components/sections/Leadership";
import StoriesSystems from "@/components/sections/StoriesSystems";
import DecisionJournal from "@/components/sections/DecisionJournal";
import Writing from "@/components/sections/Writing";
import BeyondAcademics from "@/components/sections/BeyondAcademics";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Divider />
      <Philosophy />
      <Divider />
      <Trajectory />
      <Divider />
      <CaseStudy />
      <Divider />
      <Exploration />
      <Divider />
      <DataAnalytics />
      <Divider />
      <Leadership />
      <Divider />
      <StoriesSystems />
      <Divider />
      <DecisionJournal />
      <Divider />
      <Writing />
      <Divider />
      <BeyondAcademics />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
}
