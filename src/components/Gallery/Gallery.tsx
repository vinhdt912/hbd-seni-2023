import React from "react";
import { Carousel } from "antd";
import { TextColor } from "../../libs";

import "./Gallery.scss";

export default function Gallery() {
  return (
    <div className="Gallery">
      <TextColor className="text-center">Photo Gallery</TextColor>
      <Carousel autoplay autoplaySpeed={2000} style={{ marginBottom: 40 }}>
        {["gallery-1.png", "gallery-2.png", "gallery-3.png"].map(
          (url, index) => (
            <div key={index}>
              <img src={require(`../../assets/images/${url}`)} alt="avt-man" />
            </div>
          ),
        )}
      </Carousel>
    </div>
  );
}
