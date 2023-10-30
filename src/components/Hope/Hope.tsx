import React, { useEffect, useMemo, useState } from "react";
import { TextColor, TextDescription } from "../../libs";
import "./Hope.scss";
import { Card } from "antd";
import dayjs from "dayjs";

export default function Hope() {
  const [date, setDate] = useState(
    dayjs("12/15/2023", "DD/MM/YYYY").diff(dayjs(), "s"),
  );
  const totalDays = useMemo(() => Math.floor(date / (60 * 60 * 24)), [date]);
  const totalHours = useMemo(
    () => Math.floor((date - totalDays * 60 * 60 * 24) / (60 * 60)),
    [date, totalDays],
  );
  const totalMinus = useMemo(
    () =>
      Math.floor((date - totalDays * 60 * 60 * 24 - totalHours * 60 * 60) / 60),
    [date, totalDays, totalHours],
  );
  const totalSeconds = useMemo(
    () =>
      Math.floor(
        date -
          totalDays * 60 * 60 * 24 -
          totalHours * 60 * 60 -
          totalMinus * 60,
      ),
    [date, totalDays, totalHours, totalMinus],
  );

  useEffect(() => {
    setTimeout(() => {
      setDate((prevState) => prevState - 1);
    }, 1000);
  }, [date]);

  return (
    <div className="Hope">
      <TextDescription className="text-center">
        Mình cùng đếm ngược thời gian
      </TextDescription>

      <div className="countdown">
        <Card className="card-time" size="small">
          <TextColor>{totalDays}</TextColor>
          <TextDescription>NGÀY</TextDescription>
        </Card>
        <Card className="card-time" size="small">
          <TextColor>{totalHours}</TextColor>
          <TextDescription>GIỜ</TextDescription>
        </Card>
        <Card className="card-time" size="small">
          <TextColor>{totalMinus}</TextColor>
          <TextDescription>PHÚT</TextDescription>
        </Card>
        <Card className="card-time" size="small">
          <TextColor>{totalSeconds}</TextColor>
          <TextDescription>GIÂY</TextDescription>
        </Card>
      </div>

      <TextDescription className="note text-center">
        Đám cưới của chúng tôi chắc chắn sẽ kém vui đi rất nhiều nếu thiếu đi sự
        hiện diện của bạn. Cảm ơn bạn vì đã trở thành một phần quan trọng trong
        ngày đặc biệt của chúng tôi!
      </TextDescription>
    </div>
  );
}
