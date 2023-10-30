import { Typography } from "antd";
import "./Title.scss";

const { Title: AntTitle } = Typography;

interface ITitle {
  children: React.ReactNode;
}

export const Title = (props: ITitle) => {
  const { children, ...restProps } = props;

  return (
    <AntTitle level={1} className="Title" {...restProps}>
      {children}
    </AntTitle>
  );
};
