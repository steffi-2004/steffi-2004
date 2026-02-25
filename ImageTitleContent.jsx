import TitleCard from "./TitleCard";
import ImageCard from "./ImageCard";
import InfoCard from "./InfoCard";

const ImageContentTitle = ({image}) => {
  return (
    <div
      className="bg-transparent w-full"
      style={{ maxWidth: "100%", margin: "0 auto", padding: "16px" }}
    >
      {/* Top Section: Left text + cards, Right illustration */}
      <div className="flex items-center justify-center" style={{ height: "742px" }}>

        {/* Left */}
        <div style={{ paddingLeft: "163px" ,paddingRight: "200px"}}>
          {/* Heading */}
          <h2 className="font-bold text-slate-900 mb-4" style={{ fontSize: "36px" }}>
            Light, Fast & Powerful
          </h2>

          {/* Description */}
          <p className="text-slate-500 mb-2" style={{ fontSize: "14px", lineHeight: "1.7", maxWidth: "520px" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus
          </p>
          <p className="text-slate-500 mb-8" style={{ fontSize: "14px", lineHeight: "1.7", maxWidth: "520px" }}>
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>

          {/* TitleCards row */}
          <div className="flex gap-6">
            <TitleCard />
            <TitleCard />
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="shrink-0" style={{ paddingRight: "163px" }}>
          <ImageCard image={image}/>
        </div>

      </div>

     
    </div>
  );
};

export default ImageContentTitle;