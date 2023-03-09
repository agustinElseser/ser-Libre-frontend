import { useRef, useEffect, useState } from "react";

import "animate.css";
/* const inner = useRef(null);

  const { inView } = useIntersectionObserver(inner, {
    rootMargin: "0px",
    threshold: 0.75,
  });
*/
export const Luciana = () => {
  const [inView, setInView] = useState(false);
  const elementRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      setInView(entry.isIntersecting);
      console.log("Element is intersecting:", entry.isIntersecting);
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className="w-full ">
        <div className="pill">
          <div className=" active">Visible</div>
        </div>

        <div className="w-full ">
          <div className="full ">Scroll Down</div>
          <div
            ref={elementRef}
            className={
              inView
                ? "innet2 animation   animate__animate animate__fadeIn"
                : "innet none"
            }
          >
            Inner Box
          </div>
        </div>
      </div>
    </>
  );
};
