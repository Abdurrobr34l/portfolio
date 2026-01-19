import React, { useEffect, useState } from "react";
import { Outlet } from "react-router"; // Use 'react-router'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import Loader from "./Components/Loader";
import Lenis from "lenis";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 50 });
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(() => setLoading(false), 500);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  if (loading) return <Loader fade={fade} />;

  return (
    <div className="bg-base-100 text-base-content min-h-screen">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <AnimatedCursor
        innerSize={8}
        outerSize={40}
        color={darkMode ? "255, 255, 255" : "55, 42, 172"}
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={2}
        clickables={["a", "button", "input", "textarea", "select", "label"]}
        trailingSpeed={0.1}
      />

      <main>
        {/* This is where Home or ProjectDetails will render */}
        <Outlet context={{ darkMode }} />
      </main>

      <Footer />
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import Header from "./Components/Header";
// import Hero from "./Components/Hero";
// import Container from "./Components/Container";
// import About from "./Components/About";
// import Footer from "./Components/Footer";
// import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import AnimatedCursor from "react-animated-cursor";
// import Loader from "./Components/Loader";
// import Lenis from "lenis";
// import {Skills} from "./Components/Skills";
// import { Outlet } from "react-router-dom";

// const App = () => {
//   const [loading, setLoading] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);
//   const [fade, setFade] = useState(false);

//   useEffect(() => {
//     Aos.init({ duration: 1000, once: true, offset: 50 });

//     const timer = setTimeout(() => {
//       setFade(true);
//       setTimeout(() => setLoading(false), 500);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const refresh = () => Aos.refresh();
//     window.addEventListener("scroll", refresh);
//     return () => window.removeEventListener("scroll", refresh);
//   }, []);

//   useEffect(() => {
//     const lenis = new Lenis({
//       smooth: true,
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   if (loading) return <Loader fade={fade} />;

//   return (
//     <div className="bg-base-100 text-base-content min-h-screen">
//       <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
//       <AnimatedCursor
//         innerSize={8}
//         outerSize={40}
//         color={darkMode ? "255, 255, 255" : "55, 42, 172"}
//         outerAlpha={0.3}
//         innerScale={0.7}
//         outerScale={2}
//         clickables={["a", "button", "input", "textarea", "select", "label"]}
//       />

//       <main>
//         <Container customStyle={"flex flex-col gap-20 xl:gap-32"}>
//           <Hero></Hero>
//           <About></About>
//           <Skills></Skills>
//           <Projects></Projects>
//           <Contact></Contact>
//         </Container>

//         <Outlet />
//       </main>

//       <Footer></Footer>
//     </div>
//   );
// };

// export default App;
