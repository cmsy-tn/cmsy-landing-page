import styled from "styled-components"
// SECTIONS IMPORT
import HeroSection from "./components/HeroSection"

function App() {
  return (
    <LandingPageLayout>
      <HeroSection />
    </LandingPageLayout>
  )
}

export default App

const LandingPageLayout = styled.section`
  height: 100vh;
  width: 100vw;
  background: rgb(30,39,73);
  background: linear-gradient(142deg, rgba(30,39,73,1) 9%, rgba(39,52,105,1) 93%);
`;