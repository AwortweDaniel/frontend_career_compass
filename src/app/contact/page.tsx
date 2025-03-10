import Head from "next/head";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Career Compass</title>
        <meta
          name="description"
          content="Get in touch with Career Compass for more inquiries."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-50 min-h-screen">
        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="User full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="youremail@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+233 202747508"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Select a Subject</option>
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write your message here"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="hidden lg:block w-full lg:w-1/2">
              <Image
                src="/"
                alt="Contact Us"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
