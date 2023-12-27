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


const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

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
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}
      <Service/>
      {/* <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        // section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        section={ProductContent.section}
        icon="waving.svg"
        id="product"
      /> */}
      <Recruitment
        title={ContactContent.title}
        content={ContactContent.text}
        id="recruitment"
      />
      {/* <MiddleBlock
        title={RecruitmentContent.title}
        content={RecruitmentContent.text}
        button={RecruitmentContent.button}
        // section={ProductContent.section}
      /> */}
      <Contact />
    </Container>
  );
};

export default Home;
