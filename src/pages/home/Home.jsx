import Footer from "../../components/footer/Footer";
import Categories from "../../components/home/Categories";
import LandingPage from "../../components/home/LandingPage";
import TopTalents from "../../components/home/TopTalents";
import Nav from "../../components/nav/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <LandingPage />
      <Categories />
      <TopTalents />
      <Footer />
    </div>
  );
};

export default Home;
