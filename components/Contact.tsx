"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import ContentParagraph from "./SectionHeader";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <section className="my-16">
      <div className="py-8 sm:px-8 mx-auto max-w-screen-md dark:border-white/5 sm:border sm:rounded-xl sm:shadow-lg">
        <ContentParagraph
          topic="Contact"
          content="Let's get in touch! Feel free to shoot me an email and I will try to get back to you as soon as possible."
        />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-10">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-400"
            >
              Full Name
            </label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 dark:bg-slate-800 border dark:text-slate-50 border-gray-300 dark:border-slate-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="John Doe"
              {...register("name", { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-400"
            >
              Your email
            </label>
            <input
              type="email"
              className="shadow-sm bg-gray-50 dark:bg-slate-800 border dark:text-slate-50 border-gray-300 dark:border-slate-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="example@domain.com"
              {...register("email", { required: true })}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-400"
            >
              Your message
            </label>
            <textarea
              rows={4}
              placeholder="Leave a comment..."
              className="block p-2.5 w-full text-sm text-gray-900 dark:text-slate-50 bg-gray-50 dark:bg-slate-800 rounded-lg shadow-sm border border-gray-300 dark:border-slate-600 focus:ring-primary-500 focus:border-primary-500"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm text-center font-semibold hover:bg-blue-400 dark:hover:bg-blue-500 transition text-white rounded-lg bg-blue-500 dark:bg-blue-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Send Message
          </button>
        
        </form>
      </div>
    </section>
  );
};

export default Contact;
