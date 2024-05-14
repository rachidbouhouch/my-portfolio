import React, { useEffect, useState } from "react";
import { AiOutlineUp } from "react-icons/ai";
import "../App.css";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        {backToTop && (
          <AiOutlineUp className="button-top" onClick={handleScroll} />
        )}
      </div>
    </>
  );
};

export default BackToTop;
