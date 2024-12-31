import { useState } from "react";
import ContentParagraph from "./SectionHeader";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      await res.json();

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="my-16">
      <div className="py-8 sm:px-8 mx-auto max-w-screen-md dark:border-white/5 sm:border sm:rounded-xl sm:shadow-lg">
        <ContentParagraph
          topic="Contact"
          content="Let's get in touch! Feel free to shoot me an email and I will try to get back to you as soon as possible."
        />
        <form onSubmit={handleSubmit} className="space-y-6 mt-10">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-400">
              Your email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 dark:bg-slate-800 border dark:text-slate-50 border-gray-300 dark:border-slate-600 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name@email.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-400">
              Your message
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 dark:text-slate-50 bg-gray-50 dark:bg-slate-800 rounded-lg shadow-sm border border-gray-300 dark:border-slate-600 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            disabled={status === "sending"}
            type="submit"
            className="py-3 px-5 text-sm text-center font-semibold hover:bg-blue-400 dark:hover:bg-blue-500 transition text-white rounded-lg bg-blue-500 dark:bg-blue-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="mt-4 text-green-600">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="mt-4 text-red-600">
              Error sending message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
