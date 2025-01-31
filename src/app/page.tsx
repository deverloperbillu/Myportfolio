import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Contactus from "./components/Contactus";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import './globals.css';

export default function Home() {
  return (
    <>
      <Banner/>
      <Services/>
      <Portfolio/>
      <Resume/>
      <Workflow/>
      <Clients/>
      <Contactus/>
    </>
  );
}
