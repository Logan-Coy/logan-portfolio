"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

function Contact() {
  //Formik Logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      date: "",
      type: "-- Select One --",
      message: "",
    },

    //Validate Form
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),

    //Submit Form
    onSubmit: async (values, { resetForm }) => {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify(values),
      });
      setToggle(true);
      //@ts-expect-error
      resetForm({ values: "" });
    },
  });

  //Toast toggle
  const [toggle, setToggle] = useState(false);
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-emerald-300 from-10% to-slate-800 py-10 "
    >
      <div className="flex justify-center mb-10">
        <h2 className="font-montserrat font-bold text-slate-800 text-5xl text-center">
          CONTACT
          <div className="border-b-8 border w-[60%] mx-auto border-slate-800 mt-3 rounded-md"></div>
        </h2>
      </div>
      <div className="mx-auto w-[90%] md:w-[80%] xl:w-[70%] p-2 xs:p-8 bg-white shadow-md rounded-xl place-items-center my-6 mb-16">
        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="flex rounded-lg mt-2">
          <div className="p-4">
            <div className="pb-8 flex">
              <h3 className="font-montserrat text-2xl ss:text-3xl font-semibold text-slate-800 mt-6 sm:mt-0">
                Get in Touch!
                <div className="border-b-4 border w-[80%] border-emerald-300 mt-2 rounded-md"></div>
              </h3>
            </div>
            <p className="text-xl leading-[30px] font-montserrat font-light">
              Thank you for visiting my portfolio. I am passionate about
              development and excited for the chance to hear more about your
              ogainization and team. If you have any questions, would like to
              discuss potential projects, or schedule an interview, please feel
              free to contact me. I am eager to bring my skills and creativity
              to your organization.
            </p>
            <div className="mt-6">
              {/* Name input field */}
              <div className="pb-4">
                <label
                  className={`block font-montserrat text-sm ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-500"
                      : ""
                  }`}
                  htmlFor="name"
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name *"}
                  <input
                    className={`block border-2 border-slate-800 p-2 mt-2 rounded-md w-full ss:w-1/2 focus:border-emerald-300 focus:ring-emerald-300 ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-500"
                        : ""
                    }`}
                    id="name"
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your full name"
                  />
                </label>
              </div>

              {/* Email input field */}
              <div className="pb-4">
                <label
                  className={`block font-montserrat text-sm ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-500"
                      : ""
                  }`}
                  htmlFor="email"
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email *"}
                  <input
                    className={`block border-2 border-slate-800 p-2 mt-2 rounded-md w-full ss:w-1/2 focus:border-emerald-300 focus:ring-emerald-300 ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : ""
                    }`}
                    id="email"
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter your email address"
                  />
                </label>
              </div>

              {/* Message input field */}
              <div className="pb-4">
                <label
                  className={`block font-montserrat text-sm ${
                    formik.touched.message && formik.errors.message
                      ? "text-red-500 focus:ring-red-500"
                      : ""
                  }`}
                  htmlFor="message"
                >
                  {formik.touched.message && formik.errors.message
                    ? formik.errors.message
                    : "Message *"}
                </label>
                <textarea
                  className={`border-2 border-slate-800 p-2 mt-2 rounded-md w-full focus:border-emerald-300 focus:ring-emerald-300 ${
                    formik.touched.message && formik.errors.message
                      ? "border-red-500"
                      : ""
                  }`}
                  rows={3}
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Type the message you would like to send me"
                />
              </div>

              {/* Submit form button */}
              <button
                type="submit"
                className="bg-slate-800 text-emerald-300 font-semibold font-montserrat text-xl py-3 mt-6 rounded-lg w-[200px] drop-shadow-lg hover:scale-105"
              >
                Submit
              </button>

              {/* Success Toast*/}
              <div
                id="toast-success"
                className={`${
                  toggle ? "flex" : "hidden"
                } items-center w-full max-w-sm p-4 my-4 text-gray-500 bg-green-200 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`}
                role="alert"
              >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="sr-only">Check icon</span>
                </div>
                <div className="ml-3 text-sm font-semibold font-montserrat">
                  Form sent successfully!
                </div>
                <button
                  type="button"
                  className="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  data-dismiss-target="#toast-success"
                  aria-label="Close"
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
