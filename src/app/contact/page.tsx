import Head from "next/head";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Career Compass</title>
        <meta name="description" content="Get in touch with Career Compass for inquiries." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-50 min-h-screen px-4">
        <section className="py-16 bg-white">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 max-w-lg mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
                Send Us a Message
              </h2>
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 p-6 rounded-lg shadow-lg">
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+233 202747508"
                    className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <select
                    name="subject"
                    className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>General Inquiry</option>
                    <option>Support</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Write your message here..."
                    className="mt-1 w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <div className="col-span-1 sm:col-span-2 text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 px-6 w-full rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Image - Hidden on Small Screens */}
            <div className="hidden md:block lg:w-1/2">
              <Image
                src="/contact-image.jpg" // Update with actual image path
                width={600}
                height={400}
                alt="Contact Us"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
