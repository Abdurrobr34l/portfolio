import { motion, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaRegPaperPlane, FaWhatsapp } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // const [status, setStatus] = useState("");

  // Initialize EmailJS once
  useEffect(() => {
    emailjs.init("iXse8ri5XGCWw48pJ");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,   // from .env
        import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,  // from .env
        formRef.current,
        import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY    // from .env
      )
      .then(
        () => {
          toast.success("Message sent successfully! ✅"); // success toast
          e.target.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again ❌"); // error toast
        }
      );
  };


  return (
    <section id="contact" ref={ref}>
      <Toaster position="top-right" reverseOrder={false} />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-2 text-sm font-bold bg-accent/20 text-accent rounded-full mb-4">
          Contact
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
          Let's Work Together
        </h2>
        <p className="text-secondary max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear from you.
        </p>
      </motion.div>

      <div className="hero mb-10">
        <div className="hero-content gap-8 py-0! px-0! md:w-[80%] flex-col lg:flex-row xl:w-full">

          {/* LEFT SIDE (UNCHANGED) */}
          <div className="flex flex-col gap-8 text-primary/70! text-center lg:text-left">
            {/* Your left side content stays unchanged */}
            <div className="glass-card bg-primary/15! p-4">
              <h2 className="pt-3 pb-8 text-accent text-xl font-semibold xl:w-10/12">
                Get in Touch
              </h2>

              {/* EMAIL */}
              <div className="flex justify-evenly items-center gap-4 md:justify-normal md:gap-6">
                <div className="text-primary text-xl bg-accent/70 p-4 rounded-full flex items-center justify-center">
                  <FaRegPaperPlane />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-lg font-semibold text-white">
                    <a
                      href="mailto:abdurrobr34l@gmail.com"
                      className="hover:text-accent"
                    >
                      abdurrobr34l@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* PHONE & WHATSAPP */}
              <div className="flex flex-col gap-5 mt-5 md:items-start">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="text-primary text-xl bg-accent/70 p-4 rounded-full flex items-center justify-center">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Phone</p>
                    <p className="text-lg font-semibold text-white">
                      <a
                        href="tel:+8801886580500"
                        className="hover:text-secondary/70!"
                      >
                        +880 1886580500
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                  <div className="text-primary text-xl bg-accent/70 p-4 rounded-full flex items-center justify-center">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">WhatsApp</p>
                    <p className="text-lg font-semibold text-white">
                      <a
                        href="https://wa.me/8801886580500"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-secondary/70!"
                      >
                        Message on WhatsApp
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card bg-primary/15! p-4">
              <h3 className="font-display text-xl font-semibold mb-2 text-accent">
                Response Time
              </h3>
              <p>
                I typically respond within 24–48 hours. For urgent inquiries,
                please reach out via WhatsApp or Phone.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="card bg-primary/15 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <form ref={formRef} onSubmit={sendEmail}>
                <fieldset className="fieldset">
                  <h2 className="text-accent text-xl font-semibold">
                    Send a Message
                  </h2>

                  <label className="label mt-3 text-secondary">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="input bg-secondary/20 text-primary placeholder:text-secondary/60 w-full py-6 rounded-lg focus:outline-2 focus:outline-accent!"
                    placeholder="Your Name"
                  />

                  <label className="label mt-3 text-secondary">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="input bg-secondary/20 text-primary placeholder:text-secondary/60 w-full py-6 rounded-lg focus:outline-2 focus:outline-accent!"
                    placeholder="Your Email"
                  />

                  <label className="label mt-3 text-secondary">Message</label>
                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    className="textarea bg-secondary/20 text-primary placeholder:text-secondary/60 textarea-sm w-full rounded-lg focus:outline-2 focus:outline-accent!"
                  />

                  <button type="submit" className="common-btn resume-btn font-semibold! mt-4">
                    Send
                  </button>

                  {/* {status && (
                    <p className="mt-3 text-sm text-accent">{status}</p>
                  )} */}
                </fieldset>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;




// import { motion, useInView } from "framer-motion";
// import React, { useRef } from "react";
// import { FaPhoneAlt, FaRegPaperPlane, FaWhatsapp } from "react-icons/fa";
// // import { FaLocationPinLock } from "react-icons/fa6";

// const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="contact" ref={ref}>
//       {/* Section Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <span className="inline-block px-4 py-2 text-sm font-bold bg-accent/20 text-accent rounded-full mb-4">
//           Contact
//         </span>
//         <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
//           Let's Work Together
//         </h2>
//         <p className="text-secondary max-w-2xl mx-auto">
//           Have a project in mind? I'd love to hear from you.
//         </p>
//       </motion.div>

//       <div className="hero mb-10">
//         <div className="hero-content gap-10 px-0 md:w-[80%] flex-col lg:flex-row xl:w-full">

//           {/* LEFT SIDE */}
//           <div className="text-primary/70! text-center lg:text-left">

//             {/* Title and EMAIL */}
//             <div data-aos="fade-up" data-aos-delay="1000" className="glass-card bg-primary/30! p-4">
//               <h2
//                 data-aos="fade-right"
//                 data-aos-delay="1000"
//                 className="pt-3 pb-8 text-accent text-xl font-semibold xl:w-10/12"
//               >
//                 Get in Touch
//               </h2>

//               {/* EMAIL */}
//               <div className="flex justify-evenly items-center gap-4 md:justify-normal md:gap-6">
//                 <div
//                   data-aos="fade-right"
//                   data-aos-delay="600"
//                   className="text-primary text-xl bg-accent/70 p-4 rounded-full flex items-center justify-center"
//                 >
//                   <FaRegPaperPlane />
//                 </div>

//                 <div data-aos="fade-right" data-aos-delay="600">
//                   <p className="text-sm text-gray-300">Email</p>
//                   <p className="text-lg font-semibold text-white">
//                     <a
//                       href="mailto:abdurrobr34l@gmail.com"
//                       className="hover:text-accent"
//                     >
//                       abdurrobr34l@gmail.com
//                     </a>
//                   </p>
//                 </div>
//               </div>

//               {/* PHONE & WHATSAPP */}
//               <div className="flex flex-col gap-5 mt-5 md:items-start">

//                 {/* PHONE */}
//                 <div data-aos="fade-right"
//                   data-aos-delay="600" className="flex items-center gap-4 md:gap-6">
//                   <div className="text-primary text-xl bg-accent/70 p-4 rounded-full flex items-center justify-center">
//                     <FaPhoneAlt />
//                   </div>

//                   <div>
//                     <p className="text-sm text-gray-300">Phone</p>
//                     <p className="text-lg font-semibold text-white">
//                       <a
//                         href="tel:+8801886580500"
//                         className="hover:text-secondary/70!"
//                       >
//                         +880 1886580500
//                       </a>
//                     </p>
//                   </div>

//                 </div>

//                 {/* WHATSAPP */}
//                 <div data-aos="fade-right"
//                   data-aos-delay="600" className="flex items-center gap-4 md:gap-6">
//                   <div className="text-primary text-xl bg-accent/70 p-4 rounded-full flex items-center justify-center">
//                     <FaWhatsapp />
//                   </div>

//                   <div>
//                     <p className="text-sm text-gray-300">WhatsApp</p>
//                     <p className="text-lg font-semibold text-white">
//                       <a
//                         href="https://wa.me/8801886580500"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="hover:text-secondary/70!"
//                       >
//                         Message on WhatsApp
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>


//             {/* RESPONSE TIME */}
//             <div
//               data-aos="fade-up"
//               data-aos-delay="1000"
//               className="glass-card bg-primary/30! mt-6 p-4"
//             >
//               <h3 className="font-display text-xl font-semibold mb-2 text-accent">
//                 Response Time
//               </h3>
//               <p>
//                 I typically respond within 24–48 hours. For urgent inquiries,
//                 please reach out via WhatsApp.
//               </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE (FORM) */}
//           <div
//             data-aos="fade-left"
//             data-aos-delay="1000"
//             className="card bg-primary/30 w-full max-w-lg shrink-0 shadow-2xl"
//           >
//             <div className="card-body">
//               <fieldset className="fieldset">
//                 <h2
//                 data-aos="fade-left"
//                 data-aos-delay="1000"
//                 className="text-accent text-xl font-semibold xl:w-10/12"
//               >
//                 Send a Message
//               </h2>

//                 <label className="label mt-3">Name</label>
//                 <input
//                   type="text"
//                   className="input bg-white/30 w-full py-6 rounded-lg focus:outline-2 focus:outline-accent! focus-within:border-transparent"
//                   placeholder="Name"
//                 />

//                 <label className="label mt-3">Email</label>
//                 <input
//                   type="email"
//                   className="input bg-white/30 w-full py-6 rounded-lg focus:outline-2 focus:outline-accent! focus-within:border-transparent"
//                   placeholder="Email"
//                 />

//                 <label className="label mt-3">Message</label>
//                 <textarea
//                   placeholder="Message"
//                   className="textarea bg-white/30 textarea-sm w-full rounded-lg focus:outline-2 focus:outline-accent! focus-within:border-transparent"
//                 ></textarea>

//                 <button className="common-btn resume-btn mt-4">
//                   Send
//                 </button>

//               </fieldset>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
