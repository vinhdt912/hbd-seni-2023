import { Tabs, TabsProps } from "antd";
import dayjs from "dayjs";
import HBD2023 from "./HBD2023";
import "./Birdays.scss";

function Birdays() {
  const items: TabsProps["items"] = [
    {
      key: "2023",
      label: "1/11/2023",
      children: <HBD2023 />,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className="Birdays">
      <Tabs
        defaultActiveKey={dayjs().year().toString()}
        items={items}
        onChange={onChange}
      />
    </div>
  );
}

export default Birdays;
