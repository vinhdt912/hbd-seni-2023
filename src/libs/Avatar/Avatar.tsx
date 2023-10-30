import React from "react";
import "./Avatar.scss";

interface IAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  avtName: string;
  pos3?: JSX.Element;
  pos4?: JSX.Element;
}

export default function Avatar(props: IAvatarProps) {
  const { avtName, pos3, pos4, ...restProps } = props;

  return (
    <div className="Avatar" {...restProps}>
      <div className="pos-1">
        <img
          src={require("../../assets/images/frame-avt.png")}
          alt="frame-avt"
        />
      </div>
      <div className="pos-2">
        <img src={require(`../../assets/images/${avtName}`)} alt="avt-man" />
      </div>
      {pos3 ? pos3 : null}
      {pos4 ? pos4 : null}
    </div>
  );
}
