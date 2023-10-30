import { ConfigProvider } from "antd";
import AboutUs from "./components/AboutUs/AboutUs";
import Banner from "./components/Banner/Banner";
import LoveStory from "./components/LoveStory/LoveStory";
import GoogleMap from "./components/Map/GoogleMap";
import Gallery from "./components/Gallery/Gallery";
import Hope from "./components/Hope/Hope";
import ContactUs from "./components/ContactUs/ContactUs";
import Gift from "./components/Gift/Gift";
import ContactInfo from "./components/ContactInfo/ContactInfo";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Mali",
          colorPrimary: "#d67567",
          colorSuccess: "#73d13d",
        },
      }}
    >
      <Banner />
      <AboutUs />
      <LoveStory />
      <Gallery />
      <Hope />
      <ContactUs />
      <Gift />
      <GoogleMap />
      <ContactInfo />
    </ConfigProvider>
  );
}

export default App;
