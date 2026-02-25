import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
     className={`absolute top-0 z-50 flex items-center w-full bg-transparent border-b ${
  scrolled ? "shadow-md border-slate-200 bg-white" : "border-transparent"
}`}
      style={{ height: "60px" }}
    >
      {/* Nav links */}
      <div style={{ paddingLeft: "165px" }} className="flex items-center">
        {["Home", "About", "Contact"].map((label, i, arr) => (
          <a
            key={label}
            href="#"
            className="text-indigo-900 no-underline"
            style={{ fontSize: "14px", marginRight: i < arr.length - 1 ? "68px" : "0" }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Center: Landing brand */}
      <div className="absolute left-1/2 -translate-x-1/2 font-bold text-indigo-900 select-none" style={{ fontSize: "18px" }}>
        Landing
      </div>

      <div className="flex-1" />

      {/* Buy Now button */}
      <div style={{ paddingRight: "165px" }}>
        <button
          className="flex items-center justify-center bg-indigo-900 text-white font-semibold rounded"
          style={{ width: "160px", height: "26px", fontSize: "12px" }}
        >
          Buy Now
        </button>
      </div>
    </nav>
  );
};

export default NavBar;