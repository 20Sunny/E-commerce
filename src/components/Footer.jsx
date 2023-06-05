import React from "react";

function Footer() {
  const footerItems = ["facebook", "github", "twitter"];

  return (
    <div className="px-8 pt-10 footer footer-center p-10 bg-teal-600">
      <div className="flex justify-center gap-8 font-normal text-lg text-white">
        {footerItems.map((item, index) => (
          <h2 key={index} className="cursor-pointer">
            {item}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Footer;
