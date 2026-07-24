import Banner from "@/components/Banner";
import Clients from "@/components/Clients";
import Contactus from "@/components/Contactus";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";

// import 'aos/dist/aos.css';
export default function Home() {
  return (
    <>
      <Banner/>
      <Services/>
      <Portfolio/>
      <Resume/>
      <Packages/>
      <Workflow/>
      <Clients/>
      <Contactus/>
    </>
  );
}
