import IntroContent from "../../content/IntroContent.json";
import ContactContent from "../../content/ContactContent.json";
import Contact from "../../components/Contact/Contact";
import ContentBlock from "../../components/ContentBlock";
import Service from "../Requirement/Requirement";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import Recruitment from "../../components/ContactForm";

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
