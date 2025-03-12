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
          className="relative bg-cover bg-center h-[60vh] md:h-[75vh] flex items-center justify-center px-4"
          style={{ backgroundImage: "url('/path/to/hero-background.jpg')" }}
        >
          <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex items-center justify-center px-4">
            <div className="text-center text-white max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Discover Your Ideal Career Path
              </h2>
              <p className="text-lg md:text-xl mb-6">
                Take our personalized quiz to explore career opportunities tailored for you.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <Link href="/quiz" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
                  Start Quiz
                </Link>
                <Link href="/about" className="bg-white text-blue-600 py-2 px-6 rounded hover:bg-gray-200">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              What We Offer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "Personalized Quiz", desc: "Identify your strengths and ideal career paths." },
                { title: "Career Resources", desc: "Access toolkits, guides, and resources for growth." },
                { title: "Expert Guidance", desc: "Get insights from industry experts." },
              ].map((offer, index) => (
                <div key={index} className="bg-white shadow-lg p-6 rounded">
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">
                    {offer.title}
                  </h4>
                  <p className="text-gray-700">{offer.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-6 bg-blue-100">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Why Choose Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "Personalized Solutions", desc: "Tailored recommendations for you." },
                { title: "Comprehensive Resources", desc: "Unlock your potential with unique materials." },
                { title: "Expert Guidance", desc: "Navigate your career effectively." },
              ].map((choice, index) => (
                <div key={index} className="bg-white shadow-lg p-6 rounded">
                  <h4 className="text-xl font-semibold text-blue-600 mb-4">
                    {choice.title}
                  </h4>
                  <p className="text-gray-700">{choice.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[{ stat: "10M+", label: "Participants" }, { stat: "1000+", label: "Resource Professionals" }].map((stat, index) => (
                <div key={index} className="bg-white shadow-md p-6 rounded-lg">
                  <h4 className="text-3xl font-bold text-blue-600 mb-2">{stat.stat}</h4>
                  <p className="text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
