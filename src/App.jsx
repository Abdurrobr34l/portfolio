import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeOnScroll = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });

  const variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier easing
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="bg-slate-900 text-white scroll-smooth">
      {/* Example Menu */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-800 py-3 text-center z-10">
        <a href="#sec1" className="mx-4 hover:text-teal-400">Section 1</a>
        <a href="#sec2" className="mx-4 hover:text-teal-400">Section 2</a>
        <a href="#sec3" className="mx-4 hover:text-teal-400">Section 3</a>
      </nav>

      <div className="flex flex-col items-center justify-center gap-32 pt-24">
        <FadeOnScroll>
          <section id="sec1" className="h-screen flex items-center justify-center">
            <h1 className="text-5xl font-bold">Section 1 — fades up smoothly ✨</h1>
          </section>
        </FadeOnScroll>

        <FadeOnScroll>
          <section id="sec2" className="h-screen flex items-center justify-center">
            <h1 className="text-5xl font-bold">Section 2 — scroll up to fade down 👇</h1>
          </section>
        </FadeOnScroll>

        <FadeOnScroll>
          <section id="sec3" className="h-screen flex items-center justify-center">
            <h1 className="text-5xl font-bold">Section 3 — works with menu links ✅</h1>
          </section>
        </FadeOnScroll>
      </div>
    </div>
  );
};

export default App;
