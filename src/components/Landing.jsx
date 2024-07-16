import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Landing() {
  const [isVisible, setVisible] = useState(false);

  // for front part
  const text = "and I enjoy ";
  const count0 = useMotionValue(0);
  const frontText = useTransform(count0, (latest) =>
    text.slice(0, Math.round(latest))
  );

  // for backpart
  const texts = [
    "building functional and neat platforms.",
    "frontend design and development.",
    "incorporating machine learning and AI.",
    "building fun and engaging projects.",
  ];
  const textIndex = useMotionValue(0);
  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count1 = useMotionValue(0);
  const rounded = useTransform(count1, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    if (isVisible === true) {
      animate(count0, 60, {
        delay: 0.5,
        type: "tween",
        duration: 2,
        ease: "easeIn",
      });

      animate(count1, 60, {
        delay: 1.3,
        type: "tween",
        duration: 2,
        ease: "easeIn",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
        onUpdate(latest) {
          if (updatedThisRound.get() === true && latest > 0) {
            updatedThisRound.set(false);
          } else if (updatedThisRound.get() === false && latest === 0) {
            if (textIndex.get() === texts.length - 1) {
              textIndex.set(0);
            } else {
              textIndex.set(textIndex.get() + 1);
            }
            updatedThisRound.set(true);
          }
        },
      });
    }
  }, [isVisible]);

  return (
    <div id="Landing">
      <div className="placeholder"></div>
      <motion.div
        initial={{ opacity: 0.1, scale: 0.7, x: -50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => setVisible(!isVisible)}
        className="landing-intro"
      >
        Hi, I'm <span>Ye Xin</span>{" "}
      </motion.div>
      {isVisible && (
        <motion.div>
          <motion.span className="typewriter">{frontText}</motion.span>
          <motion.span className="typewriter">{displayText}</motion.span>
          <motion.div
            animate={{
              opacity: [0, 0, 1, 1],
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatDelay: 0,
                ease: "linear",
                times: [0, 0.5, 0.5, 1],
              },
            }}
            className="cursor"
          />
        </motion.div>
      )}
    </div>
  );
}
