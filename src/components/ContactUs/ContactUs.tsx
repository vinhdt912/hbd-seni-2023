import emailjs from "@emailjs/browser";
import {
  Button,
  CheckboxOptionType,
  Form,
  Input,
  Radio,
  notification,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import {
  AcceptIcon,
  BrideIcon,
  GroomIcon,
  RejectIcon,
} from "../../assets/icons";
import { Text, TextColor, TextDescription } from "../../libs";
import "./ContactUs.scss";

interface IForm {
  from_name: string;
  guest_of: string;
  possible: string;
  message?: string;
}

const SERVICE = {
  SERVICE_ID: "service_o9rv85p",
  TEMPLATE_ID: "template_qdrj6kp",
  PUBLIC_KEY: "C-EmE7MQVlkioiO8s",
};

export default function ContactUs() {
  const [form] = Form.useForm<IForm>();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const GUEST_OF_OPTIONS: CheckboxOptionType[] = [
    {
      label: (
        <>
          <BrideIcon />
          <Text>Team cô dâu</Text>
        </>
      ),
      value: "CÔ DÂU",
    },
    {
      label: (
        <>
          <GroomIcon />
          <Text>Team chú rể</Text>
        </>
      ),
      value: "CHÚ RỂ",
    },
  ];
  const POSSIBLE_OPTIONS: CheckboxOptionType[] = [
    {
      label: (
        <>
          <AcceptIcon />
          <Text>
            Yeah!
            <div>
              <Text>Sẵn sàng</Text>
            </div>
          </Text>
        </>
      ),
      value: "CÓ",
    },
    {
      label: (
        <>
          <RejectIcon />
          <Text>
            Oh!
            <div>
              <Text>Rất tiếc</Text>
            </div>
          </Text>
        </>
      ),
      value: "KHÔNG",
    },
  ];

  const sendEmail = async (values: IForm) => {
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE.SERVICE_ID,
        SERVICE.TEMPLATE_ID,
        //@ts-expect-error
        values,
        SERVICE.PUBLIC_KEY,
      );
      notification.success({
        message: "Gửi thông tin",
        description: "Thông tin của quý khách đã được gửi thành công!",
        duration: 3,
      });

      setSuccess(true);
    } catch (error: any) {
      notification.error({
        message: "Gửi thông tin",
        description: error.text || "Gửi không thành công!",
        duration: 3,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <img src={require("../../assets/images/line.png")} alt="line" />
      <TextColor className="text-center" style={{ marginTop: 20 }}>
        Thông tin phản hồi
      </TextColor>
      <TextDescription className="text-center" style={{ paddingInline: 20 }}>
        Để thuận tiện cho việc sắp xếp chỗ ngồi, vui lòng phản hồi giúp vợ chồng
        mình nhé!
      </TextDescription>
      <div className="ContactUs">
        <Form
          form={form}
          layout="vertical"
          onFinish={sendEmail}
          disabled={success}
        >
          <Form.Item name="guest_of" initialValue={GUEST_OF_OPTIONS[0].value}>
            <Radio.Group
              options={GUEST_OF_OPTIONS}
              optionType="button"
              className="GuestOf"
              size="large"
            />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Hãy nhập tên trước khi gửi bạn nhé!",
              },
            ]}
            name="from_name"
          >
            <Input placeholder="Tên khách mời" size="large" />
          </Form.Item>
          <Form.Item name="possible" initialValue={POSSIBLE_OPTIONS[0].value}>
            <Radio.Group
              options={POSSIBLE_OPTIONS}
              optionType="button"
              className="Possible"
              size="large"
            />
          </Form.Item>

          <Form.Item name="message">
            <TextArea
              placeholder="Lời nhắn gửi đến đôi uyên ương"
              size="large"
              autoSize={{ minRows: 5, maxRows: 5 }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              size="large"
              style={{ width: "100%" }}
              loading={loading}
            >
              Gửi thông tin
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
