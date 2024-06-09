import React from "react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

const draw = {
  hidden: {pathLength: 0, opacity: 0},
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {delay: 0.5, type: "spring", duration: 2.5, bounce: 0},
      opacity: {delay: 0.5, duration: 0.01},
    },
  },
};
const numAnimate = {
  hidden: {scale: 2, opacity: 0},
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      opacity: {delay: 1},
      scale: {delay: 1},
    },
  },
};
function CirclePercent({number = 0}) {
  const [ref, inView] = useInView({threshold: 0});
  return (
    <div ref={ref}>
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        initial="hidden"
        animate={inView && "visible"}>
        <motion.circle
          className={"stroke-[20px] fill-[transparent] stroke-gray-600"}
          style={{strokeLinecap: "round"}}
          cx="100"
          cy="100"
          r="80"
          variants={draw}
          custom={1}
        />
        <motion.text
          variants={numAnimate}
          animate={inView && "visible"}
          initial="hidden"
          x="100"
          y="105"
          textAnchor="middle"
          dominantBaseline="middle"
          className={"text-5xl font-semibold fill-gray-600"}>
          {number}
        </motion.text>
      </motion.svg>
    </div>
  );
}

export default CirclePercent;
