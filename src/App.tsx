import styled from "styled-components"
// SECTIONS IMPORT
import HeroSection from "./components/HeroSection"
import MainSection from "./components/MainSection";
import GuidesSection from "./components/guides/GuidesSection";
import HypeSection from "./components/HypeSection";

function App() {
  return (
    <LandingPageLayout>
      <HeroSection />
      <MainSection />
      <GuidesSection />
      <HypeSection />
    </LandingPageLayout>
  )
}

export default App

const LandingPageLayout = styled.section`
  min-height: 100vh;
  width: 100%;
  background: rgb(30,39,73);
  background: linear-gradient(90deg, rgba(30,39,73,1) 9%, rgba(39,52,105,1) 93%);
`;