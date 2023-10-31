import { ConfigProvider } from "antd";
import Banner from "./components/Banner/Banner";
import Birdays from "./components/Birdays/Birdays";

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
      <Birdays />
    </ConfigProvider>
  );
}

export default App;
