"use client";
import { createContact } from "../../utils/actions/contact.action";
import toast from "react-hot-toast";
import { useRef } from "react";

const Form = () => {
  const ref = useRef<HTMLFormElement>(null);
  const services = [
    "Web Development",
    "SEO",
    "Email Marketing",
    "Google Ads",
    "Meta Ads",
    "Content Writing",
    "Social Media Marketing",
  ];

  return (
    <form
      ref={ref}
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        toast.promise(createContact(formData), {
          loading: "Sending...",
          success: "Message sent successfully!",
          error: "Failed to send message",
        });

        ref.current?.reset();
      }}
      className="flex flex-col gap-12"
    >
      <div className="flex flex-col gap-10 sm:flex-row">
        <div className="space-y-8">
          <div className="items-center flex justify-between">
            <label className="relative">
              <input
                type="text"
                name="name"
                placeholder=""
                required
                className="h-16 w-full text-black sm:w-70 px-6 text-lg sm:text-2xl  border-2 rounded-lg border-black  border-opacity-50 outline-none focus:border-blue-600 focus:text-black transition duration-200"
              />
              <span className="text-black text-lg sm:text-xl text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 input-text">
                Name
              </span>
            </label>
          </div>
          <div className=" items-center flex gap-3">
            <label className="relative flex items-center justify-center ">
              <input
                type="text"
                name="email"
                placeholder=""
                required
                className="h-16 w-full text-black sm:w-70 px-6 text-lg sm:text-2xl  border-2 rounded-lg border-black  border-opacity-50 outline-none focus:border-blue-600 focus:text-black transition duration-200"
              />
              <span className="text-black text-lg sm:text-xl text-opacity-80 absolute left-0 top-4 mx-5 px-2 transition duration-200 input-text">
                Email Address
              </span>
            </label>
          </div>
        </div>
        <div className="space-y-8">
          <div className=" items-center flex justify-between">
            <label className="relative">
              <input
                type="text"
                name="company"
                placeholder=""
                className="h-16 w-full text-black sm:w-70 px-6 text-lg sm:text-2xl  border-2 rounded-lg border-black  border-opacity-50 outline-none focus:border-blue-600 focus:text-black transition duration-200"
              />
              <span className="text-black text-lg sm:text-xl text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 input-text">
                Company
              </span>
            </label>
          </div>
          <div className=" items-center flex gap-3">
            <label className="relative flex items-center justify-center ">
              <input
                type="tel"
                name="phone"
                placeholder=""
                required
                className="h-16 w-full text-black sm:w-70 px-6 text-lg sm:text-2xl  border-2 rounded-lg border-black  border-opacity-50 outline-none focus:border-blue-600 focus:text-black transition duration-200"
              />
              <span className="text-black text-lg sm:text-xl text-opacity-80 absolute left-0 top-4 mx-5 px-2 transition duration-200 input-text">
                Phone Number
              </span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <div>
          <label className="relative flex items-center justify-center">
            <textarea
              placeholder=""
              name="message"
              required
              className="h-72 w-full text-black px-6 py-3 text-lg sm:text-2xl border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-blue-600 focus:text-black transition duration-200"
            ></textarea>
            <span className="text-black text-lg sm:text-xl text-opacity-80 absolute left-0 top-4 mx-5 px-2 transition duration-200 input-text">
              Message
            </span>
          </label>
        </div>
        <h3 className="font-semibold text-black text-xl pt-5">
          Services <span className="text-red-600">*</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center pt-5 pb-6">
          {services.map((service, index) => (
            <div className="flex items-center gap-2" key={index}>
              <div>
                <input
                  type="checkbox"
                  value={service}
                  name="service"
                  className="form-checkbox mt-1 h-5 w-5 bg-blue-600 checked:bg-blue-600 checked:border-transparent"
                />
              </div>
              <div>
                <label className="text-black text-lg">{service}</label>
              </div>
            </div>
          ))}
        </div>
        <div>
          <label className="relative flex items-center justify-center">
            <input
              type="text"
              name="other"
              placeholder=""
              className="h-12 w-full text-black sm:w-70 px-6 text-lg sm:text-2xl  border-2 rounded-lg border-black  border-opacity-50 outline-none focus:border-blue-600 focus:text-black transition duration-200"
            />
            <span className="text-black text-lg sm:text-xl text-opacity-80 absolute left-0 top-3 mx-6 px-2 transition duration-200 input-text">
              Other
            </span>
          </label>
        </div>
        <div className="flex items-center pt-4 justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white text-lg sm:text-xl font-semibold w-32 h-16 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
