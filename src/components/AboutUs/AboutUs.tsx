import { Col, Divider, Row } from "antd";
import {
  ArrowIcon1,
  HeartIcon,
  ManIcon,
  RingIcon,
  WomanIcon,
} from "../../assets/icons";
import "./AboutUs.scss";
import { TextColor, TextDescription, Title, Text, Avatar } from "../../libs";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <Title>Về chúng tôi</Title>
      <HeartIcon style={{ width: 77, margin: "0 auto" }} />
      <Row style={{ marginTop: 40 }}>
        <Col span={14} className="col-img">
          <Avatar
            avtName="avt-man-1.png"
            style={{ rotate: "-7deg" }}
            pos3={
              <div style={{ position: "absolute", top: -12, right: -65 }}>
                <ArrowIcon1 style={{ width: 77 }} />
              </div>
            }
          />
        </Col>
        <Col span={10} className="col-info">
          <TextColor>Hoang Nam</TextColor>
          <Text style={{ marginBottom: 8 }}>14.05</Text>
          <ManIcon style={{ width: 36 }} />
        </Col>
      </Row>
      <TextDescription className="text-center">
        Là một người hiền lành và ít nói. Luôn coi trọng tình cảm và yêu thương
        gia đình. Với anh: “Gia đình là điểm tựa vững chắc nhất và là bến đỗ
        bình yên không đâu sánh bằng đối với mỗi con người.
      </TextDescription>

      <Divider plain style={{ paddingInline: "10%", marginBlock: 25 }}>
        <RingIcon style={{ width: 68 }} />
      </Divider>
      <Row>
        <Col span={10} className="col-info">
          <TextColor>Ngoc Lan</TextColor>
          <Text style={{ marginBottom: 8 }}>20.03</Text>
          <WomanIcon style={{ width: 36 }} />
        </Col>
        <Col span={14} className="col-img">
          <Avatar
            avtName="avt-woman-1.png"
            style={{ rotate: "7deg" }}
            pos3={
              <div
                style={{
                  position: "absolute",
                  bottom: -12,
                  left: -68,
                  rotate: "-180deg",
                  right: "unset",
                }}
              >
                <ArrowIcon1 style={{ width: 77 }} />
              </div>
            }
          />
        </Col>
      </Row>
      <TextDescription className="text-center">
        Là một người nói nhiều nhưng lại sống nội tâm, thích xem phim hoạt hình,
        trồng cây và yêu thiên nhiên. Ngoài ra còn có ước mơ có cho mình một
        vườn hoa nho nhỏ để chăm sóc.
      </TextDescription>
    </div>
  );
}
