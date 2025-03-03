import FindTheBestTalent from "../../components/hire-talent/FindTheBestTalent";
import LandingHireTalentPage from "../../components/hire-talent/LandingHireTalentPage";
import StartHiring from "../../components/hire-talent/StartHiring";
import WhyChoose from "../../components/hire-talent/WhyChoose";
import TopTalents from "../../components/home/TopTalents";
import Layout from "../../components/layout/Layout";
const HireTalent = () => {
  return (
    <Layout>
      <LandingHireTalentPage />
      <WhyChoose />
      <TopTalents />
      <FindTheBestTalent />
      <StartHiring />
    </Layout>
  );
};

export default HireTalent;
