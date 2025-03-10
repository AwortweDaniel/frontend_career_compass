import React from "react";

export default function AboutUs() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-200">
        <h2 className="text-4xl font-bold text-gray-900">
          About Career Compass
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Career Compass is dedicated to guiding individuals towards fulfilling
          careers through comprehensive resources, mentorship, and industry
          insights.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <div className="text-blue-600 text-3xl">🔍</div>
            <h4 className="text-xl font-bold mt-2">Clear Vision</h4>
            <p className="text-gray-600">
              Helping individuals shape their careers with strategic planning.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <div className="text-yellow-500 text-3xl">⭐</div>
            <h4 className="text-xl font-bold mt-2">Quality First</h4>
            <p className="text-gray-600">
              Providing top-tier career development resources.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-blue-50 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Our Impact</h3>
        <div className="flex justify-center gap-12 mt-6 text-blue-600 text-xl font-bold">
          <div>
            <p className="text-4xl">10,000+</p> Career Guides
          </div>
          <div>
            <p className="text-4xl">200+</p> Mentors
          </div>
          <div>
            <p className="text-4xl">95%</p> Success Rate
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Meet Our Team</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto"></div>
            <h4 className="text-xl font-bold mt-4">Manasseh</h4>
            <p className="text-gray-600">dev!</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto"></div>
            <h4 className="text-xl font-bold mt-4">Daniel</h4>
            <p className="text-gray-600">dev!</p>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-16 bg-blue-600 text-center text-white">
        <h3 className="text-2xl font-semibold">Join Our Community</h3>
        <p className="mt-4">
          Why stay alone when you can join a thriving career-focused community?
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">
            Join Now
          </button>
          <button className="bg-blue-800 px-4 py-2 rounded-lg">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
