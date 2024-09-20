import React from "react";
import Brand from "../Form/Brand";

const MainFooter = () => {
  // footer links
  const FooterLinks = [
    { id: 1, text: "Get Help" },
    { id: 2, text: "Ask any question" },
    { id: 3, text: "Read our blog" },
    { id: 4, text: "Contact" },
    { id: 5, text: "X" },
    { id: 6, text: "Instagram" },
    { id: 7, text: "Twitter" },
    { id: 8, text: "Youtube" },
  ];
  return (
    <>
      <div className="flex items-center forum font-bold">
        {/* logo  */}
        <div className="flex flex-grow">
          <Brand />
        </div>
        {/* footer links  */}
        <div className="flex space-x-12">
          <div className="flex flex-col space-y-2">
            {FooterLinks.slice(0, 4).map((item) => (
              <span className="text-white" key={item.id}>
                {item.text}
              </span>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            {FooterLinks.slice(4, 8).map((item) => (
              <span className="text-white" key={item.id}>
                {item.text}
              </span>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            {FooterLinks.slice(8, 12).map((item) => (
              <span className="text-white" key={item.id}>
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <span className="forum text-red-600 font-bold">
          Developed By Varun Sharma
        </span>
      </div>
    </>
  );
};

export default MainFooter;
