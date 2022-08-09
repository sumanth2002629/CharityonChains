import React from "react";
import "../../styles/Page1.css";
import banner from "../images/banner.svg";
const Page1 = (props) => {
  return (
    <>
      <div className="banner">
        <div className="halfcontainer">
          <img src={banner} alt="banner" />
        </div>
        <div className="halfcontainer">
          <div className="white mb-4">
            Transform Your Business With{" "}
            <span className="cyan">BlockChain</span>
          </div>
          <div className="cyanline mb-4"></div>
          <div className="white mb-5 smaller">
            Disrupt your industry. Power your startup. Rationalize and control
            your business.
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
