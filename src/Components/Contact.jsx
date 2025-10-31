import React from "react";
import image from "../assets/mine-5.webp";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="my-10 2xl:mt-32">
      <div className="hero">
        <div className="hero-content gap-10 px-0 md:w-[80%] flex-col lg:flex-row xl:w-[90%]">
          <div className="text-primary text-center lg:text-left">
            <h1 className="text-4xl font-bold xl:text-5xl">CONTACT ME</h1>
            <p className="pt-3 pb-10 xl:w-10/12">
              Let's Bring Your Ideas to Life! Reach out and let’s make something
              great together.
            </p>

            <div className="flex justify-evenly items-center gap-4 md:justify-normal text-justify md:gap-6">
              {/* Icon */}
              <div className="text-primary text-xl bg-accent/70 p-4 rounded-full flex items-center justify-center">
                <FaRegPaperPlane />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <p className="text-lg font-semibold text-white">
                  abdurrobr34l@gmail.com
                </p>
              </div>
            </div>

            <div className="flex justify-evenly items-center gap-4 mt-5 md:justify-normal text-justify md:gap-6">
              {/* Icon */}
              <div className="text-primary text-xl bg-accent/70 p-4 rounded-full flex items-center justify-center">
                <FaLocationPinLock />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm text-gray-300">Address</p>
                <p className="text-lg font-semibold text-white">
                  Halishahar,Chittagong Bangladesh
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-white/40 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label mt-3">Name</label>
                <input
                  type="text"
                  className="input w-full py-6 rounded-lg"
                  placeholder="Name"
                />

                <label className="label mt-3">Email</label>
                <input
                  type="email"
                  className="input w-full py-6 rounded-lg"
                  placeholder="Email"
                />

                <label className="label mt-3">Message</label>
                <textarea
                  placeholder="Message"
                  class="textarea textarea-sm w-full rounded-lg"
                ></textarea>

                <button className="common-btn resume-btn mt-4">Send</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
