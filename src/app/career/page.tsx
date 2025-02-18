import Head from "next/head";

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers - Career Compass</title>
        <meta
          name="description"
          content="Explore Career Paths with Career Compass"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50">
        
        {/* Hero Section */}
        <section className="py-16 bg-blue-100 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Explore Career Paths
            </h2>
            <p className="text-gray-700 mb-6">
              Discover exciting career options, understand the key requirements,
              and find your path to professional success.
            </p>
            <div className="flex justify-center space-x-4">
              <input
                type="text"
                placeholder="Search careers..."
                className="py-2 px-4 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Industries</option>
                <option>Technology</option>
                <option>Healthcare</option>
                <option>Finance</option>
              </select>
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Career Cards Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {/* Career Card */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  Software Engineering
                </h3>
                <p className="text-gray-700 mb-4">
                  Design, develop, and maintain software applications and
                  systems.
                </p>
                <p className="text-gray-700">
                  <strong>Average Salary:</strong> $80,000 - $120,000
                </p>
                <p className="text-gray-700">
                  <strong>Growth Potential:</strong> High
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Key Industries:</strong> Technology, Finance,
                  Healthcare
                </p>
                <div>
                  <strong>Essential Skills:</strong>
                  <span className="inline-block bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm ml-2">
                    Programming
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm ml-2">
                    Problem-Solving
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-sm ml-2">
                    Collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
