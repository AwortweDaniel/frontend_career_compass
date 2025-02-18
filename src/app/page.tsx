import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Career Compass</title>
        <meta
          name="description"
          content="Discover Your Ideal Career Path with Career Compass"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-96"
          style={{ backgroundImage: "url('/path/to/hero-background.jpg')" }}
        >
          <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">
                Discover Your Ideal Career Path
              </h2>
              <p className="text-lg mb-6">
                Take our personalized quiz to explore career opportunities
                tailored for you.
              </p>
              <div className="space-x-4">
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                  <Link href="/quiz">Start Quiz</Link>
                </button>
                <button className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200">
                  <Link href="/about">Learn More</Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              What We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg p-6 rounded">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  Personalized Quiz
                </h4>
                <p className="text-gray-700">
                  Identify your strengths and ideal career paths with a
                  customized quiz.
                </p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  Career Resources
                </h4>
                <p className="text-gray-700">
                  Access toolkits, guides, and resources to enhance your career
                  growth.
                </p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  Expert Guidance
                </h4>
                <p className="text-gray-700">
                  Get insights from industry experts to shape your career
                  journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-blue-100">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Why Choose Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg p-6 rounded">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  Personalized Solutions
                </h4>
                <p className="text-gray-700">
                  Tailored recommendations based on your profile and
                  aspirations.
                </p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  Comprehensive Resources
                </h4>
                <p className="text-gray-700">
                  Access unique career materials to unlock your potential.
                </p>
              </div>
              <div className="bg-white shadow-lg p-6 rounded">
                <h4 className="text-xl font-semibold text-blue-600 mb-4">
                  Expert Guidance
                </h4>
                <p className="text-gray-700">
                  Leverage industry expertise to navigate your career
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-blue-600 mb-2">10M+</h4>
                <p className="text-gray-700">Participants</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-blue-600 mb-2">1000+</h4>
                <p className="text-gray-700">Resource Professionals</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
