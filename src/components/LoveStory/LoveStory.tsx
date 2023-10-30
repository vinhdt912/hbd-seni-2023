import {
  ArrowIcon1,
  Heart2Icon,
  HeartIcon,
  RingIcon,
} from "../../assets/icons";
import { Avatar, TextColor, TextDescription, Title } from "../../libs";
import "./LoveStory.scss";

export default function LoveStory() {
  return (
    <div className="LoveStory" style={{ marginTop: 120 }}>
      <Title>Câu Chuyện Tình Yêu</Title>

      <div style={{ marginTop: 30 }}>
        <div className="card FirstTimeStory">
          <Avatar
            avtName="avt-man-1.png"
            pos3={
              <div className="pos-3">
                <ArrowIcon1 />
              </div>
            }
            pos4={
              <div className="pos-4">
                <RingIcon />
              </div>
            }
          />
          <TextDescription className="date">10.10.2018</TextDescription>
          <TextColor className="text-center" style={{ lineHeight: 1.8 }}>
            Lần Đầu Gặp Mặt
          </TextColor>
          <TextDescription className="text-center">
            Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có
            thể thích một người chưa từng gặp mặt? Ngày ấy vu vơ đăng một dòng
            status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một
            người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau người ấy lại
            là chồng mình.
          </TextDescription>
        </div>

        <div className="card BeginDate">
          <Avatar
            avtName="avt-man-1.png"
            pos3={
              <div className="pos-3">
                <ArrowIcon1 />
              </div>
            }
            pos4={
              <div className="pos-4">
                <Heart2Icon />
              </div>
            }
          />
          <TextDescription className="date">24.12.2020</TextDescription>
          <TextColor className="text-center" style={{ lineHeight: 1.8 }}>
            Bắt Đầu Hẹn Hò
          </TextColor>
          <TextDescription className="text-center">
            Ngày ấy, tôi 25! Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần
            thường chạy xe vòng quanh qua những con phố, len lỏi trong từng dòng
            người tấp nập. Nhưng rồi một ngày đẹp trời, người con trai ấy xuất
            hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này anh được làm
            những điều ấy cùng em”.
          </TextDescription>
        </div>

        <div className="card FirstTimeStory">
          <Avatar
            avtName="avt-man-1.png"
            pos3={
              <div className="pos-3">
                <ArrowIcon1 />
              </div>
            }
            pos4={
              <div className="pos-4">
                <RingIcon />
              </div>
            }
          />
          <TextDescription className="date">20.03.2022</TextDescription>
          <TextColor className="text-center" style={{ lineHeight: 1.8 }}>
            Giây Phút Cầu Hôn
          </TextColor>
          <TextDescription className="text-center">
            5 năm bên nhau không phải là quãng thời gian quá dài, nhưng đủ cho
            chúng ta nhận ra được rất nhiều điều. Chúng ta từ 2 con người xa lạ
            mà bước vào cuộc đời nhau. Và giờ đây chúng ta tiếp tục cùng nhau
            sang trang mới. Giây phút anh ngỏ lời “Làm vợ anh nhé!”, em đã
            nguyện ý đời này, đi đâu cũng được, miễn là cùng anh.
          </TextDescription>
        </div>

        <div className="card BeginDate">
          <Avatar
            avtName="avt-man-1.png"
            pos3={
              <div className="pos-3">
                <ArrowIcon1 />
              </div>
            }
            pos4={
              <div className="pos-4">
                <Heart2Icon />
              </div>
            }
          />
          <TextDescription className="date">01.01.2023</TextDescription>
          <TextColor className="text-center" style={{ lineHeight: 1.8 }}>
            Ngày Chung Đôi
          </TextColor>
          <TextDescription className="text-center">
            “Tiếng trái tim đôi ta đập thật nhanh. Thì thầm lời yêu thương. Ngày
            tình về chung đôi...” Sau bao nhiêu chờ đợi, cuối cùng ngày vui của
            chúng ta cũng tới rồi. Cảm ơn vì mình đã luôn là một phần trong cuộc
            sống của nhau. Em và anh không chỉ là người yêu mà chúng ta còn là
            tri kỷ. Ngày hôm nay, em sẽ là cô dâu của anh
          </TextDescription>
        </div>
      </div>
    </div>
  );
}
