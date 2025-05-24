import React, { useEffect, useState } from "react";
import "./ScrollEffect.css";

const ScrollEffect = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`scroll-section ${visible ? "visible" : ""}`} ref={ref}>
      {children}
    </div>
  );
};

export default ScrollEffect;
