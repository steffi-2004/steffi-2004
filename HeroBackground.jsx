import DesignerIllustration from "../assets/svg/designer_1.svg";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-x-hidden -z-10">
     <img
  src={DesignerIllustration}
  alt=""
  style={{
    width: "1500px",
    height: "1101px",
    top: "-49px",
    left: "450px",
    position: "absolute",
  }}
/>
  
    </div>
  );
}