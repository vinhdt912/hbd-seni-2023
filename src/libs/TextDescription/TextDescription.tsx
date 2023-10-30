import React from "react";
import { Text } from "../Text/Text";
import "./TextDescription.scss";

interface ITextDescription {
  children: React.ReactNode;
  style?: React.CSSProperties;
  [key: string]: any;
}

export const TextDescription = (props: ITextDescription) => {
  const { children, ...restProps } = props;

  return (
    <div className="TextDescription" {...restProps}>
      <Text>{children}</Text>
    </div>
  );
};
