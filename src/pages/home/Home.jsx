import Categories from "../../components/home/Categories";
import LandingPage from "../../components/home/LandingPage";
import TopTalents from "../../components/home/TopTalents";
import Layout from "../../components/layout/Layout";

const Home = () => {
  const userType = localStorage.getItem("type user");

  return (
    <Layout>
      <LandingPage />
      {userType !== "company" && userType !== "client" && <Categories />}
      {userType !== "seeker" && <TopTalents />}
    </Layout>
  );
};

export default Home;
