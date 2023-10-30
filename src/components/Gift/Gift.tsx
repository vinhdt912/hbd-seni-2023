import { Divider } from "antd";
import { TextColor } from "../../libs";
import "./Gift.scss";
export default function Gift() {
  return (
    <div className="Gift">
      <img src={require("../../assets/images/gift.png")} alt="gif" />
      <TextColor className="text-center" style={{ marginTop: 40 }}>
        Gửi lời chúc đến đôi uyên ương
      </TextColor>
      <div className="qr-code">
        <img
          src={require("../../assets/images/lan-qr-code.png")}
          alt="qr-code"
        />
      </div>
      <div className="qr-code">
        <img
          src={require("../../assets/images/nam-qr-code.png")}
          alt="qr-code"
        />
      </div>
    </div>
  );
}
