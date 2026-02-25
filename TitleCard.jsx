import icon from "../assets/images/icon.png";
const TitleCard = ({ title, description }) => {
  return (
    <div
      className="bg-white "
      style={{ width: "255px", height: "138px", padding: "16px 8px", borderRadius: "4px" }}
    >
      {/* Icon image */}
      <img
        src={icon}
        alt="icon"
        className="mb-2"
        style={{ width: "36px", height: "36px", objectFit: "contain" }}
      />

      {/* Title */}
      <h3
        className="font-bold text-slate-900 mb-1"
        style={{ fontSize: "14px" }}
      >
        {title || "Title Goes Here"}
      </h3>

      {/* Description */}
      <p
        className="text-slate-600"
        style={{ fontSize: "11px", lineHeight: "1.5" }}
      >
        {description || "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."}
      </p>
    </div>
  );
};

export default TitleCard;