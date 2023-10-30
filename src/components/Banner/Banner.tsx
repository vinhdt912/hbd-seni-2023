import "./Banner.scss";

export default function Banner() {
  return (
    <div className="Banner">
      <img
        src={require("../../assets/images/banner.gif")}
        alt="happy-wedding"
      />
    </div>
  );
}
