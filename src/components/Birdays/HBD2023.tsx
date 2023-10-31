import { TextColor, TextDescription, Title } from "../../libs";

function HBD2023() {
  return (
    <div className="HBDContainer">
      <Title>Happy birday Seni 23 tủi</Title>
      <TextDescription className="text-center">
        Chúc bé Seni của Nu một tuổi mới xinh đẹp hơn, có nhiều sức khỏe hơn,
        bớt lo lắng nhiều hơn để có những giấc ngủ ngon hơn. Chúc bé thuận lợi
        hơn trong công việc, sự nghiệp và đạt được những điều tuyệt vời hơn
        trong cuộc sống.
      </TextDescription>
      <div className="content">
        <TextColor className="text-center">
          Những chuyến đi chúng ta đã có với nhau năm vừa quaaaa
        </TextColor>

        <img src={require("../../assets/images/seni1.png")} alt="Thủy Thủy" />
        <TextDescription
          style={{ fontStyle: "italic" }}
          className="text-center"
        >
          Nay viết mà cảm xúc lẫn lộn quá, để anh gửi lại bé thiệp hoàn chỉnh
          vào một ngày sớm nhất nhó.
        </TextDescription>
        <Title>YÊU BÉ</Title>
      </div>
    </div>
  );
}

export default HBD2023;
