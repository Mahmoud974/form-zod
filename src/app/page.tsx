"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import { formUser, Inputs } from "./schemas/userSchema";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formUser),
  });
  const [user, serUser] = useState<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    formUser.parse(data);
    serUser(data);
    console.log(data);
  };
  console.log(user);

  return (
    <main className="flex h-screen justify-center items-center ">
      <section
        className="container mx-auto max-w-xl shadow-md bg-white rounded-xl flex justify-center items-center text-gray-700 py-12 px-8"
        role="main"
        aria-labelledby="contact-heading"
      >
        <form
          className="w-full"
          aria-labelledby="contact-heading"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1
            id="contact-heading"
            className="text-3xl font-bold text-left pb-6"
          >
            Contact Us
          </h1>

          <div className="flex space-x-4 mb-10">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block font-medium">
                First Name <span aria-hidden="true">*</span>
              </label>
              <input
                {...register("firstname", {
                  required: "First name is required",
                })}
                type="text"
                id="firstName"
                className={`border-2 p-2 rounded-md w-full ${
                  errors.firstname ? "border-red-600" : "border-gray-300"
                }`}
                aria-required="true"
              />
              <ErrorMessage
                errors={errors}
                name="firstname"
                render={({ message }) => (
                  <p className="text-red-500">{message}</p>
                )}
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="lastName" className="block font-medium">
                Last Name <span aria-hidden="true">*</span>
              </label>
              <input
                {...register("lastname", { required: "Last name is required" })}
                type="text"
                id="lastName"
                className={`border-2 p-2 rounded-md w-full ${
                  errors.lastname ? "border-red-600" : "border-gray-300"
                }`}
                aria-required="true"
              />
              <ErrorMessage
                errors={errors}
                name="lastname"
                render={({ message }) => (
                  <p className="text-red-500">{message}</p>
                )}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block font-medium">
              Email Address <span aria-hidden="true">*</span>
            </label>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              id="email"
              className={`border-2 p-2 rounded-md w-full ${
                errors.email ? "border-red-600" : "border-gray-300"
              }`}
              aria-required="true"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="text-red-500">{message}</p>
              )}
            />
          </div>

          <fieldset className="mb-4">
            <legend className="sr-only">Enquiry Type</legend>
            <div>
              <label htmlFor="enquiryType" className="">
                Query Type <span aria-hidden="true">*</span>
              </label>
              <div className="flex space-x-4 mt-3">
                <div
                  className={`flex items-center border-2 ${
                    errors.enquiryType ? "border-red-600" : "border-gray-300"
                  } flex-grow px-2 py-2 rounded-xl`}
                >
                  <input
                    {...register("enquiryType", {
                      required: "Enquiry type is required",
                    })}
                    type="radio"
                    id="generalEnquiry"
                    value="general"
                    className="border-2 border-gray-300 p-2 rounded-full cursor-pointer"
                  />
                  <p className="ml-2">General Enquiry</p>
                </div>

                <div
                  className={`flex items-center border-2 ${
                    errors.enquiryType ? "border-red-600" : "border-gray-300"
                  } flex-grow px-2 py-2 rounded-xl`}
                >
                  <input
                    {...register("enquiryType", {
                      required: "Enquiry type is required",
                    })}
                    type="radio"
                    id="supportEnquiry"
                    value="support"
                    className="border-2 border-gray-300 p-2 rounded-full cursor-pointer"
                  />
                  <p className="ml-2">Support Enquiry</p>
                </div>
              </div>
              {errors.enquiryType && (
                <p className="text-red-500">{errors.enquiryType.message}</p>
              )}
            </div>
          </fieldset>

          <div className="mb-4">
            <label htmlFor="message" className="block font-medium">
              Message <span aria-hidden="true">*</span>
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              id="message"
              className={`border-2 p-2 rounded-md w-full ${
                errors.message ? "border-red-600" : "border-gray-300"
              }`}
              aria-required="true"
            ></textarea>
            <ErrorMessage
              errors={errors}
              name="message"
              render={({ message }) => (
                <p className="text-red-500">{message}</p>
              )}
            />
          </div>

          <div className="flex flex-col my-2">
            <div>
              <input
                {...register("consent")}
                type="checkbox"
                id="consent"
                className="cursor-pointer"
              />
              <label htmlFor="consent" className="ml-2">
                I consent to being contacted by the team
              </label>
            </div>
            <ErrorMessage
              errors={errors}
              name="consent"
              render={({ message }) => (
                <p className="text-red-500">{message}</p>
              )}
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded-md w-full mt-6 cursor-pointer"
              aria-label="Submit the form"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
