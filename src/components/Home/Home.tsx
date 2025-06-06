import Header from "../General/Header";
import Footer from "../General/Footer";
import NavigationButtons from "./components/Navigation/NavigationButtons";
import SponsorPartner from "./components/SponsorPartner";
import WelcomeMessage from "./components/WelcomeMessage";
import TourInstructionsHome from "./components/TourInstructionsHome";

import { MainContainer } from "../styled_components";

function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <NavigationButtons />
        <article>
          <section>
            <WelcomeMessage />
            <TourInstructionsHome />
          </section>
          <section>
            <SponsorPartner />
          </section>
        </article>
      </MainContainer>
      <Footer />
    </>
  );
}

export default Home;
