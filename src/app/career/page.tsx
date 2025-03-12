import Head from "next/head";

const careers = [
  {
    title: "Software Engineering",
    description: "Design, develop, and maintain software applications and systems.",
    salary: "$80,000 - $120,000",
    growth: "High",
    industries: "Technology, Finance, Healthcare",
    skills: ["Programming", "Problem-Solving", "Collaboration"],
  },
  {
    title: "Data Science",
    description: "Analyze and interpret complex data to aid decision-making.",
    salary: "$90,000 - $130,000",
    growth: "Very High",
    industries: "Tech, Healthcare, Finance",
    skills: ["Python", "Machine Learning", "Data Visualization"],
  },
  {
    title: "Cybersecurity",
    description: "Protect digital systems from security threats and attacks.",
    salary: "$85,000 - $140,000",
    growth: "High",
    industries: "Finance, Government, Tech",
    skills: ["Networking", "Risk Analysis", "Ethical Hacking"],
  },
];

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers - Career Compass</title>
        <meta name="description" content="Explore Career Paths with Career Compass" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-50">
        
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-blue-100 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Explore Career Paths
            </h2>
            <p className="text-gray-700 text-sm md:text-base">
              Discover exciting career options, understand the key requirements, and find your path to professional success.
            </p>
          </div>
        </section>

        {/* Career Cards Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {careers.map((career, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-105">
                  <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">{career.title}</h3>
                  <p className="text-gray-700 text-sm md:text-base mb-3">{career.description}</p>
                  <p className="text-gray-700 text-sm md:text-base">
                    <strong>Average Salary:</strong> {career.salary}
                  </p>
                  <p className="text-gray-700 text-sm md:text-base">
                    <strong>Growth Potential:</strong> {career.growth}
                  </p>
                  <p className="text-gray-700 text-sm md:text-base mb-3">
                    <strong>Key Industries:</strong> {career.industries}
                  </p>
                  
                  {/* Skills */}
                  <div className="mb-4">
                    <strong className="text-gray-700 text-sm md:text-base">Essential Skills:</strong>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {career.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="inline-block bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-xs md:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <a
                    href={`/career/${career.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="inline-block mt-3 px-4 py-2 text-sm md:text-base text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
