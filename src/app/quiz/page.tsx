import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Quiz - Career Compass",
};

export default function Quiz() {
  return (
    <>
      <Head>
        <title>Career Quiz - Career Compass</title>
        <meta
          name="description"
          content="Career Development Quiz to Discover Your Ideal Career Path"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50 min-h-screen px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <section className="py-16 bg-blue-100 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Career Development Quiz
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Find your ideal career path! Discover strengths, explore
              interests, and identify your career potential.
            </p>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 text-lg">
              Start Quiz
            </button>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
              Career Path Discovery Quiz
            </h3>
            <form className="bg-white shadow-md rounded-lg p-6 sm:p-8 space-y-8">
              {/* Question 1 */}
              <div>
                <p className="text-gray-800 font-semibold mb-4 text-lg">
                  1. Which of the following best describes your strengths?
                </p>
                <div className="space-y-2">
                  <label className="block flex items-center">
                    <input type="radio" name="q1" className="mr-2" /> Analytical
                    thinking and problem-solving
                  </label>
                  <label className="block flex items-center">
                    <input type="radio" name="q1" className="mr-2" /> Creativity
                    and innovation
                  </label>
                  <label className="block flex items-center">
                    <input type="radio" name="q1" className="mr-2" /> Leadership
                    and decision-making
                  </label>
                  <label className="block flex items-center">
                    <input type="radio" name="q1" className="mr-2" /> Empathy
                    and communication
                  </label>
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <p className="text-gray-800 font-semibold mb-4 text-lg">
                  2. How comfortable are you with public speaking?
                </p>
                <div className="space-y-2">
                  <label className="block flex items-center">
                    <input type="radio" name="q2" className="mr-2" /> Very
                    comfortable; I enjoy addressing an audience
                  </label>
                  <label className="block flex items-center">
                    <input type="radio" name="q2" className="mr-2" /> Somewhat
                    comfortable; I can manage when needed
                  </label>
                  <label className="block flex items-center">
                    <input type="radio" name="q2" className="mr-2" /> Neutral;
                    it depends on the situation
                  </label>
                  <label className="block flex items-center">
                    <input type="radio" name="q2" className="mr-2" /> Not
                    comfortable; I prefer one-on-one communication
                  </label>
                </div>
              </div>

              {/* Question 3 */}
              <div>
                <p className="text-gray-800 font-semibold mb-4 text-lg">
                  3. What type of tasks do you find easiest to complete?
                </p>
                <div className="space-y-2">
                  <label className="block flex items-center">
                    <input type="radio" name="q3" className="mr-2" /> Data
                    analysis or research
                  </label>
                  <label className="block flex items-center">
                    <input type="radio" name="q3" className="mr-2" /> Designing
                    or creating something new
                  </label>
                  <label className="block flex items-center">
                    <input type="radio" name="q3" className="mr-2" /> Planning
                    and organizing projects
                  </label>
                  <label className="block flex items-center">
                    <input type="radio" name="q3" className="mr-2" /> Teaching
                    or coaching others
                  </label>
                </div>
              </div>

              {/* Question 4 */}
              <div>
                <p className="text-gray-800 font-semibold mb-4 text-lg">
                  4. How do you typically approach challenges at work?
                </p>
                <div className="space-y-2">
                  <label className="block flex items-center">
                    <input type="radio" name="q4" className="mr-2" /> Analyze
                    the problem and develop a logical solution
                  </label>
                  <label className="block flex items-center">
                    <input type="radio" name="q4" className="mr-2" /> Take
                    charge and delegate tasks to a team
                  </label>
                  <label className="block flex items-center">
                    <input type="radio" name="q4" className="mr-2" /> Consult
                    with others and work collaboratively
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 text-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}