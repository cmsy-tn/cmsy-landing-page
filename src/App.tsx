import styled from "styled-components"
// SECTIONS IMPORT
import HeroSection from "./components/HeroSection"
import MainSection from "./components/MainSection";

function App() {
  return (
    <LandingPageLayout>
      <HeroSection />
      <MainSection />
    </LandingPageLayout>
  )
}

export default App

const LandingPageLayout = styled.section`
  min-height: 100vh;
  width: 100%;
  background: rgb(30,39,73);
  background: linear-gradient(142deg, rgba(30,39,73,1) 9%, rgba(39,52,105,1) 93%);
`;