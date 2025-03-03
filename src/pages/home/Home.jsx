import Categories from "../../components/home/Categories";
import LandingPage from "../../components/home/LandingPage";
import TopTalents from "../../components/home/TopTalents";
import Layout from "../../components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <LandingPage />
      <Categories />
      <TopTalents />
    </Layout>
  );
};

export default Home;
