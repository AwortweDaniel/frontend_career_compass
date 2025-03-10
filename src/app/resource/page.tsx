import Head from "next/head";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resource Page",
};

export default function Resources() {
  return (
    <>
      <Head>
        <title>Career Resources - Career Compass</title>
        <meta
          name="description"
          content="Explore career resources and insights to enhance your professional journey."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="py-16 bg-blue-100 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Career Resources & Insights
            </h2>
            <p className="text-gray-700 mb-6">
              Explore guides, tips, and tools to accelerate your professional
              growth.
            </p>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Latest Blog Post
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="bg-white shadow-md rounded-lg p-4">
                <Image src="/" alt="Blog Post" className="rounded-md mb-4" />
                <h4 className="font-bold text-lg text-gray-800 mb-2">
                  The 10 Most In-Demand Skills in 2024
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  Emily Rodriguez | January 15, 2024
                </p>
                <p className="text-gray-700 text-sm">
                  Discover the skills employers are looking for in the coming
                  year.
                </p>
              </article>
              <article className="bg-white shadow-md rounded-lg p-4">
                <div className="h-32 bg-blue-200 rounded-md mb-4"></div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">
                  How to Change Career Paths Successfully
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  John Doe | November 15, 2023
                </p>
              </article>
              <article className="bg-white shadow-md rounded-lg p-4">
                <div className="h-32 bg-blue-200 rounded-md mb-4"></div>
                <h4 className="font-bold text-lg text-gray-800 mb-2">
                  Navigating Your First Job Search
                </h4>
                <p className="text-gray-600 text-sm mb-2">
                  Jane Smith | December 12, 2023
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Career Resources */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Career Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="font-semibold text-lg text-gray-800 mb-4">
                  Resume Writing Guide
                </h4>
                <p className="text-gray-700 text-sm mb-4">
                  Create a strong professional resume.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Download Resource
                </a>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="font-semibold text-lg text-gray-800 mb-4">
                  Interview Preparation Toolkit
                </h4>
                <p className="text-gray-700 text-sm mb-4">
                  Tips and tricks to ace your interviews.
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Download Resource
                </a>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h4 className="font-semibold text-lg text-gray-800 mb-4">
                  Career Assessment Workbook
                </h4>
                <p className="text-gray-700 text-sm mb-4">
                  Identify your strengths and career fit.
                </p>
                <a
                  href="/career"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Download Resource
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
