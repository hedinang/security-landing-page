import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import Contact from "../../components/Contact/Contact";
import ContentBlock from "../../components/ContentBlock";
import Recruitment from "../../components/ContactForm";
import Service from "../../components/Service/Service";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";


// const Container = lazy(() => import("../../common/Container"));
// const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        // button={IntroContent.button}
        icon="guard2.jpeg"
        id="intro"
      />
      <Service />
      <Recruitment
        title={ContactContent.title}
        content={ContactContent.text}
        id="recruitment"
      />
      <Contact />
    </Container>
  );
};

export default Home;
