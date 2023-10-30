import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";
import "./Text.scss";

const { Text: AntText } = Typography;

interface IText extends TextProps {
  children: React.ReactNode;
}

export const Text = (props: IText) => {
  const { children, ...restProps } = props;

  return (
    <AntText className="Text" {...restProps}>
      {children}
    </AntText>
  );
};
