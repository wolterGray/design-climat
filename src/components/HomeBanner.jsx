import React from "react";
import {motion} from "framer-motion";

function HomeBanner() {
  const words = ["Якість", "Надійність", "Ціна", "Ефективність"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="h-screen text-white bg-[url('/img/home/bg.jpg')]">
      <motion.div
        initial={{translateY: -450}}
        animate={{translateY: 0}}
        transition={{duration: 1, delay: 0.3}}
        className="max-w-6xl mx-auto relative -top-[10%]">
        <img src="img/home/cond.webp" alt="" />
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 1}}>
        {words.map((word, i) => (
          <motion.h1
            key={i}
            initial={{opacity: 0}}
            animate={{opacity: index === i ? 1 : 0}}
            exit={{opacity: 0}}
            transition={{duration: 1}}
            className="text-7xl font-montserrat font-thin uppercase">
            {word}
          </motion.h1>
        ))}
      </motion.div>
    </div>
  );
}

export default HomeBanner;
