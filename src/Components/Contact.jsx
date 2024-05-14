import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_djfwd6f",
        "template_epq2tmq",
        form.current,
        "C2uiZLwuPgO9ShnsS"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <main className="relative py-28 mt-20">
        <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="max-w-lg space-y-3 sm:mx-auto sm:px-0">
            <p className="text-white text-3xl font-semibold sm:text-4xl">
              Contact me
            </p>
            <p className="text-gray-300">
              Feel free to reach out for a collaborative journey in crafting
              innovative and user-centric web experiences together!
            </p>
          </div>
          <div className="mt-12 mx-auto px-4 p-8 bg-color ring-1 ring-gray-100/10 text-gray-100 sm:max-w-lg sm:px-8 rounded-xl">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full mt-2 px-3 py-2 bg-transparent outline-none ring-1 ring-gray-100/10 focus:ring-gray-100/10 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full mt-2 px-3 py-2 bg-transparent outline-none ring-1 ring-gray-100/10 focus:ring-gray-100/10 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  required
                  name="message"
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none ring-1 ring-gray-100/10 focus:ring-gray-100/10 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <button className="w-full px-4 py-2 font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
