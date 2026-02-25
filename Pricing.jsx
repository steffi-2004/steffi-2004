import rectangleBg from "../assets/images/priceBackground.png"

const Price = () => {
  return (
    <div
      className="relative w-full flex items-center justify-center "
      style={{ height: "934px" }}
    >
      {/* Background Rectangle Image */}
      <img
        src={rectangleBg}
        alt=""
        className="absolute inset-0 w-full h-full  object-cover"
        style={{ objectFit: "fill" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center" style={{ maxWidth: "600px" }}>
        <h2 className="font-bold text-slate-900 mb-4" style={{ fontSize: "36px" }}>
          A Price To Suit Everyone
        </h2>
        <p className="text-slate-500 mb-8" style={{ fontSize: "14px", lineHeight: "1.7", maxWidth: "420px" }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
          dis parturient montes, nasceetur ridiculus
        </p>
        <p className="font-bold text-slate-900" style={{ fontSize: "48px" }}>
          $40
        </p>
        <p className="text-slate-500 mb-8" style={{ fontSize: "14px" }}>
          UI Design Kit
        </p>
        <p className="text-slate-400 mb-3" style={{ fontSize: "12px" }}>
          See, One price. Simple.
        </p>
        <button
          className="bg-indigo-900 text-white font-semibold"
          style={{ fontSize: "14px", width: "160px", height: "40px", borderRadius: "4px" }}
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default Price;