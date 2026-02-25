const ImageCard = ({ image }) => {
  return (
    <div
      className=""
      style={{ width: "480px", height: "100%", borderRadius: "4px", overflow: "hidden" }}
    >
      <img
        src={image}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
};

export default ImageCard;