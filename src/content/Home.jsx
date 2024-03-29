import Heading from "../components/Heading";
import AnnouncementsHomepage from "../components/AnnounceHomepage";
import ImgSlider from "../components/Imgslider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import CompanyLogo from "./Company";
import Customer from "./Customer";
const Home = () => {
  return (
    <div>
      <Heading />
      <AnnouncementsHomepage />
      <ImgSlider />
      <Categories />
      <Products />
      <CompanyLogo />
      <Customer />
      <Newsletter />
      <Footer />
    </div>
  )
}
export default Home