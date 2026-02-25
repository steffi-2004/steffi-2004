import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";

const ImageContent = ({ image }) => {
  return (
    <div
      className="flex items-center w-full bg-white"
      style={{ height: "569px", maxWidth: "1440px", margin: "0 auto", padding: "0 163px" ,borderRadius:"4px", marginBottom:"32px" }}
    >
      {/* Left: ImageCard */}
      <div className="shrink-0">
        <ImageCard image={image} />
      </div>

      {/* Right: InfoCard */}
      <div className="flex-1" style={{ paddingLeft: "80px" }}>
        <InfoCard />
      </div>
    </div>
  );
};

export default ImageContent;