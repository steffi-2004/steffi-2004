const Footer = () => {
  return (
    <footer
      className="w-full z-10"
      style={{ backgroundColor: "#E7ECFF", padding: "0 163px" }}
    >
      {/* Top Row */}
      <div className="flex items-center justify-between" style={{ height: "60px" }}>
        {/* Copyright */}
        <p className="text-slate-500" style={{ fontSize: "12px" }}>
          ©2023 Yourcompany
        </p>

        {/* Brand */}
        <p className="font-bold text-indigo-900" style={{ fontSize: "18px" }}>
          Landing
        </p>

        {/* CTA Button */}
        <button
          className="bg-indigo-900 text-white font-semibold"
          style={{ fontSize: "12px", padding: "8px 16px", borderRadius: "4px" }}
        >
          Purchase now
        </button>
      </div>

      {/* Divider */}
      <div className="w-full" style={{ height: "1px", backgroundColor: "#c7d0e8" }} />

      {/* Bottom Row */}
      <div className="flex items-center justify-between" style={{ height: "60px" }}>
        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {["Home", "About", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-slate-500 no-underline"
              style={{ fontSize: "12px" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          {/* Facebook */}
          <a href="#" className="text-indigo-900">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="#" className="text-indigo-900">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          {/* Twitter */}
          <a href="#" className="text-indigo-900">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
            </svg>
          </a>
          {/* YouTube */}
          <a href="#" className="text-indigo-900">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className="text-indigo-900">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;